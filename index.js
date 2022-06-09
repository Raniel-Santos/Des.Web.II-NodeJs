(async () => {
    const db = require('./db')


// -- Criando, Atualizando, Deletando e Buscando Clientes --

// -- Inserindo --

console.log ('INSERT INTO Cliente');
const cliente1 = await db.insertCliente({cliente_nome: 'Raniel', cliente_uf: 'SP'});
const cliente2 = await db.insertCliente({cliente_nome: 'Cleiton', cliente_uf: 'SP'});
const cliente3 = await db.insertCliente({cliente_nome: 'Masanori', cliente_uf: 'SP'});
const cliente4 = await db.insertCliente({cliente_nome: 'Gerson', cliente_uf: 'SP'});
const cliente5 = await db.insertCliente({cliente_nome: 'Arakaki', cliente_uf: 'SP'});

console.log('Clientes Inseridos com Sucesso!');


// -- Atualizando --

console.log('UPDATE INTO Cliente');
const delcliente = await db.updateCliente(1,{cliente_nome: 'Daniel', cliente_uf: 'MG'});

console.log('Cliente Atualizado com Sucesso !');

// -- Deletar --

console.log('DELETE INTO Cliente');
const del = await db.deleteCliente(5)

console.log('Cliente Deletado !');

// -- Buscando --

console.log('SELECT * FROM Cliente');
const upcliente = await db.selectCliente();
console.log(upcliente);


// ------------------------------------------------------------------------------------- //

// -- Criando, Atualizando, Deletando e Buscando Pedidos --

// -- Inserindo --

console.log ('INSERT INTO Cliente');
const pedido1 = await db.insertRequest({pedido_nome: 'Coca-Cola 600ml', pedido_preco: 6.00, pedido_tipo: 'Bebida'});
const pedido2 = await db.insertRequest({pedido_nome: 'Cerveja', pedido_preco: 5.00, pedido_tipo: 'Bebida'});
const pedido3 = await db.insertRequest({pedido_nome: 'Pinga', pedido_preco: 8.50, pedido_tipo: 'Bebida'});
const pedido4 = await db.insertRequest({pedido_nome: 'Porção de Batata-Frita', pedido_preco: 15.50, pedido_tipo: 'Comida'});
const pedido5 = await db.insertRequest({pedido_nome: 'Espetinho', pedido_preco: 7.00, pedido_tipo: 'Comida'});

console.log('Pedidos Inseridos com Sucesso!');


// -- Atualizando --

console.log('UPDATE INTO Pedido');
const uppedido= await db.updateRequest(3, {pedido_nome: 'Pão na Chapa', pedido_preco: 3.50, pedido_tipo: 'Comida'})

console.log('Pedido Atualizado com Sucesso !');

// -- Deletar --

console.log('DELETE INTO Pedido');
const delpedido = await db.deleteRequest(5)

console.log('Pedido Deletado !');

// -- Buscando --

console.log('SELECT * FROM Pedido');
const allpedidos = await db.selectRequests();
console.log(allpedidos);

}) ();
