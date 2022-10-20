import { useEffect, useState } from "react";
import styles from "../../styles/pedido.module.css"
import NavBarAdmin from "../../scr/Componentes/navbaradmin";

export default function Pedidos() {


    return (
        <div>
            <NavBarAdmin />

            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Data do Pedido</th>
                            <th>Genero</th>
                            <th>Tamanho</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Matéria">Estrutura de Dados</td>
                            <td data-label="Curso">Ciência da Computação</td>
                            <td data-label="Duração">40h</td>
                            <td>
                                <button>Realizar pedido</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Matéria">Arquitetura da Informação</td>
                            <td data-label="Curso">Sistemas de Informação</td>
                            <td data-label="Duração">40h</td>
                            <td>
                                <button>Realizar pedido</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Matéria">Introdução a HTML & CSS</td>
                            <td data-label="Curso">Sistemas para Internet</td>
                            <td data-label="Duração">40h</td>
                            <td>
                                <button>Realizar pedido</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Matéria">Teoria das Categorias</td>
                            <td data-label="Curso">Matemática</td>
                            <td data-label="Duração">80h</td>
                            <td>
                                <button>Realizar pedido</button>
                            </td>
                        </tr>
                        <tr>
                            <td data-label="Matéria">Percepção Visual</td>
                            <td data-label="Curso">Design Gráfico</td>
                            <td data-label="Duração">20h</td>
                            <td>
                                <button>Realizar pedido</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}

/*export function ListaPedidos(){
    return (                  
            <div className={styles.listaContainer}>
                <div>             
                {pedidos.map((item) => (
                    <div className={styles.listas} key={`${item.morada} ${item.nome}`}>
                    <span className={styles.nome}>{item.nome}</span>
                    <span className={styles.telefone}>{item.telefone}</span>
                    <span className={styles.morada}>{item.morada}</span>
                    <span className={styles.genero}>{item.genero}</span>
                    <span className={styles.tamanho}>{item.tamanho}</span>
                    <button>Realizar pedido</button>
                    </div>
                ))
                }
                </div>
            </div>
    )
}
*/