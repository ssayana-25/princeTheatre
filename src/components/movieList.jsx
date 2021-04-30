import React, { Component } from 'react';
import $ from "jquery";
import axios from 'axios'


class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movies1:{},
            movies2:{},

         }
    }
      
    componentDidMount(){
        this._isMounted = true;
        axios.get('https://challenge.lexicondigital.com.au/api/v2/cinemaworld/movies', {
            headers: {
              'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
            }
          })
        .then(response => {
            if (this._isMounted) {
                this.setState({ movies1: response.data.Movies })
            }
        })
        .catch(error=> {
            console.log(error)
            this.setState({errorMsg: "An error has occured. Please try later"})
            }
        )
        axios.get('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies', {
            headers: {
              'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
            }
          })
        .then(response => {
            if (this._isMounted) {
                this.setState({ movies2: response.data.Movies })
            }     
        })
        .catch(error=> {
            console.log(error)
            this.setState({errorMsg: "An error has occured. Please try later"})
            }
        )
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
 
    render() { 
        const { movies1, movies2, errorMsg} = this.state

        return ( 
            <div className="bg-dark h-100">
                <div className="jumbotron jumbotron-fluid pt-5 pb-5">
                    <div className="container text-center">
                        <h1 className="font-weight-bolder">Prince's Theatre</h1>
                        <h3 className="mt-4 mb-2 font-weight-bold">Classic Movies At Home</h3>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                {
                    movies1.length ? movies1.map( movie1 => {
                        let filmWorldPrice="";
                        let cinemaWorldPrice="";
                        filmWorldPrice=  Object.values(movies2).filter(word => word.Title === movie1.Title);
                        if (this._isMounted && movies2.length){
                            filmWorldPrice=filmWorldPrice[0].Price;
                            cinemaWorldPrice= movie1.Price;
                            if(parseFloat(filmWorldPrice)>parseFloat(cinemaWorldPrice)){
                                cinemaWorldPrice  =cinemaWorldPrice + " low!"
                            }else if(parseFloat(filmWorldPrice)<parseFloat(cinemaWorldPrice)){
                                filmWorldPrice  =filmWorldPrice  + " low!"
                                
                            }
                            return <div key={movie1.ID} className="col-lg-4  col-sm-6 p-3">
                                        <div className="card p-3">
                                        <img src={movie1.Poster}></img>
                                        <div className="card-body">
                                            <div className="pt-2 pb-1 movie-title font-weight-bold">{movie1.Title}</div> 
                                            <div className="fwPrice row"><div className="col-6">Film World:</div><div className="col-6">{filmWorldPrice}</div></div>  
                                            <div className="cwPrice row"><span className="col-6">Cinema World:</span><span className="col-6">{cinemaWorldPrice}</span></div>
                                        </div>
                                        </div>
                                    </div>
                        }
                    }): null  
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
                </div>
                </div>
            </div>
         );
    }
}
 
export default MovieList;