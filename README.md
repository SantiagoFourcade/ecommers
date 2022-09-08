# Comision 34695

> Ecommerce.

This product is being built

## Running Locally

```bash
$ git branch -M main
$ git remote add origin https://github.com/SantiagoFourcade/ecommershf.git
$ npm creat-react- app ecommers
$ cd ecommers
$ npm install
$ npm start
```

## Built Using

- [Create-React-App](https://create-react-app.dev/)
- [GitHub] (https://github.com/SantiagoFourcade/ecommers/tree/main)

## Routes

- [Navbar] (la imagen te redirige al sitio principal)
- [NavbarBotonera] (Botonera que te permite elegir entre las 4 categorias de auriculares que hay en el sitio)
- [detalleBtn] (te re dirige a un breve detalle del producto con la pequeña dificultad de que no logro que aparezca el nombre minimamente)
- [Carrito] (Al momento de hacer click al boton de finalizar compra nos dirige al carrito de compra con los elementos agregados, nos brinda la posibilidad de poder eliminarlos o de vaciar el carrito entero)
- [CheckOut] (Es la seccion en donde ubicariamos el formulario de "LogIn" para termina de hacer la confirmacion de la compra en construccion)
- [Form] (Formulario de confirmacion de compra)

## Servicios

- [Firebase] (Incluimos el uso de Firebase, generando una BD de nuestros productos, uno por cada una de las categorias)

## Componentes ( en uso )

- [navbar] 
- [itemsCarrito]
- [itemListContainer]
- [itemList]
- [itemDetailsContainer]
- [itemDetails]
- [itemCount]
- [item]
- [CheckOut]
- [CartWidget]
- [Carrito]
- [Form]
## Context

- [CardContext] (Aplicamos el uso del "Context" en un principio usando el "CartContext" para todo lo que tiene que ver con el carrito)
- [authContext] (Investigando un poco pude ver que se puede usar una especie de autenticador desde Firebase por lo que se estaria probando)