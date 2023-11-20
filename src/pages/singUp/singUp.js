import React, {useState} from "react";
import "./singUp.css"
import {useForm} from "react-hook-form";

function SingUp (){

    //Este fue para componentes controlados con useState///
    // const [estadoFormulario, setFormularioEstado] = useState({
    //     name: "",
    //     lastName: "",
    //     birthday: "",
    //     gender : "",
    //     email: "",
    //     telephone: "",
    //     address: "",
    //     language: "",
    //     notas: "",
    //     subcribe: "",
    // })


    const { handleSubmit, formState: { errors }, register,watch } = useForm();

    //Tambien fue para los componentes controlados
    function handleFormSubmit(data) {
        // e.preventDefault();
        console.log(data);
    }

    console.log(errors);
    const watchAllFields = watch();

    // Esto era para trabajar con valores contralados
    // function handleFormChange(e) {
    //     const changedFieldName = e.target.name;
    //     const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    //
    //     setFormaState({
    //         ...formState,
    //         [changedFieldName]: newValue,
    //     });
    //
    //     console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
    // }


    return(
        <>

            <form onSubmit={handleSubmit(handleFormSubmit)} id="formulario">
                <h3>Complete the form</h3>

                <fieldset>
                    <legend>PERSONAL INFORMATION</legend>
                    <label htmlFor="details-name">
                        Name *
                        <input
                            type="text"
                            {...register("name", {
                                required:{
                                    value: true,
                                    message: "This field is mandatory",
                                },
                                minLength:{
                                    value: 2,
                                    message: "This field required at least two characters",
                                },
                                maxLength:{
                                 value: 30,
                                 message: "The maximum character for this fields is 30",
                                },
                            })}
                            id="details-name"
                            // value={estadoFormulario.name}
                            // onChange={handleFormChange}

                        />
                        {errors.name && <p className="errorMessage">{errors.name.message}</p>}
                    </label>

                    <label htmlFor="details-name">
                        Last Name *
                        <input
                            type="text"
                            {...register("lastName",
                                {
                                    required:{
                                        value: true,
                                        message: "This field is mandatory"
                                    },
                                    maxLength:{
                                        value: 30,
                                        message: "No more than 30 characters"
                                    },
                                })}
                            id="details-LastName"
                            // value ={estadoFormulario.lastName}
                            // onChange={handleFormChange}
                        />
                        {errors.lastName && <p className="errorMessage">{errors.lastName.message}</p>}
                    </label>

                    <label htmlFor="details-age">
                        Age *
                        <input
                            type="date"
                            {...register("age",
                                {
                                    required:{
                                        value: true,
                                        message: "This field is mandatory",
                                    },
                                    min:{
                                        value: 18,
                                        message: "You must be at least 18 years ald to join us"
                                    },
                                    max: {
                                        value: 80,
                                        message: "You must be under 80 years old to work with us"
                                    },
                                })}
                            id="details-age"
                            // value={estadoFormulario.age}
                            // onChange={handleFormChange}
                        />
                        {errors.age && <p className="errorMessage">{errors.age.message}</p>}
                    </label>

                    <label htmlFor="details-gender">
                        Gender *
                        <select
                            id="gender"
                            {...register("gender",{
                                required:{
                                    value: true,
                                    message: "you need to fill in"
                                }
                            })}>
                            {/*// value={formState.gender}*/}
                            {/*// onChange={handleFormChange}>*/}
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="homosexual">Homosexual</option>
                        </select>
                        {errors.gender && <p className="errorMessage">{errors.gender.message}</p>}
                    </label>

                    <label htmlFor="details-email">
                        Email *
                        <input
                            type="text"
                            {...register("email",{
                                required:{
                                    value: true,
                                    message: "It is a mandatory field"
                                },
                                validate: (value) => value.includes('@') || "the email must contains `@` ",
                                }

                            )}

                            id="details-email"
                            // value={estadoFormulario.email}
                            // onChange={handleFormChange}
                        />
                        {errors.email && <p className="errorMessage">{errors.email.message}</p>}
                    </label>

                    <label htmlFor="details-telephone">
                        Telephone number *
                        <input
                            type="number"
                            {...register("telephone",
                                {
                                    required:{
                                        value: true,
                                        message: "Mandatory field"
                                    },
                                    minLength:{
                                        value: 10,
                                        message: "it should has at least 10 numbers"
                                    },
                                    maxLength:{
                                        value: 14,
                                        message: "maximum of 14 numbers"
                                    },
                                })}
                            id="details- telephone"
                            // value={estadoFormulario.telephone}
                            // onChange={handleFormChange}
                        />
                        {errors.telephone && <p className="errorMessage">{errors.telephone.message}</p>}
                    </label>

                    <label htmlFor="details-address">
                        Address *
                        <input
                            type="text"
                            {...register("address",
                                {
                                    required:{
                                        value: true,
                                        message: "Enter your address please"
                                    },
                                })}
                            id="details-address"
                            // value={estadoFormulario.address}
                            // onChange={handleFormChange}
                        />
                        {errors.address && <p className="errorMessage">{errors.address.message}</p>}
                    </label>

                    <label htmlFor="details-language">
                        Language *
                        <select
                            {...register("language",
                                {
                                required:{
                                value: true,
                                message: "choose your mather language"
                            },
                            })}>

                            {/*// value={estadoFormulario.language}*/}
                            {/*// onChange={handleFormChange}>*/}
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                            <option value="quechua">Quechua</option>
                            <option value="aymara">Aymara</option>
                            <option value="witoto">Witoto</option>
                            <option value="ashianinka">Ashianinka</option>
                            <option value="dutch">Dutch</option>
                        </select>
                        {errors.language && <p className="errorMessage">{errors.language.message}</p>}
                    </label>
                </fieldset>

                <fieldset>
                    <legend>ADDITIONAL INFORMATION</legend>
                    <label htmlFor="recipe-comments">
                        Notas *
                        <textarea
                            {...register("notas",{
                                required: {
                                    value: true,
                                    message: "give us additional information",
                                },
                                minLength:{
                                    value: 10,
                                    message: "at least 10 characters",
                                },
                                maxLength:{
                                    value: 300,
                                    message: "max 200 characters"
                                },
                            })}
                            id="notas"
                            rows="10"
                            cols="100"
                            placeholder="Please, write dawn additional information you want tell us?"
                            // value={estadoFormulario.notas}
                            // onChange={handleFormChange}
                        >
                        </textarea>
                        {errors.notas && <p className="errorMessage">{errors.notas.message}</p>}
                    </label>
                </fieldset>

                <fieldset >
                    <label htmlFor="recipe-newsletter" className="check" >
                        <input className="caja"
                               type="checkbox"
                               {...register("newsletter",
                                   {
                                       required: false,
                                   })}
                               // checked={estadoFormulario.newsletter}
                               // onChange={handleFormChange}
                        />
                        Subscribe to our news latter *
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


export default SingUp;