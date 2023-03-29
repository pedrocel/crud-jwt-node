
const productsModel = require('../models/productsModel');
//async = é algo assincrono

// aqui vai puxar todos os produtos
const getAll = async (req, res) => {

    const products = await productsModel.getAll();
// status 200 é pq ta ok  , o json vai puxar em jason assim ex:{"name": "mario"}
    return res.status(200).json(products);
};


//aqui vc cria os produtos - usando o req.body = tem que escrever no postman pra criar
const postCreate = async (req, res) => {

    const [product] = await productsModel.postCreate(req.body);

    return res.status(201).json(product);
}

module.exports = {
    getAll,
    postCreate
};