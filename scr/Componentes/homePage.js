import { useEffect, useState } from 'react'
import styles from '../../styles/HomePage.module.css'

export default function HomePage() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [morada, setMorada] = useState('')
    const [sexo1, setSexo1] = useState('')
    const [tamanho1, setTamanho1] = useState('')
    const [sexo2, setSexo2] = useState('')
    const [tamanho2, setTamanho2] = useState('')

    /* useEffect(() => {
         fetch()
             .then(res => res.json())
             .then(res => {
                 setRoupas(res.message)
             })
 
     },[])*/


    const handleFormSubmit = (event) => {
        event.preventDefault()
        const dataToSubmit = {
            nome: nome,
            telefone: telefone,
            morada: morada,
            sexo1: sexo1,
            tamanho1: tamanho1,
            sexo2: sexo2,
            tamanho2: tamanho2,

        }
        fetch('')
    }

    return (


        <div className={styles.container}>
            <h1>Se necessita de roupa preencha este formulario</h1>

            <br />
            <div className={styles.formulario}>
                <form onSubmit={handleFormSubmit}>
                    <label className={styles.label}>
                        <span>Nome :</span>
                        <input type='text' value={nome} name='nome' onChange={(event) => setNome(event.target.value)}></input>
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Telefone :
                        <input type='text' value={telefone} name='telefone' onChange={(event) => setTelefone(event.target.value)}></input>
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Morada:
                        <input type='text' value={morada} name='morada' onChange={(event) => setMorada(event.target.value)}></input>
                    </label>
                    <br />
                    <br />
                    Filho 1
                    <br />
                    <label className={styles.label}>Genero:
                        <input type="radio" name="genero" value="Masculino" /> Masculino<br />
                        <input type="radio" name="genero" value="Feminino" /> Feminino<br />
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Tamanho:
                        < select type='text' value={tamanho1} name='tamanho1' onChange={(event) => setTamanho1(event.target.value)}>
                            <option value="0-6 Meses ">0-6 Meses </option>
                            <option value="6-12 Meses ">6-12 Meses </option>
                            <option value="1 Anos ">1 Anos </option>
                            <option value="2 Anos ">2 Anos </option>
                            <option value="3 Anos ">3 Anos </option>
                            <option value="4 Anos ">4 Anos </option>
                            <option value="5 Anos ">5 Anos </option>
                            <option value="6 Anos ">6 Anos </option>
                            <option value="7 Anos ">7 Anos </option>
                            <option value="8 Anos ">8 Anos </option>
                            <option value="9 Anos ">9 Anos </option>
                            <option value="10 Anos ">10 Anos </option>
                            <option value="11-12 Anos ">11-12 Anos </option>
                            <option value="13-14 Anos ">13-14 Anos </option>
                        </select>
                    </label>
                    <br />
                    Filho 2
                    <br />
                    <label className={styles.label}>Genero:
                        <input type="radio" name="genero" value="Masculino" /> Masculino<br />
                        <input type="radio" name="genero" value="Feminino" /> Feminino<br />
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Tamanho:
                        <select type='text' value={tamanho2} name='tamanho2 ' onChange={(event) => setTamanho2(event.target.value)}>
                            <option value="0-6 Meses ">0-6 Meses </option>
                            <option value="6-12 Meses ">6-12 Meses </option>
                            <option value="1 Anos ">1 Anos </option>
                            <option value="2 Anos ">2 Anos </option>
                            <option value="3 Anos ">3 Anos </option>
                            <option value="4 Anos ">4 Anos </option>
                            <option value="5 Anos ">5 Anos </option>
                            <option value="6 Anos ">6 Anos </option>
                            <option value="7 Anos ">7 Anos </option>
                            <option value="8 Anos ">8 Anos </option>
                            <option value="9 Anos ">9 Anos </option>
                            <option value="10 Anos ">10 Anos </option>
                            <option value="11-12 Anos ">11-12 Anos </option>
                            <option value="13-14 Anos ">13-14 Anos </option>

                        </select>
                    </label>
                    <br />
                    <button type={'submit'} className={styles.button}>Submeter</button>
                </form>


            </div>
        </div>



    )

}