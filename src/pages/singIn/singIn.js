import React, {useState} from "react";
import "./singIn.css"

function SingIn (){

    const [formState, setFormState] = useState({
        name: "",
        email: "",
    })

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    // handleFormChange wordt afgevuurd bij elke verandering en zorgt dan dat het huidige state object wordt gekopieerd
    // alleen de object key van het bijbehorende inputveld wordt overschreven met een nieuwe waarde
    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });

        console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    }


    return(
        <>


            <form onSubmit={handleSubmit} id="formulario">
                <h3>Ingrese</h3>
                <fieldset>
                    <legend>PERSONAL INFORMATION</legend>
                    <label htmlFor="details-name">
                        Name:
                        <input
                            type="text"
                            name="name"
                            id="details-name"
                            value={formState.name}
                            onChange={handleFormChange}
                        />
                    </label>
                    <label htmlFor="details-email">
                        Email:
                        <input
                            type="text"
                            name="email"
                            id="details-email"
                            value={formState.email}
                            onChange={handleFormChange}
                        />
                    </label>
                </fieldset>
                <fieldset className="boton">
                    <button type="submit"  className="send">
                        Submit
                    </button>
                </fieldset>
            </form>
        </>
    );
}


export default SingIn;