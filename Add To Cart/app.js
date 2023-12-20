let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

openShopping.addEventListener('click', () => {
    body.classList.add('active')
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let product = [
    {
        id: 1,
        name: 'PRODUCT NAME1',
        image: 'image1.jpg',
        price: 1000

    },
    {
        id: 2,
        name: 'PRODUCT NAME2',
        image: 'image2.jpg',
        price: 1200

    },
    {
        id: 3,
        name: 'PRODUCT NAME3',
        image: 'image3.jpg',
        price: 1400

    },
    {
        id: 4,
        name: 'PRODUCT NAME4',
        image: 'image4.jpg',
        price: 1500

    },
    {
        id: 5,
        name: 'PRODUCT NAME5',
        image: 'image5.jpg',
        price: 1550
    
    },
    {
        id: 6,
        name: 'PRODUCT NAME6',
        image: 'image6.JPG',
        price: 1600

    },
]
let listCards = []
function initApp(){
    product.forEach((value, key) => {
        console.log(value)
        let newDiv = document.createElement('div')
        newDiv.classList.add('item')  
        list.appendChild(newDiv)
        newDiv.innerHTML = `
        <img src="./Images/${value.image}" >
        <div class="title">${value.name}</div>
        <div class="price">Rs ${value.price.toLocaleString()}</div>
        <button onclick=addToCart(${key})>Add To Card</button>
        `

    })
}
initApp()
function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(product[key]));
        // listCards[key] = product[key]
        listCards[key].quantity = 1
    }
    relaodCard()

}
function relaodCard(){
    listCard.innerHTML = ''
    let count = 0
    let totalPrice = 0
    listCards.forEach((value, key) =>{
        totalPrice = totalPrice + value.price
        count = count + value.quantity

        if(value != null){
            let newLi = document.createElement('li')
            listCard.appendChild(newLi)
            newLi.innerHTML = `
            <div><img src="./Images/${value.image}" ></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity +1})">+</button>
            </div>

            `
        }
    })
    total.innerText = totalPrice.toLocaleString()
    quantity.innerText = count
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key]
    }
    else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * product[key].price
    }
    relaodCard()
}
    

