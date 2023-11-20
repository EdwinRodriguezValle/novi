import React from "react";
import "./notFound.css"
import {Link} from "react-router-dom";

function NotFound(){
    return(
        <>
            <div className="backtohome">
                <h3 className="til">Page Not Found </h3>
                <Link to="/" id="back">Back to home</Link>
            </div>

        </>
    );
}

export default NotFound;