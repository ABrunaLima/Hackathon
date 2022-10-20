import { useEffect, useState } from "react";
import styles from "../styles/armazem.module.css"
import NavBarAdmin from "../scr/Componentes/navbaradmin";

export default function Armazem() {


    return (
    
    <div className={styles.armazem}>
        <div>
          <NavBarAdmin/>
            </div>
            <div className={styles.filtros}>
        <div className={styles.tamanhos}>Tamanhos</div>
        <button>0-6 Meses</button>
        <button>6-12 Meses</button>
        <button>1 Ano</button>
        <button>2 Anos</button>
        <button>3 Anos</button>
        <button>4 Anos</button>
        <button>5 Anos</button>
        <button>6 Anos</button>
        <button>7 Anos</button>
        <button>8 Anos</button>
        <button>9 Anos</button>
        <button>10 Anos</button>
        <button>11-12 Anos</button>
        <button>13-14 Anos</button>
       
         <div className={styles.genero}>Género</div>
         <button>Masculino</button>
         <button>Feminino</button>
</div>
            </div>
            
    )
}