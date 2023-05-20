import React from 'react';
import './Alert.css'
import { useState, useEffect } from 'react';

export const Alert = ({ error, message }) => {

    const [isActive, setIsActive] = useState(false);
    const [isMessage, setIsMessage] = useState(false);

    useEffect(()=>{
		if(error) {
            setTimeout(() => {
                setIsActive(true);     
            }, 3000);
        }
        if(message) {
            setTimeout(() => {
                setIsMessage(true);
            }, 3000);
        }
	}, [error, message])
     
    return (
        error ?
        <div className={isActive ? 'alertContainer error autoCierre cerrando' : 'alertContainer error autoCierre'}>
            <div className='alertContainerInfo'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </div>
                <div>
                    <p>{error}</p>
                </div> 
            </div>
        </div>
        : message &&
        <div className={isMessage ? 'alertContainer message autoCierre cerrando' : 'alertContainer message autoCierre'}>
            <div className='alertContainerInfo'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                </div>
                <div>
                    <p>{message}</p>
                </div> 
            </div>
        </div>
    )
}
