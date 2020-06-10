import React from 'react';

import '../App.css';
import '../naveyStyle.css';

import rutgers1 from '../Images/rutgers1.jpg';


class Education extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            coursework: [
                {
                    subject: 'Computer Science',
                    open: false
                },
                {
                    subject: 'Mathematics',
                    open: false
                }
            ]
        }
        this.openAccordion = this.openAccordion.bind(this);
    }

    openAccordion(index){
        var coursework = this.state.coursework;
        coursework[index].open = !coursework[index].open;
        this.setState({
            coursework : coursework
        });
    }

    render(){
        return(
            <div>
                <body>
                    <div className="eduMain">
                        <h1 className="eduIntro">
                            Rutgers University - New Brunswick
                        </h1>
                        <hr className='underline-coral'></hr>
                        <ul>
                            <li>
                                <h1 className="bullet"><b>Degree: </b> Bachelor of Science, Computer Science</h1>
                            </li>
                            <li>
                                <h1 className="bullet"><b>Minor: </b> Mathematics</h1>
                            </li>
                            <li>
                                <h1 className="bullet"><b>Cumulative GPA: </b> 4.0</h1>
                            </li>
                            <li>
                                <h1 className="bullet"><b>Coursework: </b></h1>
                                <ul>
                                    <li>
                                        <button type="button" className="collapsible" onClick={() => this.openAccordion(0)}>{this.state.coursework[0].subject}</button>
                                        <div 
                                            className={"content" + (this.state.coursework[0].open ? 'open' : '')}
                                        >
                                            <ul>
                                                <li><a className="collBullet" href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-112-data-structures">Data Structures</a></li>
                                                <li><a className="collBullet" href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-205-introduction-to-discrete-structures-i">Discrete Structures 1 & 2</a></li>
                                                <li><a className="collBullet" href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-211-computer-architecture">Computer Architecture</a></li>
                                                <li><a className="collBullet" href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-214-systems-programming">Systems Programming</a></li>
                                                <li><a className="collBullet" href="https://www.cs.rutgers.edu/academics/undergraduate/course-synopses/course-details/01-198-336-principles-of-information-and-data-management">Principles Of Information and Data Management</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <button type="button" className="collapsible" onClick={() => this.openAccordion(1)}>{this.state.coursework[1].subject}</button>
                                        <div 
                                            className={"content" + (this.state.coursework[1].open ? 'open' : '')}
                                        >
                                            <ul>
                                                <li><a className="collBullet" href="https://www.math.rutgers.edu/academics/undergraduate/courses/941-01-640-151-calculus-i-for-the-mathematical-and-physical-sciences">Calculus 1 & 2</a></li>
                                                <li><a className="collBullet" href="https://www.math.rutgers.edu/academics/undergraduate/courses/949-01-640-251-multivariable-calculus">Multivariable Calculus</a></li>
                                                <li><a className="collBullet" href="https://www.math.rutgers.edu/academics/undergraduate/courses/948-01-640-250-introductory-linear-algebra">Introduction to Linear Algebra</a></li>
                                                <li><a className="collBullet" href="https://www.math.rutgers.edu/academics/undergraduate/courses/963-01-640-354-linear-optimization">Linear Optimization</a></li>
                                                <li><a className="collBullet" href="https://www.math.rutgers.edu/academics/undergraduate/courses/989-01-640-477-mathematical-theory-of-probability">Mathematical Theory of Probability</a></li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </body>
                <br></br><br></br>
                <img class="center" id="rutgers1" src={rutgers1} alt='Rutgers' style={{display:'block'}}/>
            </div>
        );
    }
}
export default Education;