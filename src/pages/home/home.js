import React, {useState} from "react";
import "./home.css"
import meet from "../../assets/meet.gif"
import share from "../../assets/share.jpg"
import grow from "../../assets/grow.jpg"
import enjoy from "../../assets/enjoy.jpg"
import {Link, useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    function handleClick() {
        console.log('We gaan direct door naar de afspraken pagina!');
        navigate("/singup");
    }


    return (


        <>

            {/*<div>*/}
            {/*    <h1>Home Page</h1>*/}
            {/*    <Link to="/Home">Home-Page</Link>*/}
            {/*</div>*/}


            <main>

                <header>
                    <h1> HEADER DARE TO EXPERIENCE AND SENSE NEW WAYS OF LIVING</h1>

                        <button
                        type = "button"
                        id="joinUs"
                        className="joinus"
                        onClick={handleClick}
                        >
                        JOIN US
                    </button>


                    <h2>Enhance your life and your personality by hosting travellers from all around the world and
                        visiting nice people and cultures</h2>

                </header>

                <div className="cuerpo">
                    <aside className="historias">
                        <h2>User histories</h2>
                        <h5> Participatory tourism involves the tourist who wishes to encounter the inhabitants of the country that is visited, and is becoming an increasingly important aspect of tourism, enhanced by the development of web 2.0 and couchsurfing. This special issue of Espaces, Tourisme & Loisirs contains a dossier on participatory tourism which has 7 p </h5>
                    </aside>
                    <aside className="foto">
                        <h2>Traveling high in the mountains</h2>
                    </aside>

                    <aside className="historias">
                        <h2>Some histories</h2>
                        <h5> This paper examines the livelihood linkage of community based ecotourism at Thekkady. The evolution and growth of tourism in the study area is also discussed. Time series data pertaining to the direct income from community based ecotourism programmes has been analysed to explore the economic significance of tourism to the local community. Though the study covers only a part of the expenditure by tourists, its socio-economic significance is really laudable. The paper also explores the sustainability issues of ecotourism as well. </h5>

                    </aside>
                </div>


                <div className="mensajes">
                    <section className="icons">
                        <h1>WHY CHOOSE BY SHARING & ENJOYING</h1>
                        <article>
                            <span>
                                <img src={meet}/>
                                <div className="nota">
                                    <h2>Meet</h2>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae eos fugiat necessitatibus neque non reprehenderit? Accusamus accusantium dicta doloribus, ea, facere ipsam iste maiores nisi quas sed sequi, suscipit.</h6>
                                </div>

                            </span>
                            <span>
                                <img src={share}/>
                                <div className="nota">
                                    <h2>Share</h2>
                                <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At consequatur ducimus earum excepturi explicabo, libero nesciunt nobis possimus quis quo repudiandae similique. Dolorem pariatur saepe sunt veritatis. Alias, facere incidunt.</h6>
                                </div>
                                </span>
                            <span>
                                <img src={enjoy}/>
                                <div className="nota">
                                    <h2>Enjoy</h2>
                                     <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque eveniet qui reiciendis rem saepe, suscipit voluptatem. Accusantium aliquam delectus esse expedita, facere laboriosam nesciunt, officia praesentium quasi, repellendus velit?</h6>
                                </div>

                            </span>
                            <span>
                                <img src={grow}/>
                                <div className="nota">
                                    <h2>Opportunities</h2>
                                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam consequuntur, dignissimos dolores eveniet ex expedita facere in ipsum magnam maxime molestias nihil optio perferendis, quis suscipit temporibus vel voluptatem?</h6>
                                </div>
                            </span>
                        </article>
                    </section>
                </div>
            </main>

        </>
    );
}

export default Home;
