
const Digit = ({ value, isIcon }) => {
    // Estilos en línea básicos para la tarjeta
    const cardStyle = {
        backgroundColor: "#1e1e1e",
        color: "white",
        fontSize: "60px",
        width: "80px",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        margin: "0 5px"
    };

    return (
        <div style={cardStyle}>
            {isIcon ? <i className="far fa-clock"></i> : value}
        </div>
    );
};

export default Digit;