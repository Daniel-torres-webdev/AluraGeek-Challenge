const BASE_URL = "https://678b2e3b1a6b89b27a29b91d.mockapi.io/products"

const productList = async () =>{
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        alert("Error al listar productos: ", error)
    }
};

const createProduct = async (name, price, image) => {
    try {
        const response = await fetch (BASE_URL, {
            method: "POST",
            headers: {
                "content.Type": "application/json",
            },
            body: JSON.stringify({name, price, image})
        })
        const data = await response.json();
        return data;
    } catch (error) {
        alert("Error al mostrar productos: ", error);
    }
}

export const servicesProducts = {
    productList,
    createProduct,
};