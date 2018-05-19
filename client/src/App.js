import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Parallax from './Components/parallax'
import Contact from './Components/contact'
import About from './Components/about'
import Modal from './Components/modal'
import Projects from './Components/projects'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nightShade: false,
      isOpen: false,
    }
  }

  componentDidMount() {
    window.onscroll = () => {
      const newScrollHeight = Math.ceil(window.scrollY / 50) * 50;
      if (this.state.currentScrollHeight != newScrollHeight) {
        this.setState({ currentScrollHeight: newScrollHeight })
      }
    }
  }
  handleNightShade = e => {
    this.setState({
      nightShade: !this.state.nightShade
    })
  }
  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    const opacity = Math.min(100 / this.state.currentScrollHeight, 1)
    const { nightShade } = this.state
    return (
      <div className={'night' + nightShade}>
        <div className='main_app_page_top parallax'>
          {/* <nav className='nav_bar'> */}
            {/* <Link to='/'>
              Home
        </Link>
            {' | '}
            <Link to='/projects'>
              Projects
        </Link>
            {' | '}
            <Link to='/contact'>
              Contact
        </Link> */}
            {/* <label className='toggle_component'>
              <i class="far fa-sun"></i>
              {' '}
              <label class="switch">
                <input type="checkbox"
                  onClick={this.handleNightShade}
                />
                <span class="slider round"></span>
              </label>
              {'   '}
              <i class="fas fa-moon"></i>
            </label>
          </nav> */}

          <div className='main_header title'>
              Full Stack Web Developer
          </div>
          <div className='intro'>
            Passionate about problem solving creatively
            <br/>
            Passionate about creative problem solving
        </div>
          <div>
          </div>
        </div>
        <div >
          <div className='main_app_page_bottom'>
            <div className=''>
              <Route exact path='/' component={About}></Route>
            </div>
          </div>
        </div>
        <div className='projects_page'>
          <Route exact path='/' component={Projects}></Route>
        </div>
        <div className='footer'>
        </div>
        <Route exact path='/contact' component={Contact}></Route>
        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          <br />
        </Modal>
      </div>
    );
  }
}

export default App;
