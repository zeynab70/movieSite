// import { Link,useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './style.css';

// export function Header() {
//     return (
//         <div className="menuHolder">
//             <div className="menuItemRight">
//                 <input placeholder="search movie... " />
//             </div>
//             <div className="menuItemLeft">
//                 <a href="#">sign in</a>
//                 <a href="#">sign up now</a>
//             </div>
//         </div>
//     )
// }
export default function Layout3() {
    return (
        <Fragment>
            <div className="holder3">
            <div className="leftSection">
                    <div className="leftSectionContent">
                            <h2> sign in</h2>
                            <input  type="text" placeholder="username"/>
                            <input  placeholder="password" />
                            <button  type="submit">sign up</button>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="logo">Zmovies</div>
                    <div className="rightSectionContent">
                        <i class="fa-solid fa-user-plus"></i>
                        <p>By entering your email, if you have already registered on the site, you will be taken to the login page, otherwise, you will be transferred to the registration page</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
