const connection = require('./connection');

const getAll = async () => {

    const [products] = await connection.execute('SELECT * FROM products');

    return products;
}

const postCreate = async (product) =>{

    const {
        name, 
        description, 
        amount, 
        due_date, 
        type,
    } = product;
    
                //DATE É A MESMA COISA QUE DATA
    created_at = Date.now();

            //inserir os parametros
    const query = 'INSERT INTO products(name, description, amount, due_date, type, created_at) VALUES(?, ?, ?, ?, ?, ?)';
    
    const productCreate = await connection.execute(query, [name, description, amount, due_date, type, created_at]);

    return productCreate;
}
 // AQUI VC EXPORTA
module.exports = {
    getAll,
    postCreate
}