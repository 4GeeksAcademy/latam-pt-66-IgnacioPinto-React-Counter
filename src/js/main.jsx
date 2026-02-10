import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// Importamos Home (que ahora incluye dentro a SecondsCounter y Digit)
import Home from './components/Home';

// --- LÓGICA (Variables Globales) ---
let seconds = 0;
let isRunning = true;
let isCountdown = false;
let alertTime = null;

// --- FUNCIONES DE CONTROL (Se pasarán a Home) ---
const actions = {
    stop: () => { isRunning = false },
    resume: () => { isRunning = true },
    reset: () => { 
        seconds = 0; 
        isRunning = true; 
        isCountdown = false; 
        alertTime = null;
    },
    startCountdown: () => {
        const input = document.getElementById('countdownInput');
        if(input && input.value) {
            seconds = parseInt(input.value);
            isCountdown = true;
            isRunning = true;
            input.value = '';
        }
    },
    setAlert: () => {
        const input = document.getElementById('alertInput');
        if(input && input.value) {
            alertTime = parseInt(input.value);
            input.value = '';
        }
    }
};

// Inicializamos el root una sola vez
const root = ReactDOM.createRoot(document.getElementById('root'));

// --- BUCLE DE RENDERIZADO ---
setInterval(() => {
    // 1. Lógica del tiempo
    if (isRunning) {
        if (isCountdown) {
            if (seconds > 0) seconds--;
            if (seconds === 0) isRunning = false; 
        } else {
            seconds++;
        }
    }

    // 2. Lógica de Alerta
    if (alertTime !== null && seconds === alertTime) {
        // Un pequeño timeout para permitir que el renderizado muestre el número antes del alert
        setTimeout(() => {
            alert(`¡Tu tiempo de ${alertTime} segundos ha sido alcanzado!`);
            alertTime = null; 
        }, 100);
    }

    // 3. Renderizamos Home pasando los props actualizados
    root.render(
        <React.StrictMode>
            <Home seconds={seconds} actions={actions} />
        </React.StrictMode>
    );

}, 1000); // Se ejecuta cada 1000ms (1 segundo)