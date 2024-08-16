
const elMainImg = findElement("#main-img")

const id = localStorage.getItem("id") ? +localStorage.getItem("id") :1;
const products = JSON.parse(localStorage.getItem("products"))

const product = products.filter(element => element.id === id)[0]

elMainImg.src = product.img;