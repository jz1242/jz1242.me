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
        <Jumbotron>
          <img src={img} height="100" id='face' />
          <h1 className="display-3">Hello, World! 
          </h1>
          <p className="lead">My name is Jason Zhang and I'm a Computer Engineering Major at Johns Hopkins University! I find tech fascinating
            and I want to use programming to solve all of my daily needs.
          </p>
          <hr className="my-2" />
          <h3>Computers are my jam! I've got experience in...</h3>
          <br></br>
          <table width='100%'>
            <tr>
              <td>Java</td>
              <td>Python</td>
              <td>C++</td>
              <td>C</td>
            </tr>
            <tr>
              <td>MATLAB</td>
              <td>HTML</td>
              <td>CSS</td>
              <td>JavaScript</td>
            </tr>
            <tr>
              <td>ReactJS</td>
              <td>React-Bootstrap-4</td>
              <td>MeteorJS</td>
              <td>NodeJS</td>
            </tr>
            <tr>
              <td>Python Django</td>
              <td>Scipy</td>
              <td>Numpy</td>
              <td>Pytorch</td>
            </tr>
            <tr>
              <td>NGINX</td>
              <td>Vagrant</td>
              <td>MongoDB</td>
              <td>MySQL</td>
            </tr>
          </table>
          <br></br>
          <a href="https://github.com/jz1242" class="icon fa fa-github fa-3x"> </a>
          <a href="https://www.linkedin.com/in/jason-zhang-182991125/" class="icon fa fa-linkedin fa-3x"></a>
          <a href={resume} class="icon fa fa-file fa-3x"></a>
      </Jumbotron>  
    </div>
    );
  }
}

export default App;
