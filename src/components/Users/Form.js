import {useState, useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { getFirestore, collection, FieldPath } from "firebase/firestore";
import { dataBase } from "../../Servicios/Firebase";
import "./Form.css";


function Field ({
    name,
    inputLabel,
    nameField,
    style,
    type,
    id,
    placeholder,
    valueInput,
    onChange,
}) {

    return (

        <>
        <div class="form">
            <label htmlFor={inputLabel} name={name} class="formLabel" style={style}>
                {nameField}
            </label>
            <input type={type} value={valueInput} class="formControl" id={id} placeholder={placeholder} required onChange={onChange}></input> 
        </div>
        </>
    );
}

const Form = () => {

    const {cart, setCart, setQuantity} = useContext(CartContext);
    const [name, setName] = useState ("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState ("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [orderId, setOrderId] = useState(null);
    const [sent, setSent] = useState(false);

    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const onPhoneChange = (event) => {
        setPhone(event.target.value);
    };
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const onEmailConfirmChange = (event) => {
        setEmailConfirm(event.target.value);
    };

    const updateDataFirebase = async () => {
        const db = getFirestore();
        const itemsToUpdate = collection(dataBase, "Products").where(FieldPath.documentId(), "in", cart.map((i) => i.id));

        const query = await itemsToUpdate.get();
        const batch = db.batch();

        const outOfStock = [];
        query.docs.forEach((docSnapShot, idx) => {
            if(docSnapShot.data().stock >= cart[idx].quantity) {
                batch.update(docSnapShot.ref, {
                    stock: docSnapShot.data().stock - cart[idx].quantity
                });
            } else {
                outOfStock.push({...docSnapShot.data(), id:docSnapShot.id});
            }
           
            
        });

        if (outOfStock.length === 0) {
            await batch.commit();
        }
    };

    async function createOrder() {
        setSent(true);
        //Info de usuario
        const userInfo = {name, phone, email};

        //Productos
        const items = cart.map((p) => ({
            id: p.id,
            name:p.name,
            quantity: p.quantity,
            subtotal: p.price*p.quantity,
        }));

        //Total

        const totalPrice = cart.reduce((total, product) => total + product.quantity * product.price, 0);
        const db = getFirestore();
        const orders = db.collections("orders");
        const newOrder = {
            userInfo,
            items,
            date: new Date(),
            total: totalPrice,
        };
        
        function clean() {
            setCart([]);
            setQuantity(0);
        }

        try {
            const {id} = await orders.add(newOrder);
            setOrderId(id);
            clean();
        } catch (error) {
            console.log("Ha ocurrido un error creando la orden de compra");
        }
        updateDataFirebase();
        }

        if(orderId) {
            return (
                <>
                <div class="confContainer">
                    <div class="">
                        <h2 class="">Gracias por elegirnos!</h2>
                        <h4 class="">La compra se a realizado exitosamente.</h4>
                        <strong>El ID de su compra es {orderId}</strong>
                        <p class="">Ecommers</p>
                        <Link class="" to={"/"}>
                            <strong>Ir a comprar</strong>
                        </Link>
                    </div>
                </div>
                </>
            );
        }

        return (
            <>
            <div class="formContainer">
                    <div class="formTitle">
                        <h4 class="">Completar el formulario con tus datos para confirmar la compra.</h4>
                    </div>
                <div class="form">
                   <div class="formInput">
                    <form>
                        <div class="">
                            <Field
                            inputLabel="inputName"
                            name="name"
                            nameField="Nombre y Apellido"
                            valueInput={name}
                            style={{paddingTop: "5px"}}
                            type="text"
                            id="inputName"
                            placeholder="Nombre y Apellido"
                            onChange={onNameChange}
                            />
                            <Field
                            inputLabel="inputPhone"
                            name="phone"
                            nameField="Telefono"
                            valueInput={phone}
                            style={{padding:"10px"}}
                            type="text"
                            id="inputPhone"
                            placeholder="112233445566778899"
                            onChange={onPhoneChange}
                            />
                            <Field
                            inputLabel="inputEmail"
                            name="email"
                            nameField="Email"
                            valueInput={email}
                            style={{padding:"10px"}}
                            type="email"
                            id="inputEmail"
                            placeholder="mail@ejemplo.com"
                            onChange={onEmailChange}
                            />
                            <Field
                            inputLabel="inputConfirmEmail"
                            name="email"
                            nameField="Conrimar Email"
                            valueInput={emailConfirm}
                            style={{padding:"10px"}}
                            type="email"
                            id="inputConfirmEmail"
                            placeholder="mail@ejemplo.com"
                            onChange={onEmailConfirmChange}
                            />

                        </div>
                        <button class="confBtn" type="submit" disabled={!name || !phone || !email || emailConfirm !== email || sent} onClick={createOrder} style={{marginBotton: "30px"}}>

                            <strong>Confirmar!</strong>

                        </button>
                    </form>
                </div>
            </div>
            </div>
            </>
        );
        };


        export default Form;
    
