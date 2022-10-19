import { useEffect, useState } from 'react'
import styles from '../styles/doar.module.css'
import { NavBar } from '../scr/Componentes/navbar'
import HomePage from '../scr/Componentes/homePage'

export default function Doacoes() {

    return (
        <div>

            <NavBar />





            <div className={styles.map}>
                <p> Seus filhos cresceram e já não sabes oque fazer com a roupa? Ajude outras crianças. Doe para nós!!.</p>

                <h2>Localização</h2>
                <img src="/imagens/Mapa.png" />
                ©<p> Seus aaaaaaaa filhos cresceram e já não sabes oque fazer com a roupa? Ajude outras crianças. Doe para nós!!.</p>

                <h2>Localização</h2>
                <img src="/imagens/Mapa.png" />


                <HomePage />
            </div>




        </div>


    )



}