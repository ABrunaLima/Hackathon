import { useEffect, useState } from 'react';
import styles from "../styles/pedidos.module.css"
import { NavBarAdmin } from '../scr/Componentes/navbaradmin';


export default function Pedido(){
    /* const [listaPedidos, setListaPedidos] = useState([])


    async function damePedido() {
        const res = await fetch("/api/pedidos")
        if (res.status === 200) {
            const json = await res.json()
            console.log(json)
            setListaPedidos(json)
        }
    }

    useEffect(() => {
        damePedido()
    }, [])


    return (
        <div>
            <NavBarAdmin />
            <div className={styles.container}>
                <div className={styles.pedidos} >
                    {listaPedidos.map((pedido) => {
                        const { nome, telefone, morada, genero1, tamanho1, genero2, tamanho2, feitoA } = pedido
                        return (
                            <div className={styles.pedido} key={id}>
                                <div className={styles.imagem}>
                                    <span>{pedido}</span>
                                </div>
                                <div className={styles.info}>
                                    <button>Realizar Pedido</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )*/

    return (
        <div>
            <NavBarAdmin />
        </div>
    )

}