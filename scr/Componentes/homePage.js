import { useEffect, useState } from 'react'
import styles from '../../styles/HomePage.module.css'

export default function HomePage() {
    const [name, setName] = useState('')
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
            name: name,
            telefone: telefone,
            morada: morada,
            sexo1: sexo1,
            tamanho1: tamanho1,
            sexo2: sexo2,
            tamanho2: tamanho2,

        }
        fetch("/api/pedido", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
                telefone: telefone,
                morada: morada,
                sexo1: sexo1,
                tamanho1: tamanho1,
                sexo2: sexo2,
                tamanho2: tamanho2,
            })

            const cenas = req.body
            insertMambos(cenas)

        })
        fetch('',)
    }

    return (

        <div className={styles.container}>
            <h1>Formulário</h1>
            <br />
            <form onSubmit={handleFormSubmit}>
                <label>Name :
                    <input type='text' value={name} name='name' onChange={(event) => setName(event.target.value)}></input>
                </label>
                <br />
                <label>Telefone :
                    <input type='text' value={telefone} name='telefone' onChange={(event) => setFone(event.target.value)}></input>
                </label>
                <br />
                <label>Morada:
                    <input type='text' value={morada} name='morada' onChange={(event) => setMorada(event.target.value)}></input>
                </label>
                <br />
                Filho 1
                <br />
                <label>Sexo:
                    <input type='text' value={sexo1} name='sexo1' onChange={(event) => setSexo1(event.target.value)}></input>
                </label>
                <br />
                <label>Tamanho:
                    <input type='text' value={tamanho1} name='tamanho1' onChange={(event) => setTamanho1(event.target.value)}></input>
                </label>
                <br />
                Filho 2
                <br />
                <label>Sexo:
                    <input type='text' value={sexo2} name='sexo2' onChange={(event) => setSexo2(event.target.value)}></input>
                </label>
                <br />
                <label>Tamanho:
                    <input type='text' value={tamanho2} name='tamanho2 ' onChange={(event) => setTamanho2(event.target.value)}></input>
                </label>
                <br />
                <button type={'submit'} className={styles.button}></button>
            </form>



        </div>



    )

}