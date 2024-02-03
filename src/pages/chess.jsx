import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const chess = () => {
    return (
        <div className='main-container'>
            <Helmet>
                <title>TriUnity Chess</title>
            </Helmet>
            <div className="games-section">
                <div className="sports-heading">
                    <h1>TriUnity Chess</h1>
                </div>
                <div className="sports-item-heading">
                    <h2>Rules:</h2>
                </div>
                <ul className='guidlines'>
                    <li>Each team consists of three players. The team can include any combination of male, female, and marquee players. The only exception is NO two marquee players can be present in one team
                    </li>
                    <li>Players on the same team take turns making moves. The order of play is decided by the team and cannot change during the game, the order should be given before the game starts.</li>
                    <li>The standard time format is 5 minutes per side with an additional 5 seconds increment per move (5+5). If any female player is included in the team, the time format becomes 7+5 for that side. If a marquee player is included, the time format is 4+5 for that side.</li>
                    <li>Players are responsible for managing their own time. The clock starts when a player makes their move. </li>
                    <li>If a player makes an illegal move, one warning will be given and on the second illegal move,if the move is not forced, their team loses the right to make the next move, and the opposing team gains an additional move. Third illegal moves will make the team lose.</li>
                    <li>Players are not allowed to consult by any means with their teammates once the game starts. Only the current player can physically make the move on the board.</li>
                    <li>Players must adhere to the agreed-upon order of play. Deviating from the order without mutual consent may result in penalties.</li>

                    <li> No time bonus is given considering the time increment. The team loses once the time ends. 
                    </li>
                    <li>A warning is issued when a team is approaching the final minute of their total time. Continuous violations may result in time penalties.</li>
                    <li>                    
                        <li>A warning is issued when a team is approaching the final minute of their total time. Continuous violations may result in time penalties.</li>
</li>
                </ul>


                
                <div className="sports-item-heading">
                    <h2>Pool Players:</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                    Suraj Borate,Animesh Sharma,Tarun Hooda,Nishant Tomar,Abhishek Sahasranshu,Akash Gupta,Ashmit Chhoker,Chaman Modi,Pragya Arora
,Devvrat Hans
,Soham Pathak
,Kshitij Kasodkar
,Rama Balhara
,Vishal Raja
,Prof. Harish PM
,Prof. Raghavan


                    </li>




                </ul>

                <div className="sports-item-heading">
                    <h2>For any queries contact :</h2>
                </div>
                <ul className='guidlines'>
                    <li>
                     Animesh Sharma  | 9691330551

                    </li>
                    <li>
                     Akash Gupta  | 8881254922
                    </li>
                    <li>
                    Devvrat Hans   | 8368149927 
                    </li>
                </ul>
                <div className="register-button">
                    <Link to="/games/chess-registration">Register Now</Link>

                </div>
















            </div>


        </div>
    )
}

export default chess
