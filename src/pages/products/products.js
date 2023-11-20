import React from "react";
import "./product.css";
import {useParams} from "react-router-dom";

function Products(){

const {id} = useParams();

    return(
        <>
            <div>
                The cliente number is {id}
            </div>

        </>
    );

}

export default Products;