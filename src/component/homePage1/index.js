// import { Link,useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './style.css';

export function Header() {
    return (
        <div className="menuHolder">
            <div className="menuItemRight">
                <input placeholder="search movie... " />
            </div>
            <div className="menuItemLeft">
                <a href="#">sign in</a>
                <a href="#">sign up now</a>
            </div>
        </div>
    )
}
export function BackgroundImage(){
    return(
        <div className="backgroundImage">
            <div className="backgroundImageContent">
                <p className="title">author:...</p>
                <p className="description"> description:...</p>
            </div>
        </div>
    )
}
export function MovieList(){
    return(
        <ul className="movielist">
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
            <li>
                <img src="../../../assets/images/portrait-black-adam.avif"/>
            </li>
        </ul>
    )
}
export function Categories() {
    return (
        <div className="categoriesHolder">
            <div className="logo">
                < h1>Zmovie</h1>
            </div>
            <div className="categories">
                < h2>categories</h2>
                <div className="categoriesList1">
                    <i class="fa-solid fa-video"></i>
                    <span> newMovies</span>
                </div>
                <div className="categoriesList2">
                    <i class="fa-solid fa-film"></i>
                    <span>oldMovies</span>
                </div>
            </div>
            <div className="Genres">
                < h2>Genres</h2>
                <ul>
                    <li>
                        <img src="../../../assets/images/crime.png"/>
                        <span> Crime</span>
                    </li>
                    <li>
                        <img src="../../../assets/images/drama.png"/>
                        <span>Drama</span>
                    </li>
                    <li>
                        <img src="../../../assets/images/action.png"/>
                        <span> Action</span>
                    </li>
                    <li>
                        <img src="../../../assets/images/biography.png"/>
                        <span>Biography</span>
                    </li>
                    <li>
                        <img src="../../../assets/images/history.png"/>
                        <span> History</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/adventure.png"/>
                        <span>Adventure</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/fantasy.png"/>
                        <span> Fantasy</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/western.png"/>
                        <span>Western</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/comedy.png"/>
                        <span> Comedy</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/science fiction.png"/>
                        <span>Sci-Fi</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/mystery.png"/>
                        <span> Mystery</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/thriller.png"/>
                        <span>Thriller</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/family.png"/>
                        <span> Family</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/war.png"/>
                        <span>War</span>
                    </li>
                    <li>
                       <img src="../../../assets/images/animation.png"/>
                        <span> Animation</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/romance.png"/>
                        <span>Romance</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/horror.png"/>
                        <span>Horror</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/music.png"/>
                        <span> Music</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/film-noir.png"/>
                        <span>Film-Noir</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/musical.png"/>
                        <span> Musical</span>
                    </li>
                    <li>
                    <img src="../../../assets/images/sport.png"/>
                        <span>Sport</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
// export  function Body(){

// }

export default function Layout() {
    return (
        <Fragment>
            <div className="holder">
                <div className="leftSection">
                    <Categories />
                </div>
                <div className="middleSection">

                </div>
                <div className="rightSection">
                    <Header/>
                    <BackgroundImage/>
                    <MovieList/>
                </div>
            </div>
        </Fragment>
    )
}
    // useEffect(()=> {
    //     getApi()},[]);
    // function getApi(){
    //     axios.get("https://moviesapi.ir/api/v1/genres").then(function (response) {
    //         // handle success
    //         console.log(response);
    //       })
    //       .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //       })



// import { Fragment } from "react";
// import './style.css';

// export default function HomePage(){
//     return(
//         <Fragment>
//             <div className="header">
//                 <div className="menu">
//                     <div className="menuItemRight">
//                         < h1>Zmovie</h1>
//                         <input placeholder="search... "/>
//                     </div>
//                     <div className="menuItemLeft">
//                         <a href="#">sign in</a>
//                         <a href="#">register</a>
//                     </div>
//                 </div>
//                 <div className="content">
//                     <p>It's all here! award-winning movies, fresh originals, and family favorites.</p>
//                 </div>
//                 <div className="contentBackground"></div>
//             </div>
//             <div className="genre">
//                 <ul>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-black-adam.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Movies</div>
//                                 <div className="title">BLACK ADAM</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-candy.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Drama</div>
//                                 <div className="title">LOVE & DEATH</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-christina-hall.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Home</div>
//                                 <div className="title">CHRISTINA IN THE COUNTRY</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-donnie.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Crime</div>
//                                 <div className="title">VERY SCARY PEOPLE</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-guy-fieri.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Food</div>
//                                 <div className="title">DINERS, DRIVE-INS AND DIVES</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-harry-potter.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Family</div>
//                                 <div className="title">HARRY POTTER COLLECTION</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-joel.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Action</div>
//                                 <div className="title">THE LAST OF US</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-quinta.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Comedy</div>
//                                 <div className="title">ABBOTT ELEMENTARY S1</div>
//                             </div>
//                         </div>
//                     </li>
//                     <li>
//                         <div class="box">
//                             <img src="../assets/images/portrait-trixie.avif"/>
//                             <div className="boxContent">
//                                 <div className="cattegory">Reality</div>
//                                 <div className="title">IRIXIE MOTEL</div>
//                             </div>
//                         </div>
//                     </li>
//                 </ul>
//             </div>
//             <div className="biggestHits">
//                 <div className="container">
//                     <div className="title">THE ONE TO WATCH</div>
//                     <div className="subtitle">
//                         <h1>For the biggest Hits</h1>
//                     </div>
//                     <div className="biggestHitsList">
//                         <ul>
//                             <li>
//                                 <img src="../assets/images/barry_1.avif"/>
//                             </li>
//                             <li>
//                                 <img src="../assets/images/house-of-the-dragon_0.avif"/>
//                             </li>
//                             <li>
//                                 <img src="../assets/images/the-last-of-us.avif"/>
//                             </li>
//                             <li>
//                                 <img src="../assets/images/the-white-lotus.avif"/>
//                             </li>
//                             <li>
//                                 <img src="../assets/images/white-house-plumbers.avif"/>
//                             </li>
//                             <li>
//                                 <img src="../assets/images/euphoria_0.avif"/>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }