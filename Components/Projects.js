import React from 'react';

import '../App.css';
import '../naveyStyle.css';

import github from '../Images/github.png'
import demo from '../Images/demo.png'

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            projects: [
                {
                    name: 'website',
                    open: false,
                    language: 'javascript'
                },
                {
                    name: 'ru-single',
                    open: false,
                    language: 'python'
                },
                {
                    name: 'ru-home',
                    open: false,
                    language: 'python'
                },
                {
                    name: 'mood-music',
                    open: false,
                    language: 'java'
                },
                {
                    name: 'workout',
                    open: false,
                    language: 'python'
                },
                {
                    name: 'battleships',
                    open: false,
                    language: 'java'
                },
                {
                    name: 'git-recreation',
                    open: false,
                    language: 'c'
                },
                {
                    name: 'workout-generator',
                    open: false,
                    language: 'javascript'
                }
            ]
        };

        this.openDescription = this.openDescription.bind(this);
    }

    openDescription(index){
        var projects = this.state.projects;
        projects[index].open = !projects[index].open;
        var language = projects[index].language;

        let i;
        for(i = 0; i < 7; i++){
            if(index !== i && language.localeCompare(projects[i].language) === 0)
                projects[i].open = false;
        }

        this.setState({
            projects: projects
        });
    }

    render(){
        return(
            <div className='project-main'>

                <div className='proj-box'>
                    <h1 className='projIntro'>JavaScript</h1>
                    <div className='proj-button-container'>

                        <div className='gradient-border' id='website'>
                            <button className='project-button' data-hover='This Website uses HTML, CSS, JavaScript, React' onClick={() => this.openDescription(0)}>
                                <b>This Website</b><br></br>
                                March 2020 - Present
                            </button>
                        </div>

                        <div className='gradient-border' id='website'>
                            <button className='project-button' data-hover='This Website uses JavaScript, MySQL, React, Node.js, Express.js, AWS' onClick={() => this.openDescription(7)}>
                                <b>Workout Generator</b><br></br>
                                July 2020 - Present
                            </button>
                        </div>

                    </div>

                    <div>
                        <div className={"project-info " + (this.state.projects[0].open ? 'open' : 'none')}>
                            <b>This Website</b><br></br>
                            March 2020 - Present<br></br>
                            <ul>
                                <li>
                                    Utilized React to create portfolio website as a single page application
                                </li>
                                <li>
                                    Programmed website using HTML, CSS, and JavaScript
                                </li>
                                <li>
                                    Designed and organized website into Components that interact using React
                                </li>
                            </ul>
                            Technologies: JavaScript, HTML, CSS, React<br></br><br></br>
                            <a href="https://navey.github.io/#/" target="_blank" rel="noopener noreferrer"><img src={demo} className='home-pic' alt='demo-website' /></a>
                            <a href="https://github.com/navey/portfolio-code" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-website'/></a>
                        </div>

                        <div className={"project-info " + (this.state.projects[7].open ? 'open' : 'none')}>
                            <b>Workout Generator</b><br></br>
                            March 2020 - Present<br></br>
                            <ul>
                                <li>
                                    Website that generates a workout given what muscles need to be worked and what equipment is available
                                </li>
                                <li>
                                    Implemented front-end using React with components made by myself and components from Material-UI
                                </li>
                                <li>
                                    Implemented back-end and REST API using Node.js, Express.js, AWS and MySQL; allowing workouts to be generated
                                </li>
                            </ul>
                            Technologies: JavaScript, HTML, CSS, React, Node.js, Express.js, REST API, AWS RDS<br></br><br></br>
                            <a href="https://github.com/navey/WorkoutGenerator" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-wg'/></a>
                        </div>
                    </div>
                </div>

                <div className='proj-box'>
                    <h1 className='projIntro'>Python</h1>
                    <div className='proj-button-container'>

                        <div className='gradient-border' id='workout'>
                            <button className='project-button' data-hover='Workout Organizer uses Python, Tkinter' onClick={() => this.openDescription(4)}>
                                <b>Workout Organizer</b><br></br>
                                August 2019 - Present<br></br>
                            </button>
                        </div>
                        <div className='gradient-border' id='ru-single'>
                            <button className='project-button' data-hover='RU-Single uses Python, OpenCV, Selenium, PIL, Numpy' onClick={() => this.openDescription(1)}>
                                <b>RU-Single</b><br></br>
                                February 2020<br></br>
                            </button>
                        </div>
                        <div className='gradient-border' id='ru-home'>
                            <button className='project-button' data-hover='RU-Home uses Python, OpenCV, Azure, Firebase, Twilio, Dragonboard 410c' onClick={() => this.openDescription(2)}>
                                <b>RU-Home</b><br></br>
                                November 2019<br></br>
                            </button>
                        </div>

                    </div>

                    <div>
                        <div className={"project-info " + (this.state.projects[4].open ? 'open' : 'none')}>
                            <b>Workout Organizer</b><br></br>
                            August 2019 - Present<br></br>
                            <ul>
                                <li>
                                    Utilized Tkinter to create an easy-to-use GUI
                                </li>
                                <li>
                                    Integrated a save feature to save any information you store in a session
                                </li>
                                <li>
                                    Implemented a display that shows you all the exercises and info you store
                                </li>
                            </ul>
                            Technologies: Python, Tkinter, OOP<br></br><br></br>
                            <a href="https://github.com/navey/WorkoutOrganizer" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-workout'/></a>
                        </div>
                        <div className={"project-info " + (this.state.projects[1].open ? 'open' : 'none')}>
                            <b>RU-Single</b><br></br>
                            February 2020<br></br>
                            <ul>
                                <li>
                                    Bot that uses random forest models to automatically swipe left or right depending on user’s preferences
                                </li>
                                <li>
                                    Created bot, using Selenium, to automatically log on to Tinder and begin swiping left or right until stopped
                                </li>
                                <li>
                                    Integrated the random forest model into the bot so the bot can predict your preferences
                                </li>
                            </ul>
                            Technologies: Python, OpenCV, Selenium, PIL, NumPy<br></br><br></br>
                            <a href="https://github.com/navey/RU-Single" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-single'/></a><br></br><br></br>
                            <b>Demo:</b><br></br>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/FTvJf7Yzhyk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className={"project-info " + (this.state.projects[2].open ? 'open' : 'none')}>
                            <b>RU-Home</b><br></br>
                            November 2019<br></br>
                            <ul>
                                <li>
                                    Smart doorbell that uses Azure’s Face API to recognize who’s at the door and alert the owner with Twilio
                                </li>
                                <li>
                                    Integrated the facial recognition feature into the app which identifies the person at the door
                                </li>
                                <li>
                                    Connected Firebase to app which takes images from the database and trains the AI to recognize those faces
                                </li>
                            </ul>
                            Technologies: Python, OpenCV, Azure Face API, Firebase, Twilio, Dragonboard 410c<br></br><br></br>
                            <a href="https://github.com/pintojonathan11/RU-Home" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-home'/></a>
                        </div>
                    </div>
                </div>

                <div className='proj-box'>
                    <h1 className='projIntro'>Java</h1>
                    <div className='proj-button-container'>

                        <div className='gradient-border' id='mood-music'>
                            <button className='project-button' data-hover='Mood Music uses Java, Android Studio, OpenWeatherMap API, SoundCloud API' onClick={() => this.openDescription(3)}>
                                <b>Mood Music</b><br></br>
                                October 2018<br></br>
                            </button>
                        </div>
                        <div className='gradient-border' id='battleships'>
                            <button className='project-button' data-hover='Battleships uses Java, Swing' onClick={() => this.openDescription(5)}>
                                <b>Battleships</b><br></br>
                                August 2018<br></br>
                            </button>
                        </div>

                    </div>

                    <div>
                        <div className={"project-info " + (this.state.projects[3].open ? 'open' : 'none')}>
                            <b>Mood Music</b><br></br>
                            October 2018<br></br>
                            <ul>
                                <li>
                                    Utilized the OpenWeatherMap API to recieve information on the weather given the phone's location
                                </li>
                                <li>
                                    Implemented feature to parse through the OWM response and return the temperature/weather
                                </li>
                                <li>
                                    Integrated the information into the app using Android Studio
                                </li>
                            </ul>
                            Technologies: Java, Android Studio, OpenWeatherMap API, SoundCloud API<br></br><br></br>
                            <a href="https://github.com/advil64/MoodMusic" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-mood'/></a>
                        </div>
                        <div className={"project-info " + (this.state.projects[5].open ? 'open' : 'none')}>
                            <b>Battleships</b><br></br>
                            August 2018<br></br>
                            <ul>
                                <li>
                                    Recreation of popular board game of the same name
                                </li>
                                <li>
                                    Utilized an Object-Oriented Design to create the main functionalities of the program
                                </li>
                                <li>
                                    Utilized Swing to create a GUI which gives user a good representation of their “board”
                                </li>
                                <li>
                                    Implemented a save feature which will save your progress after exiting
                                </li>
                            </ul>
                            Technologies: Java, Swing, OOP, Eclipse<br></br><br></br>
                            <a href="https://github.com/navey/Battle_Ships" target="_blank" rel="noopener noreferrer"><img src={github} className='home-pic' alt='github-battleships'/></a>
                        </div>
                    </div>
                </div>

                <div className='proj-box'>
                    <h1 className='projIntro'>C</h1>
                    <div className='proj-button-container'>
                        <div className='gradient-border' id='git-recreation'>
                            <button className='project-button' data-hover='Git Recreation uses C, TCP/IP, Networking, Multi-threading, OpenSSL, Socket Programming' onClick={() => this.openDescription(6)}>
                                <b>Git Recreation</b><br></br>
                                April 2020<br></br>
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className={"project-info " + (this.state.projects[6].open ? 'open' : 'none')}>
                            <b>Git Recreation</b><br></br>
                            April 2020<br></br>
                            <ul>
                                <li>
                                    Created a version control system that allows multiple clients to access multiple projects in a repository
                                </li>
                                <li>
                                    Implemented TCP/IP networking feature that allows clients to access a server from different machines
                                </li>
                                <li>
                                    Implemented multi-threading feature that allows server to handle multiple client requests
                                </li>
                                <li>
                                    Integrated multiple features common in VCS such as update/upgrade, commit/push, rollback, etc.
                                </li>
                            </ul>
                            Technologies: C, TCP/IP, Networking, Multi-threading, OpenSSL, Socket Programming
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Projects;