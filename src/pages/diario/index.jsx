import './index.scss';
import { useState } from 'react';
import axios from 'axios'; 

export default function Diario() {
    const [token, setToken] = useState(null);
    const [data, serData] = useState('');
    const [diario, serDiario] = useState('');
    

    async function inserieDiario() {
        if (!data || !diario) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
    
        let paramCorpo = {
            dia: data,
            conteudo: diario
        };
    
        const url = 'http://localhost:5001/diario/';
        
        try {
            let resp = await axios.post(url, paramCorpo, {
                headers: {
                    'x-access-token': token // Envie o token no cabeçalho
                }
            });
            alert('Diário adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar diário:', error.response ? error.response.data : error.message);
            alert('Erro ao adicionar diário. Tente novamente.');
        }
    }
    

    return (
        <div className='diario'>
            <h1>Bem vindo {token?.nome}</h1>
            <input
                type="date"
                className='in1'
                value={data}
                onChange={(e) => serData(e.target.value)}
            />
            <input
                type="text"
                className='in2'
                placeholder='Digite seu texto'
                value={diario}
                onChange={(e) => serDiario(e.target.value)}
            />
            <button onClick={inserieDiario}>Adicionar Diário</button>
        </div>
    );
}
