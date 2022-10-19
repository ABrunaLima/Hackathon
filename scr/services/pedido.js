import {
    inserePedido,
    mostraPedidos,
    apresentaPedidoPeloId,
} from "../data/pedido";


//adicionar um pedido PullClothing
async function adicionarPedido(name, telefone, morada, sexo1, tamanho1, sexo2, tamanho2) {
    const pedido = await inserePedido({
            name,
            telefone,
            morada,
            sexo1,
            tamanho1,
            sexo2,
            tamanho2,

        })

    return pedido
}

//mostrar todas as roupas armazenadas no sistema showAllClothes
async function mostraTodosOsPedidos() {
    const pedidos = await mostraPedidos()
    if (pedidos == undefined) {
        return "Sem pedidos"
    }
    return pedidos
}

//mostrar um pedido pelo id showOneCloth
async function mostraPedidoPeloId(idPedido) {
    const pedidoUm = await apresentaPedidoPeloId(idPedido)
    if (pedidoUm === undefined) {
        return "Pedido não encontrado"
    }
    return pedidoUm
}

export{
    adicionarPedido,
    mostraTodosOsPedidos,
    mostraPedidoPeloId,
}