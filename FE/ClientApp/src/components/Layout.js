import React, { Component } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
      <NavMenu></NavMenu> 
        <Container tag="main">
          {this.props.children}
        </Container>

        
        <Footer></Footer>
        
      </div>
    );
  }
}
