

import Swal from 'sweetalert2'

export const ContactFormMain = ({ addTestimonio }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const nombre = event.target.w3lName.value;
        const relacion = event.target.w3lSender.value;
        const mensaje = event.target.w3lMessage.value;

        // Generar un ID único para el nuevo testimonio
        const id = Date.now();

        // Crear un nuevo testimonio
        const nuevoTestimonio = {
            id: id,
            name: nombre,
            relationship: relacion,
            description: mensaje,
            avatar: "stich",
        };

        // Llamar a la función para agregar el nuevo testimonio
        addTestimonio(nuevoTestimonio);

        // Limpiar el formulario
        event.target.reset();

        Swal.fire({
            icon: "success",
            title: "Muchas Gracias!",
            showConfirmButton: false,
            timer: 1500
        });
    };
    return (
        <div className="contacts12-main">
            <form onSubmit={handleSubmit} className="main-input">

                <div className="top-inputs d-grid">
                    <input type="text" placeholder="Nombre" name="w3lName" id="w3lName" required />
                    <input type="text" name="w3lSender" placeholder="Familiar/Amigo/Conocido" id="w3lSender" required />
                </div>
                <textarea placeholder="Dedicale algunas palabras a Nicole" name="w3lMessage" id="w3lMessage" required rows={10}></textarea>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary btn-style">Enviar Saludo</button>
                </div>
            </form>
        </div>
    );
};