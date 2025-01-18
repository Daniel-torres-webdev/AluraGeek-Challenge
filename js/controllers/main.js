import{servicesProducts} from "../services/product-services.js"

const productContainer = document.querySelector("[data-product]");
const addProduct = document.querySelector("[data-button]");

function createCard({name, price, image, id}) {
    const card = document.createElement("div");
    card.classList.add("product__card");
    card.innerHTML= 
    `
        <img src="${image}" alt="${name}" class="product__image">
        <h3 class="product__title">${name}</h3>
        <p class="product__price">${price}</p>
        <button class="product__delete" data-id="${id}"><i class="ri-delete-bin-line"></i></button>
    `;
    return card;
};

const renderProduct = async () => {
    try {
        const listProduct = await servicesProducts.productList();
        listProduct.forEach((product) => {
            const productCard = createCard(product);
            productContainer.appendChild(productCard);
        });
    } catch (error) {
        alert(error);
    }
};

addProduct.addEventListener("click", async () =>{
    
})

renderProduct();