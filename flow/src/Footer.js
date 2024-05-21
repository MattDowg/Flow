import React, { Component } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import github from './assets/images/github-dark.png';
import nordtheme from './assets/images/nordtheme-dark.png';

export class Footer extends Component {
  render() {
    return (
      <div class="footer">
          <div class="container">
            <div class="row">
              <span class="footer-header">Links</span>
              <div class="col">
                <div class="icon-wrapper">
                  <img class="icon" src={github} alt="github"/>
                </div>
                <a class="footer-link" href="https://github.com/mgibbon2">GitHub Link</a>
              </div>
              <div class="col">
                <div class="icon-wrapper">
                  <img class="icon" src={nordtheme} alt="nordtheme"/>
                </div>
                <a class="footer-link" href="https://www.nordtheme.com/">Nord Color Theme</a>
              </div>
            </div>
            <div class="row">
              <span class="footer-header">Copyright</span>
              <div class="col">
                <p class="copyright">© 2024 Matthew Gibbons</p>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Footer;