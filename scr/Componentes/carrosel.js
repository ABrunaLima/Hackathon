import { useRef } from 'react/cjs/react.production.min'
import styles from '../../styles/carrosel.module.css'

export function Carrosel() {
    const carrosel = useRef(null)

    

    const handleLeftClick = (e) => {
        e.preventDefault()
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth
        
    }
    const handleRightClick = (e) => {
        carrosel.current.scrollLeft += carrosel.current.offsetWidth
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.carrosel} ref={carrosel}>
                {data.map((item) => {
                    const {title} = item
                    return (
                        <div className={styles.item} key={id}>
                            <div className={styles.imagem}>
                               <p>{item}</p>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.titulo}>{title}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.botoes}>
                <button onClick={handleLeftClick}>
                    
                </button>
                <button onClick={handleRightClick}>
                    
                </button>
            </div>
        </div>
    )
}