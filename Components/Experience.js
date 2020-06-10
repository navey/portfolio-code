import React from 'react';

import '../naveyStyle.css';

class Experience extends React.Component{

    render(){
        return(
            <div className='exp-main'>
                <div className='exp-entry'>
                    <h1 className='exp-intro'>Research Assistant</h1>
                    <h1 className='exp-bullet'>Rutgers University Computational Biomedicine Imaging and Modeling Center</h1>
                    <h1 className='exp-bullet'>May 2020 - Present</h1>
                    <hr className='underline-coral'/>
                    <ul>
                        <li>
                            <h1 className='exp-bullet'>Utilized Python to create script to parse through CSV files in order to read and store the data found</h1>
                        </li>
                        <li>
                            <h1 className='exp-bullet'>Utilized JSON libraries to parse though JSON files and update 3000+ entries with data found in CSV files</h1>
                        </li>
                    </ul>
                </div>

                <div className='exp-entry'>
                    <h1 className='exp-intro'>SASHP Peer Tutor</h1>
                    <h1 className='exp-bullet'>Rutgers University School of Arts and Sciences Honors Program</h1>
                    <h1 className='exp-bullet'>September 2019 - Present</h1>
                    <hr className='underline-coral'/>
                    <ul>
                        <li>
                            <h1 className='exp-bullet'>Tutor for Introduction to Computer Science, Topics include:</h1>
                            <ul>
                                <li>
                                    <h1 className='exp-bullet'>Java Programming</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Data Types</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Arrays</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Methods</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Classes and Objects</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Recursion</h1>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h1 className='exp-bullet'>Tutor for Data Structures, Topics include:</h1>
                            <ul>
                                <li>
                                    <h1 className='exp-bullet'>Big O (deriving)</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Arrays</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Linked Lists</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Stacks and Queues</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Trees</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Binary Search Trees</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>AVL Trees</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Hash Tables</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Heaps</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Graphs (including DFS and BFS algorithms)</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Sorting Methods</h1>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <h1 className='exp-bullet'>Tutor for Multivariable Calculus, Topics include:</h1>
                            <ul>
                                <li>
                                    <h1 className='exp-bullet'>Vectors</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Partial Derivatives</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Double and Triple Integrals</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Converting from Cartesian Form to Polar and Spherical</h1>
                                </li>
                                <li>
                                    <h1 className='exp-bullet'>Line and Surface Integrals</h1>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Experience;