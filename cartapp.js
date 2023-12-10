let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Male Cow(White)',
        image: '1.webp',
        price: 120000
    },
    {
        id: 2,
        name: 'Cow Food 3',
        image: '2.jpg',
        price: 120000
    },
    {
        id: 3,
        name: 'Female Cow(black&white)',
        image: '3.webp',
        price: 220000
    },
    {
        id: 4,
        name: 'Male Cow Duo(white)',
        image: '4.jpg',
        price: 123000
    },
    {
        id: 5,
        name: 'Male Cow(black&white)',
        image: '5.jpg',
        price: 320000
    },
    
    {
        id: 6,
        name: 'Feild 1',
        image: '6.jpg',
        price: 120000
    },
    {
        id: 7,
        name: 'Male cow(black&white)',
        image: '7.jpg',
        price: 120000
    },
    {
        id: 8,
        name: 'Cow Food 2',
        image: '8.jpg',
        price: 120000
    },
    {
        id: 9,
        name: 'Feild 2',
        image: '9.jpg',
        price: 120000
    },
    {
        id: 10,
        name: 'Group Female Cows',
        image: '10.jpg',
        price: 120000
    },
    {
        id: 11,
        name: 'Cow Food 1',
        image: '11.webp',
        price: 120000
    },
    {
        id: 12,
        name: 'One Female Cow + Baby Male Cow(sandal)',
        image: '12.jpg',
        price: 120000
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}