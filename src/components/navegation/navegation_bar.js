import React, {useState} from "react";
import './nav.css';
import {NavLink} from "react-router-dom";
import SingUp from "../../pages/singUp/singUp";
import Language from "../../pages/language/language";



function NavBar(props) {

    const [buttons, setButtons] = useState(" ");


    return (

        <div className="Header_background">
            <nav className="navegador">
                <NavLink to="/"><img className="logo" src={props.image} alt={props.title}/></NavLink>
                <ul className="ulNavegador">
                    <li className="listanavegador">
                        <button
                            id="botones"
                            type="button"
                            //className={buttons === "props.singUp" ? "active" : "default"}
                            // disabled={buttons === "props.singUp"}
                            onClick={() => setButtons("props.singUp")}
                        >
                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : 'default'}
                                to="/SingUp">{props.singUp}</NavLink>

                        </button>

                    </li>

                    <li>
                        <button
                            id="botones">
                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : 'default'}
                                to="/SingIN">{props.singIn}</NavLink>
                        </button>
                    </li>
                    <li>
                        <button
                            id="botones">
                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : 'default'}
                                to="/Language">{props.language}</NavLink>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
