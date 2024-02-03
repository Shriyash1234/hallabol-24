import React, { useEffect, useRef } from "react";
import { Helmet } from 'react-helmet';
import hallabolVideo from "../assets/videos/hallabol.mp4"
import { gamesList } from "../data/games";
import ImageSlider from "../components/ImageSlider";
import { Link } from 'react-router-dom';
import BgIMG1 from "../assets/images/BgImg-1.png"
import BgIMG2 from "../assets/images/BgImg-2.png"
import { NavLink } from "react-router-dom";
import ONGCLogo from "../assets/images/ongc.png"


const Home = () => {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);


    return (
        <div>
            <Helmet>
                <title>Hallabol'24</title>
            </Helmet>
            <div className='main-container'>
                <div className="banner">
                    <div className="left-banner">
                        <img src={BgIMG1} />

                        <button className="register-now-btn-1"> <NavLink
                            to="/games">Register Now »</NavLink>
                        </button>



                    </div>
                    <div className="right-banner">
                        <img src={BgIMG2} />


                    </div>
                    <button className="register-now-btn-2"> <NavLink
                        to="/games">Register Now »</NavLink>
                    </button>

                </div>


                <div className="section">
                    <div className="about">
                        <h2 style={{fontSize:"24px"}}>Get ready for the ultimate <span className="about-span">12-day </span>extravaganza! Hallabol 12th edition is about to ignite the campus with non-stop action, thrill, and excitement. This is your chance to experience <span className="about-span">12 unforgettable nights</span> of pure fun and friendly competition. Get your game face on and join the party as the institute comes together for HallaBol - the most epic annual sports festival of all time! From  <span className="about-span">3th to 13th February</span>, get ready to mark your calendars and be a part of history. So, gear up for 11 nights of madness, <span className="about-span">12 games</span> of glory, and 11 days of memories that will last a lifetime! Let's do this!</h2>
                    </div>
                    <div className="sponsors-section">
                    {/* <div className="section-heading" style={{ marginTop: "100px" }}>
                            <h1>Powered by</h1>
                        </div>
                        <div className="sponsors-logo">
                            <a href='https://www.ongcindia.com/' target="_blank" rel="noreferrer"><img src={ONGCLogo} /></a>
                        </div> */}
                        

                    </div>

                    <div className="hallabol-video">
                        <video
                            className="hallabol-video"
                            style={{ maxWidth: "100%", width: "100%", borderRadius: "10px" }}
                            playsInline
                            loop
                            muted
                            controls
                            alt="All the devices"
                            src={hallabolVideo}
                            ref={videoEl}
                        />

                    </div>

                    <div className="about">
                        <h2 style={{fontSize:"24px"}}>Mark your calendars for some of the best and happening nights at IITGN! Yes, we are talking about HallaBol - yayyy - will set the ground on fire from 3-14 Feb! Here's to 12 nights that you will never forget!</h2>
                    </div>



                    <div className="section-heading" style={{ marginTop: "100px" }}>
                        <h1>Featured Sports So Far!</h1>
                    </div>
                    <div className="games">
                        {gamesList.map((game) => (
                            <Link className='' to={`/games${game.Link}`}>
                                <div className="game-item">
                                    <div className="image-card">
                                        <img src={game.Images} />
                                    </div>

                                    <div className="game-item-caption">
                                        <p>{game.GameName}</p>
                                    </div>


                                </div>

                            </Link>


                        ))}

                    </div>





                    <div className="slider">

                        <ImageSlider />

                    </div>





                </div>






            </div>

        </div>

    )
}

export default Home
