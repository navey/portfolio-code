import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

import '../naveyStyle.css';

class Skills extends React.Component{
    render(){
        return(
            <div className='skills-main'>
                <div>
                    <div className='skills-languages'>
                        <h1 className='skills-intro'>Languages</h1>
                        <br></br><br></br>
                        <h1 className='skills-sub'>Java</h1>
                        <ProgressBar variant='success' striped now={80} label={'80%'}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>Python</h1>
                        <ProgressBar variant='success' striped now={80} label={'80%'}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>C</h1>
                        <ProgressBar variant='success' striped now={80} label={'80%'}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>JavaScript</h1>
                        <ProgressBar variant='success' striped now={50} label={'50%'}/>
                        <br></br><br></br>
                        <h1 className='skills-sub'>SQL</h1>
                        <ProgressBar variant='success' striped now={70} label={'70%'}/>
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
                        <h1 className='skills-sub'>- React</h1>
                        <br></br>
                        <h1 className='skills-sub'>- TCP/IP Socket Programming</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Multi-threading</h1>
                    </div>
                    <div className='skills-tech-col'>
                        <h1 className='skills-sub'>- Relational Database Design</h1>
                        <br></br>
                        <h1 className='skills-sub'>- AWS (EC2 and RDS)</h1>
                        <br></br>
                        <h1 className='skills-sub'>- MySQL</h1>
                    </div>
                    <div className='skills-tech-col'>
                        <h1 className='skills-sub'>- Java Server Pages (JSP)</h1>
                        <br></br>
                        <h1 className='skills-sub'>- JDBC</h1>
                        <br></br>
                        <h1 className='skills-sub'>- Selenium</h1>
                    </div>
                </div>

            </div>
        );
    }
}
export default Skills;