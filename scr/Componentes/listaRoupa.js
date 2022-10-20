import { Roupas } from "../assets/roupas"
import styles from "../../styles/lista.module.css"

export function ListaRoupa({roupas}){
    return (                  
            <div className={styles.listaContainer}>
                <div>             
                {roupas.map((item, i) => (
                    <div className={styles.listas} key={`${item.tamanho} ${item.categoria} ${i}`}>
                    <span className={styles.categoria}>{item.categoria}</span>
                    <span className={styles.tamanho}>{item.tamanho}</span>
                    <span className={styles.genero}>{item.genero}</span>
                    </div>
                ))
                }
                </div>
            </div>
    )
}