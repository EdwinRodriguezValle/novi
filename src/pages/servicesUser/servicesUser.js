import React from "react";
import {useForm} from 'react-hook-form';
import Usuario from './servicesUser.css';

function ServiceUser() {

    const {handleSubmit, formState:{errors}, register} = useForm();
    function onFormSubmit(data){
        console.log(data);
    }

    console.log(errors);

        return (
            <>
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <label htmlFor="name-field">
                        Nombre:
                        <input
                            type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Esta linea debo contener al menos 2 dos caracteres'
                                },
                                manLength:{
                                    value: 5,
                                    massage: "Solo puede contener un maximo de 5 caracteres",
                                },
                            })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </label>

                    <label htmlFor="email-field">
                        Email:
                        <input
                            type="email"
                            {...register("email", {
                                required:{
                                    value: true,
                                    message: 'Debe incluir el simbolo "@"',
                                },
                                validate: (value) => value.includes("@") || "Este campo debe incluir el simbolo @"

                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </label>

                    <label htmlFor="edad">
                        edad:
                        <input
                            type="number"
                            {...register("age", {
                                required:{
                                    value: true,
                                    message: 'no puede esta vacio',
                                },
                                max:{
                                    value: 18,
                                    message: "debe ser mayor de 18 anos"

                                }
                            })}
                        />
                        {errors.age && <p>{errors.age.message}</p>}
                    </label>


                    <label htmlFor="message-field">
                        Mensaje:
                        <textarea
                            {...register("message", {
                                required: {
                                    value: true,
                                    massage: "Este campo no debe estar en blanco",
                                },
                                maxLength:{
                                    value: 30,
                                    message: "Este campo puede contener un maximo de 200 caracteres"
                            },
                            })}
                        ></textarea>
                        {errors.mensaje && <p>{errors.mensaje.message}</p>}
                    </label>

                    <button type="submit">
                        Enviar
                    </button>
                </form>
            </>
        );
    }

export default ServiceUser;
