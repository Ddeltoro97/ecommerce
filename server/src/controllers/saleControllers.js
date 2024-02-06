const {Sale, Product} = require("../db");
const {getProductByName} = require("./productControllers");

const createSale = async(address, value, sizes, userId, products) =>{
    const description = [];

    for(let i = 0; i < products.length; i++){
        let aux = {
            name: products[i],
            size: sizes[i]
        }
        description.push(aux);
    }

    const newSale = await Sale.create({address, description, value});
    await newSale.setUser(userId);

    // const productsId = []
    for(let i = 0; i < products.length; i++){
        let x = await getProductByName(products[i]);
        console.log(x)
        await newSale.addProduct(x);
    }

    const saleWithProducts = await Sale.findByPk(newSale.id, {include: Product})

    return saleWithProducts;
    
}

const getSaleByUserId = async(userId) =>{
    const salesByUser = await Sale.findAll({where: {UserId: userId}, include:Product});

    return salesByUser;
}

module.exports = {
    createSale,
    getSaleByUserId
}