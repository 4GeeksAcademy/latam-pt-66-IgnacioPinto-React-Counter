import React from "react";
import Digit from "./Digit";

const SecondsCounter = ({ seconds }) => {
    // Convertimos el número a string y rellenamos con ceros (6 dígitos)
    const secondsString = seconds.toString().padStart(6, '0');
    const digits = secondsString.split('');

    const containerStyle = {
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        marginBottom: "20px"
    };

    return (
        <div style={containerStyle}>
            <Digit isIcon={true} />
            {digits.map((digit, index) => (
                <Digit key={index} value={digit} />
            ))}
        </div>
    );
};

export default SecondsCounter;