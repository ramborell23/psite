import React, { Component } from 'react';

class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            coantactName: '',
            coantactEmail: '',
        }
    }

    render() {
        return (
            <div>
                <div className='proj_headline'>Featured<br/>
                Projects</div>
                <br />
                
                <br />
                <br />
                    <span className='project_name'><h2>Elevate</h2></span>
                <div className='project1_div'>
                    <div>
                        <img className='project_picture' src='http://i67.tinypic.com/2s9f5ma.png' alt='' />
                    </div>
                    <div className='project_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum sit amet risus a purus viverra pharetra et at neque.
                        Maecenas pulvinar neque vel mi tristique interdum. Donec euismod euismod sagittis.
                </div>
                <br/>
                <br/>
                </div>
                <div className='proj_seperator'>
                
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h2>Project 2</h2>
                <div className='project2_div'>
                    <div>
                        <img className='project_picture' src='http://i67.tinypic.com/2s9f5ma.png' alt='' />
                    </div>
                    <div className='project_description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Qq
                        Vestibulum sit amet risus a purus viverra pharetra et at neque.
                        Maecenas pulvinar neque vel mi tristique interdum. Donec euismod euismod sagittis.
                </div>
                <br/>
                <br/>
                </div>
                <br />
                <br />
                <br />
            </div>
        )
    }
}
export default Projects