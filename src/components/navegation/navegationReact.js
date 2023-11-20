import React from 'react';
import { NavLink } from 'react-router-dom';

function NavegationReact() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/singin">Sign In</NavLink>
                </li>
                <li>
                    <NavLink to="/serviceuser">signup</NavLink>
                </li>
            </ul>
        </nav>
    );
}


{/*<Routes>*/}
{/*    <Route path="/" element={<Home/>}/>*/}
{/*    <Route path="/singin" element={<SingIn/>}/>*/}
{/*    <Route path="/serviceuser" element={<ServiceUser/>}/>*/}
{/*    <Route path="/serviceprovider" element={<ServiceProvider/>}/>*/}
{/*    <Route path = "/signup" element={<UserProfile/>}/>*/}
{/*    <Route path = "/Booking" element={<Booking/>}/>*/}
{/*    <Route path="*" element={<NotFound/>}/>*/}

export default NavegationReact;