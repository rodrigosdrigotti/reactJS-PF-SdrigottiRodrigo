import { useState } from 'react';
import './CheckoutForm.css';
import { Alert } from '../Alert/Alert';

export const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if(email !== emailConfirm) {
            return setError('Error en los correos, por favor verificad ambos campos');
        }

        const userData = {
            name,
            phone,
            email,
            emailConfirm
        }
        onConfirm(userData);
    }

    return (
        <div className='checkoutForm'>
            {error && <Alert error={error} />}
            <form onSubmit={handleConfirm} className='form'>
                <label className='label'>
                    Nombre:
                    <input className='input' 
                        type="text"
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Telefono:
                    <input className='input' 
                        type="text"
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Email:
                    <input className='input' 
                        type="email"
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        required
                    />
                </label>
                <label className='label'>
                    Email Confirmacion:
                    <input className='input' 
                        type="email"
                        value={emailConfirm}
                        onChange={({target}) => setEmailConfirm(target.value)}
                        required
                    />
                </label>
                <div className='label'>
                    <button type='submit' className='button'>Crear Orden</button>
                </div>
            </form>
        </div>
    )
}
