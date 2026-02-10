import React from "react";
import SecondsCounter from "./SecondsCounter";

// El componente Home recibe los segundos y las funciones de control como props
const Home = ({ seconds, actions }) => {
    
    return (
        <div className="text-center container-fluid pt-5">
            {/* Componente del contador */}
            <SecondsCounter seconds={seconds} />

            {/* Controles y Bonus */}
            <div className="controls mt-4 text-light">
                <div className="row justify-content-center gap-3">
                    
                    {/* Botones principales */}
                    <div className="col-12 mb-3">
                        <button className="btn btn-warning m-1" onClick={actions.stop}>Stop</button>
                        <button className="btn btn-success m-1" onClick={actions.resume}>Resume</button>
                        <button className="btn btn-danger m-1" onClick={actions.reset}>Reset</button>
                    </div>

                    {/* Inputs para Bonus (Cuenta atrás y Alerta) */}
                    <div className="col-md-5">
                        <h5>Cuenta Regresiva</h5>
                        <div className="input-group justify-content-center">
                            <input type="number" id="countdownInput" className="form-control" placeholder="Segundos..." style={{maxWidth: "150px"}} />
                            <button className="btn btn-primary" onClick={actions.startCountdown}>Iniciar</button>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <h5>Alerta</h5>
                        <div className="input-group justify-content-center">
                            <input type="number" id="alertInput" className="form-control" placeholder="Alerta en..." style={{maxWidth: "150px"}} />
                            <button className="btn btn-info" onClick={actions.setAlert}>Fijar Alerta</button>
                        </div>
                    </div>
                </div>
            </div>

            <p className="mt-5 text-light">
                Made by <a href="https://github.com/4GeeksAcademy/latam-pt-66-IgnacioPinto-React-Counter">Hecho por Ignacio Pinto</a>, with love!
            </p>
        </div>
    );
};

export default Home;