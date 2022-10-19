import { NavBar } from '../scr/Componentes/navbar'
import HomePage from '../scr/Componentes/homePage'
import { useEffect, useState } from 'react'
import styles from '../styles/aboutus.module.css'

export default function AboutUs() {

    return (
        <div className={styles.container1}>
            <div>
                <NavBar/>
            </div>
           
             <div className={styles.caixa}>
                <h1>About Us</h1>
                <p>A fundaçao Realizar foi criada em 2020 com o objetivo de ajudar famílias carenciadas através da distribuição de roupa para crianças que nos foi doada.
                    <p> A nivel nacional a maior parte das doações é feita para a grande Lisboa, mas não recusamos pedidos de ajuda de outras regiões do país.</p>
                    <p>A nossa missão é ajudar quem precisa para a melhoria das condições de vida dos mais vulneráveis</p> </p>
               <div>
                <HomePage/>
                </div>
            </div>
            
            

        </div>

    )
}