import { useEffect, useState } from 'react'
import styles from '../styles/doar.module.css'
import { NavBar } from '../scr/Componentes/navbar'
import Formulario from '../scr/Componentes/formulario'

export default function Doacoes() {

    return (
        <div className={styles.container1}>

            <NavBar />

            <div className={styles.map}>
                <br/>
                <p><strong>Os seus filhos cresceram e tem roupa em casa boa que já não lhes serve? Doe-nos e ajude outras crianças!!</strong></p>
                
                <p><strong>Endereço:</strong> R. Padre Alberto Neto, 2725-531 Algueirão-Mem Martins</p>
                <p><strong>Telefone:</strong> 21 926 7080</p>
               

                <h2>Localização</h2>
                
                <img width={500} src="/imagens/Mapa.png"/>

                
                <div className={styles.hp}>
                <Formulario />    
                </div>
              
            </div>

        </div>

    )
}