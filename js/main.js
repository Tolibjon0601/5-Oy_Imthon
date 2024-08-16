function getElement(selector, parent = document) {
	return parent.querySelector(selector);
}

const products = [
	{
		id: 1,
		img: "../img/hero_img_1.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "7 000₽",
		realPrice: "8 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 2,
		img: "../img/hero_img_2.svg",
		title: "Дверной Замок Golden Soft для офиса",
		price: "33 000₽",
		realPrice: "39 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 3,
		img: "../img/hero_img_3.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "9 000₽",
		realPrice: "12 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 4,
		img: "../img/hero_img_1.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "7 000₽",
		realPrice: "8 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 5,
		img: "../img/hero_img_2.svg",
		title: "Дверной Замок Golden Soft для офиса",
		price: "33 000₽",
		realPrice: "39 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 6,
		img: "../img/hero_img_3.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "9 000₽",
		realPrice: "12 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 7,
		img: "../img/hero_img_1.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "7 000₽",
		realPrice: "8 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 8,
		img: "../img/hero_img_2.svg",
		title: "Дверной Замок Golden Soft для офиса",
		price: "33 000₽",
		realPrice: "39 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
	{
		id: 9,
		img: "../img/hero_img_3.svg",
		title: "Вариативный замок Golden Soft для отеля",
		price: "9 000₽",
		realPrice: "12 000₽",
		categories: ["Popular", "Price"],
		rating: "20",
		description: "nimadir",
		hasBasket: false,
	},
];

const sectionEL = document.querySelector(".hero__content");
const template = document.querySelector("#template");
const elWrapperProducts = document.querySelector(".hero__content");

function renderProducts(products) {
	sectionEL.textContent = null;
	products.forEach((item) => {
		const newElement = template.content.cloneNode(true);
		const TopImg = getElement(".hero__items__content__img", newElement);
		const rating_text = getElement(".rating__text", newElement);
		const title = getElement(".hero__items__content__title", newElement);
		const Discountprice = getElement(".hero__items__content__price__number", newElement);
		const Realprice = getElement(".hero__items__content__real__price", newElement);
		const likeBtn = getElement(".hero__items__content__btn__order", newElement);
  const iconCart=getElement(".cart__img")
		TopImg.src = item.img;
		TopImg.dataset.id = item.id;
		rating_text.textContent = `(${item.rating}) отзывов`;
		title.textContent = item.title;
		Discountprice.textContent = item.price;
		Realprice.textContent = item.realPrice;

		likeBtn.src = item.hasBasket ? "../img/buy__wallet.svg" : "../img/empty__wallet.svg";
		likeBtn.dataset.id = item.id;

		sectionEL.appendChild(newElement);

	});
}

function filterAndSortProducts() {
	const minPriceInput = document.getElementById("minPrice");
	const maxPriceInput = document.getElementById("maxPrice");
	const minPrice = parseInt(minPriceInput.value.replace(/\D/g, ""), 10) || 0;
	const maxPrice = parseInt(maxPriceInput.value.replace(/\D/g, ""), 10) || Infinity;

	const filteredProducts = products.filter((product) => {
		const price = parseInt(product.price.replace(/\D/g, ""), 10);
		return price >= minPrice && price <= maxPrice;
	});

	const sortedProducts = filteredProducts.sort((a, b) => {
		const priceA = parseInt(a.price.replace(/\D/g, ""), 10);
		const priceB = parseInt(b.price.replace(/\D/g, ""), 10);
		return priceA - priceB;
	});

	renderProducts(sortedProducts);
}

document.getElementById("applyFilter").addEventListener("click", filterAndSortProducts);

elWrapperProducts.addEventListener("click", (evt) => {
	if (evt.target.classList.contains("hero__items__content__btn__order")) {
		const id = Number(evt.target.dataset.id);

		products.forEach((product) => {
			if (product.id === id) {
				product.hasBasket = !product.hasBasket;
			}
		});


		localStorage.setItem("products", JSON.stringify(products));
		renderProducts(products);
	}

	if (evt.target.classList.contains("hero__items__content__img")) {
		const id = Number(evt.target.dataset.id);
		localStorage.setItem("id", id);
	}
});
renderProducts(products);
