import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
    const { signIn } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        setError(null);

        try {
            await signIn({ username, password });
            console.log('login', 'nome:',username, 'senha:',password)
        }catch(error) {
            console.log('falha no login');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" 
                value={username}
                id='username' 
                onChange={(e) => setUsername(e.target.value)}
                />
            
                <label htmlFor="password">Password</label>
                <input type="text" 
                value={password}
                id='password' 
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}

            <button type='submit'>Login</button>
        </form>

    )

}