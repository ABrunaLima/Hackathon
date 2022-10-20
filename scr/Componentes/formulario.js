import { useEffect, useState } from 'react'
import styles from '../../styles/formulario.module.css'

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [morada, setMorada] = useState('')
    const [genero1, setGenero1] = useState('')
    const [tamanho1, setTamanho1] = useState('')
    const [genero2, setGenero2] = useState('')
    const [tamanho2, setTamanho2] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const dataToSubmit = {
            nome: nome,
            telefone: telefone,
            morada: morada,
            genero1: genero1,
            tamanho1: tamanho1,
            genero2: genero2,
            tamanho2: tamanho2,

        }
        fetch("/api/pedidos", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...dataToSubmit })
        })
    }

    return (


        <div className={styles.container}>
            <h1>Se necessita de roupa preencha este formulário</h1>

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
                        <input type="radio" name="Genero1" value="Masculino" onChange={(event) => setGenero1(event.target.value)}/> Masculino<br />
                        <input type="radio" name="Genero1" value="Feminino" onChange={(event) => setGenero1(event.target.value)}/> Feminino<br />
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
                        <input type="radio" name="Genero2" value="Masculino" onChange={(event) => setGenero2(event.target.value)}/> Masculino<br />
                        <input type="radio" name="Genero2" value="Feminino" onChange={(event) => setGenero2(event.target.value)}/> Feminino<br />
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