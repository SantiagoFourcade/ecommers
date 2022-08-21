import {getDocs, collection, query, where} from "firebase/firestore"
import { dataBase } from "./index"
import {createAdaptarProductsFromFirestore} from "../../AdaptarProducts/AdaptarProducts"

export const getProducts = (categoryId) => {
    const collectionRef = !categoryId 
        ? collection(dataBase, 'products')
        : query(collection(dataBase, 'products'), where('category', '==', categoryId))

    return getDocs(collectionRef).then(response => {
        const productsAdapted = response.docs.map(doc => {
            return createAdaptarProductsFromFirestore(doc)
        })
        return productsAdapted
    }).catch(error => {
        return error
    })
}