import React, { Component } from 'react';
import MovieCall from './movieCall';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div data-testid="moviesListT" className="bg-dark h-100">
                <div className="jumbotron jumbotron-fluid pt-5 pb-5">
                    <div className="container text-center">
                        <h1 className="font-weight-bolder">Prince's Theatre</h1>
                        <h3 className="mt-4 mb-2 font-weight-bold">Classic Movies At Home</h3>
                        <div>Lorem ips dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                             incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                    </div>
                </div>
                <div className="container">
                    <MovieCall/>
                </div>
            </div>
         );
    }
}
 
export default Header;
         
        