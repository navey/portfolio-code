import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import '../naveyStyle.css';

import icon from '../Images/info-icon.png';

class Skills extends React.Component{

    renderJavaInfo(props){
        return(
            <Tooltip {...props}>
                Years of Experience: 3<br/><br/>
                Used in Courses:<br/>
                - Introduction to Computer Science<br/>
                - Data Structures<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Mood Music<br/>
                - Battle Ships<br/>
            </Tooltip>
        );
    }

    renderPythonInfo(props){
        return(
            <Tooltip {...props}>
                Years of Experience: 2<br/><br/>
                Used in Projects:<br/>
                - Workout Organizer<br/>
                - RU-Single<br/>
                - RU-Home<br/>
            </Tooltip>
        );
    }

    renderCInfo(props){
        return(
            <Tooltip {...props}>
                Years of Experience: 1<br/><br/>
                Used in Courses:<br/>
                - Computer Architecture<br/>
                - Systems Programming<br/><br/>
                Used in Projects:<br/>
                - Git Recreation<br/>
            </Tooltip>
        );
    }

    renderJSInfo(props){
        return(
            <Tooltip {...props}>
                Years of Experience: 1<br/><br/>
                Used in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - This Website<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderSQLInfo(props){
        return(
            <Tooltip {...props}>
                Years of Experience: 1<br/><br/>
                Used in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderReactInfo(props){
        return(
            <Tooltip {...props}>
                Used in Projects:<br/>
                - This Website<br/>
            </Tooltip>
        );
    }

    renderNetworkInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Systems Programming<br/><br/>
                Used in Projects:<br/>
                - Git Recreation<br/>
            </Tooltip>
        );
    }

    renderMultithreadInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Systems Programming<br/><br/>
                Used in Projects:<br/>
                - Git Recreation<br/>
            </Tooltip>
        );
    }

    renderRDInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderAWSInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderMySQLInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderJSPInfo(props){
        return(
            <Tooltip {...props}>
                Taught in Courses:<br/>
                - Principles of Information and Data Management<br/><br/>
                Used in Projects:<br/>
                - Airline Ticket Purchaser (No longer active)<br/>
            </Tooltip>
        );
    }

    renderSeleniumInfo(props){
        return(
            <Tooltip {...props}>
                Used in Projects:<br/>
                - RU-Single<br/>
            </Tooltip>
        );
    }

    render(){
        return(
            <div className='skills-main'>
                <div>
                    <div className='skills-languages'>
                        <h1 className='skills-intro'>Languages</h1>
                        <br></br><br></br>
                        <h1 className='skills-sub'>
                            Java &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderJavaInfo}
                            >
                                <img src={icon} alt='java-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <ProgressBar variant='success' striped now={90}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>
                            Python &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderPythonInfo}
                            >
                                <img src={icon} alt='python-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <ProgressBar variant='success' striped now={85}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>
                            C &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderCInfo}
                            >
                                <img src={icon} alt='c-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <ProgressBar variant='success' striped now={85}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>
                            JavaScript &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderJSInfo}
                            >
                                <img src={icon} alt='js-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <ProgressBar variant='success' striped now={50}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>
                            SQL &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderSQLInfo}
                            >
                                <img src={icon} alt='sql-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <ProgressBar variant='success' striped now={70}/>
                    </div>

                    <div className='skills-tools'>
                        <h1 className='skills-intro'>Tools</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Git</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Visual Studio Code</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Eclipse</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Emacs</h1>
                        <br></br>
                        <h1 className='skills-sub'>- GDB</h1>
                        <br></br>
                        <h1 className='skills-sub'>- SSH</h1>
                        <br></br>
                        <h1 className='skills-sub'>- MySQL Workbench</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Unix Environment</h1>
                    </div>
                </div>

                <div className='skills-tech'>
                    <h1 className='skills-intro'>Technologies</h1>
                    <div className='skills-tech-col'>
                        <h1 className='skills-sub'>
                            - React &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderReactInfo}
                            >
                                <img src={icon} alt='react-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - TCP/IP Socket Programming &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderNetworkInfo}
                            >
                                <img src={icon} alt='network-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - Multi-threading &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderMultithreadInfo}
                            >
                                <img src={icon} alt='multithread-icon'/>
                            </OverlayTrigger>
                        </h1>
                    </div>
                    <div className='skills-tech-col'>
                        <h1 className='skills-sub'>
                            - Relational Database Design &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderRDInfo}
                            >
                                <img src={icon} alt='rd-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - AWS (EC2 and RDS) &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderAWSInfo}
                            >
                                <img src={icon} alt='aws-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - MySQL &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderMySQLInfo}
                            >
                                <img src={icon} alt='mysql-icon'/>
                            </OverlayTrigger>
                        </h1>
                    </div>
                    <div className='skills-tech-col'>
                        <h1 className='skills-sub'>
                            - Java Server Pages (JSP) &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderJSPInfo}
                            >
                                <img src={icon} alt='jsp-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - JDBC &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderJSPInfo}
                            >
                                <img src={icon} alt='jsp-icon'/>
                            </OverlayTrigger>
                        </h1>
                        <br></br>
                        <h1 className='skills-sub'>
                            - Selenium &nbsp;
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={this.renderSeleniumInfo}
                            >
                                <img src={icon} alt='selenium-icon'/>
                            </OverlayTrigger>
                        </h1>
                    </div>
                </div>

            </div>
        );
    }
}
export default Skills;