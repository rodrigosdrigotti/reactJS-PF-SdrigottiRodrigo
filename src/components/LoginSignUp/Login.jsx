import React, { useRef, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Login.css'

export const Login = () => {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
            .then()
            navigate('/')
        }
        catch {
            setError('No se pudo iniciar sesión');
        }
        setLoading(false);
    }
    
    return (
        <div className='loginForm'>
            {error && <Alert error={error} />}
            <h1>Inicia Sesión</h1>
            <form onSubmit={handleSubmit} className='form'>
                <label className='label'>
                    Email:
                    <input className='input'
                        id='email'
                        type="email"
                        ref={emailRef}
                        required
                    />
                </label>
                <label className='label'>
                    Contraseña:
                    <input className='input' 
                        id='password'
                        type="password"
                        ref={passwordRef}
                        required
                    />
                </label>
                <div className='label-forgot'>
                    <Link to='/forgot-password'>Olvidaste la Contraseña?</Link>
                </div>
                <div className='label'>
                    <button type='submit' disabled={loading} className='button'>Iniciar Sesion</button>
                </div>
                <div className='label-text'>
                    Ya tienes cuenta? <Link to='/signup'>Registrate</Link>
                </div>
            </form>
        </div>
    )
}