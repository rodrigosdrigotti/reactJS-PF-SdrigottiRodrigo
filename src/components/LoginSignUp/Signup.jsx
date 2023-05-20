import React, { useRef, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Login.css'

export const Signup = () => {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signUp } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Las contraseñas no coinciden');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        }
        catch {
            setError('No se pudo crear la cuenta');
        }
        setLoading(false);
    } 

    return (
        <div className='loginForm'>
            {error && <Alert error={error} />}
            <h1>Registrate</h1>
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
                <label className='label'>
                    Confirmar Contraseña:
                    <input className='input' 
                        id='password-confirm'
                        type="password"
                        ref={passwordConfirmRef}
                        required
                    />
                </label>
                <div className='label'>
                    <button type='submit' disabled={loading} className='button'>Registrarse</button>
                </div>
                <div className='label-text'>
                    Ya tienes cuenta? <Link to='/login'>Inicia Sesion</Link>
                </div>
            </form>
        </div>
    )
}
