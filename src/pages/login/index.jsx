import { useState } from 'react'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export function Login(){
    const [nome,setNome] = useState('')
    const [senha,setSenha] = useState('')

    const navigate = useNavigate()

    async function entrar() {
        const usuario = {
            "nome":nome,
            "senha":senha
        }
        const url = `http://localhost:5001/entrar/`
        let resp = await axios.post(url,usuario)

        if (resp.data.erro != undefined) {
            alert(resp.data.erro)
        } else {
            localStorage.setItem('USUARIO', resp.data.token)
            navigate('/diario')
        }
    }

    return(
        <div className='login'>
            <h1>Login</h1>
            <input type="text" placeholder='nome'  value={nome} onChange={(e) => setNome(e.target.value)} />

            <input type="text" placeholder='senha'    value={senha} onChange={(e) => setSenha(e.target.value)} />

            <button className='entrar' onClick={entrar}>entar</button>
            <button className='cadastrar' >cadatrar</button>
        </div>
    )
}
