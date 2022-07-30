const products = [
    {
        id: "1",
        name: "Corsair Void",
        price:40000,
        category:"Gamer",
        img:"https://m.media-amazon.com/images/S/aplus-media/vc/6f8dfd55-8f02-4f9d-86d4-008f8ac8f851._CR0,0,1464,600_PT0_SX1464__.jpg",
        stock:40,
        description: "Headset 7.1 Gamer"
    },
    {
        id:"2",
        name:"Sony WH-CH510",
        price:20000,
        category:"Normal",
        img:"https://i.ytimg.com/vi/zOF3AvEKStU/maxresdefault.jpg",
        stock:60,
        description:"Bluetooth"
    },
    {
        id:"3",
        name:"Soundcore Life Q30",
        price:35000,
        category:"Noise Cancelling",
        img:"https://m.media-amazon.com/images/I/71td6PxaFNL._AC_SL1500_.jpg",
        stock:35,
        description:"Bluetooth"

    },
    {
        id:"4",
        name:"Razer Hammerhead",
        price:25000,
        categoy:"Headphones",
        img:"http://assets2.razerzone.com/images/pnx.assets/c159a56124ada39d058a3ebeba797355/razer-hammerhead-true-wireless-x-ogimg.jpg",
        stock:40,
        description:"In-ear"
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000)

    })
}