import React, { Component } from 'react';
import img from './face.jpg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import resume from './JasonZhangResume.pdf';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="App">
        <div className="personalpic">
          <img src={img} height="300" id='face' />
          <div class="overlay">
            <div class="text">Jason Zhang</div>
          </div>
        </div>
        <Jumbotron>
          <h1>
            Welcome to my site!
          </h1>
          <hr className="my-2" />
          <br></br>
          <p className="lead">I'm a Computer Science major at Johns Hopkins University. I have interests in Machine Learning, Distributed Systems/Networking,
          <br></br>photography, gaming, and cooking!
          </p>
          <br></br>
          <br></br>
          <h4>Links to see more about me!</h4>
          <a href="https://github.com/jz1242" class="icon fa fa-github fa-2x"> </a>
          <a href="https://www.linkedin.com/in/jason-zhang-182991125/" class="icon fa fa-linkedin fa-2x"></a>
          <a href="https://www.instagram.com/riceasianman/?hl=en" class="icon fa fa-instagram fa-2x"></a>
          <a href={resume} class="icon fa fa-file fa-2x"></a>
      </Jumbotron>  
    </div>
    );
  }
}

export default App;
