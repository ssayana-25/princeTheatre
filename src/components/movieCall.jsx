import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './movieList.jsx';


class MovieCall extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            moviesCw:{},
            moviesFw:{},

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
                this.setState({ moviesCw: response.data.Movies })
            }
        })
        .catch(error=> {
            this.setState({errorMsg: "Oops! Something is wrong. Please try again."})
            }
        )
        axios.get('https://challenge.lexicondigital.com.au/api/v2/filmworld/movies', {
            headers: {
              'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7'
            }
          })
        .then(response => {
            if (this._isMounted) {
                this.setState({ moviesFw: response.data.Movies })
            }     
        })
        .catch(error=> {
            this.setState({errorMsg: "Oops! Something is wrong. Please try again."})
            }
        )
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
 
    render() { 
        const { moviesCw, moviesFw, errorMsg} = this.state

        return ( 
   
                 <div className="row">
                {
                    moviesCw.length ? moviesCw.map( movieCw => {
                        let filmWorldPrice="";
                        let cinemaWorldPrice="";
                        filmWorldPrice=  Object.values(moviesFw).filter(word => word.Title === movieCw.Title);
                        if (this._isMounted && moviesFw.length){
                            filmWorldPrice=filmWorldPrice[0].Price;
                            cinemaWorldPrice= movieCw.Price;
                            return <div key={movieCw.ID} className="col-lg-4  col-sm-6 p-3">
                                        <MovieList poster={movieCw.Poster} title={movieCw.Title} 
                                        website1Price={cinemaWorldPrice} website2Price={filmWorldPrice} website1="Cinema World" website2="Film World"/>
                                    </div>
                        }
                    }): null  
                }
                { errorMsg ? <h4 className="main-container text-center container text-white mt-3">{errorMsg}</h4> : null }
                </div>
         );
    }
}
 
export default MovieCall;