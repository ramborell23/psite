import React, { Component } from 'react';

const about = () => {
    return (
        <div className='about_page'>
        <div className='proj_headline'>
            <label className='proj_headline2'>About Me</label>
        </div>
            <div className='about_content'>
                <div className='about_skills'>
                    Skills<br/>
                  
                    Front-end<br/>
                    CSS3, Javascript, ES6, React, ThreeJS, DataViz<br/>
                    Back-end<br/>
                    NodeJS, PHP, APIs, Sysadmin, Devops, NoSQL<br/>
                    
                   
                    
                </div>
                <div className='about_section'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum sit amet risus a purus viverra pharetra et at neque.
                    Maecenas pulvinar neque vel mi tristique interdum. Donec euismod euismod sagittis.
                    Nam consectetur malesuada luctus. Donec interdum massa a lorem aliquet elementum.
                    Quisque tincidunt tortor turpis, at dapibus est rutrum non. Nunc tincidunt nulla sem, varius tempor nisl consectetur sit amet.
                    Donec rutrum magna velit, non egestas velit efficitur non. Vestibulum vehicula lacinia fringilla.
                </div>
            </div>
            <nav className='prof_links'>
                <a href='http://www.ufc.com/event/fight-night-santiago-2018?f1=Veronica-Macedo&f2=Andrea-Lee' alt=''>Github</a>
                <a href='http://www.ufc.com/event/fight-night-santiago-2018?f1=Veronica-Macedo&f2=Andrea-Lee' alt=''>LinkedIn</a>
                <a href='http://www.ufc.com/event/fight-night-santiago-2018?f1=Veronica-Macedo&f2=Andrea-Lee' alt=''>Contact</a>
            </nav>
        </div>
    )
}
export default about