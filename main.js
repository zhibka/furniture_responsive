let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('move');
    cart.classList.remove('active');
    login.classList.remove('active');
}

//Cart Toggle
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
    login.classList.remove('active');
}
//Login Form Toggle
let login = document.querySelector('.login-form');

document.querySelector('#user-icon').onclick = () =>{
    login.classList.toggle('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
    menu.classList.remove('move');
}

//Change Header Background Color And Shadow On Scroll
let header = document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


let card = {
    '001': {
        "name" : "Padded stool",
        "count" : 3,
    },
    '002': {
        "name" : "Chest",
        "count" : 3,
    },
    '003': {
        "name" : "Big Sofa",
        "count" : 3,
    },
    '004': {
        "name" : "Dresser",
        "count" : 3,
    },
    '005': {
        "name" : "Cabine",
        "count" : 3,
    },
    '006': {
        "name" : "Chair",
        "count" : 3,
    },
    '007': {
        "name" : "Soft Furniture",
        "count" : 3,
    },
    '008': {
        "name" : "Soft Furniture",
        "count" : 3,
    },
    '009': {
        "name" : "Soft Furniture",
        "count" : 3,
    },
    '010': {
        "name" : "Padded stool",
        "count" : 3,
    },
};

document.onclick = Event => {
    if (Event.target.classList.contains('plus')) {
        plusFunction(Event.target.dataSet);
    }
    if (Event.target.classList.contains('minus')) {
        minusFunction(Event.target.dataSet);
    }

}

// увеличение кол во товаров
const plusFunction = (id) => {
    cart[id]++;
    renderCard();
}

// уменьшение кол во товаров
const minusFunction = (id) => {
    if (card[id]-1 == 0) {
        deleteFunction(id);
        return true;
    }
    cart[id]--;
    renderCard();
}

// удаление товаров
const deleteFunction = (id) => {
    delete cart[id];
    renderCard();
}

const renderCard = () => {
    console.log(card);
}

renderCard();
