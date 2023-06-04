// import { Link,useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './style.css';

export default function Layout4() {
    return (
        <Fragment>
            <div className="holder4">
                <div className="leftSection">
                    <div className="leftSectionContent">
                            <h2>ثبت نام</h2>
                            <input type="text"  placeholder="name " />
                            <input type="text"  placeholder="family" />
                            <input  type="text" placeholder="username"/>
                            <input  placeholder="password" />
                            <input  placeholder="Repeat password" />
                            <button  type="submit">sign up</button>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="logo">Zmovies</div>
                    <div className="rightSectionContent">
                        <i class="fa-solid fa-user-plus"></i>
                        <p>You need to sign up to receive and view</p>
                    </div>
                </div>
            </div>             
        </Fragment>
    )
}
