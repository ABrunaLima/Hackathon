import { mostraPedidoPeloId } from "../../../scr/services/pedido";

export default async (req, res) => {
    if (req.method === "GET") {

        const pedidoId = req.query.id
        const pedido= await mostraPedidoPeloId(pedidoId)
        if (pedido) {
            res.status(200).json(pedido)
            return
        } else {
            res.status(404).json({"message": "Pedido não encontrado."})
            return
        }
    }
}
