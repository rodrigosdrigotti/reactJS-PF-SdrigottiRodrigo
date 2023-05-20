import React, { useRef, useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { Alert } from '../Alert/Alert';
import './Login.css'

export const ForgotPassword = () => {

    const emailRef = useRef();
    const { resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('')
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value)   
            setMessage('Se han enviado las instrucciones al mail indicado')    
        }
        catch {
            setError('No se pudo resetear la contraseña');
        }
        setLoading(false);
    }
    
    return (
        <div className='loginForm'>
            {error && <Alert error={error} />}
            {message && <Alert message={message} />}
            <h1>Reseteo de Password</h1>
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
                <div className='label'>
                    <button type='submit' disabled={loading} className='button'>Resetear Contraseña</button>
                </div>
                <div className='label-text'>
                    Ya tienes cuenta? <Link to='/login'>Login</Link>
                </div>
            </form>
        </div>
    )
}