// --- Criando a Conexão com o Banco MySQL ---

const mysql = require ("mysql2/promise");


async function connect(){
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;


const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'fatec2021',
    database: 'Bartec'
});

console.log('Database conectada!');;
global.connection = connection;
    return global.connection;
}

// -- Insert de Clientes --

async function insertCliente(cliente) {
    const conn = await connect();
    const sql = 'INSERT INTO cliente (cliente_nome, cliente_uf) VALUES (?, ?);';
    const values = [cliente.cliente_nome, cliente.cliente_uf];
    return await conn.query(sql, values);
}

// -- Read Cliente --

async function selectCliente(){
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM cliente;');
    return [rows]
}

// -- Atualizar Cliente --

async function updateCliente(id,cliente){
    const conn = await connect();
    const sql = 'UPDATE cliente SET cliente_nome = ?, cliente_uf = ? WHERE cliente_id = ?;';
    const values = [cliente.cliente_nome, cliente.cliente_uf, id];
    return await conn.query(sql,values);
}

// -- Deletar Cliente -- 

async function deleteCliente(id){
    const conn = await connect();
    const sql = 'DELETE FROM cliente WHERE cliente_id = ?;';
    return await conn.query(sql, [id]);
}

// -- Realizar Pedido -- 

async function insertRequest(req){
    const conn = await connect();
    const sql = 'INSERT INTO Pedido (pedido_nome, pedido_preco, pedido_tipo) VALUES (?,?,?);';
    const values = [req.pedido_nome, req.pedido_preco, req.pedido_tipo];
    return await conn.query(sql, values);
}

// -- Read Pedidos --

async function selectRequests(){
    const conn = await connect();
    const [rows] = await conn.query ('SELECT * FROM Pedido;');
    return rows;
}

// -- Atualizar Pedidos

async function updateRequest(id,req){
    const conn = await connect();
    const sql = 'UPDATE Pedido SET pedido_nome = ?, pedido_preco = ?, pedido_tipo = ? WHERE pedido_id = ?;';
    const values = [req.pedido_nome, req.pedido_preco, req.pedido_tipo, id];
    return await conn.query(sql,values);
}

// -- Delete Pedido --

async function deleteRequest(id){
    const conn = await connect();
    const sql = 'DELETE FROM Pedido WHERE pedido_id = ?;';
    return await conn.query(sql, [id]);
}

module.exports = {selectCliente,insertCliente, updateCliente, deleteCliente, insertRequest, selectRequests, updateRequest, deleteRequest}