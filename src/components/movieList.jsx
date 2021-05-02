import React, { Component } from 'react';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render()
     {      let website2Price= this.props.website2Price;
            let website1Price= this.props.website1Price;
        if(parseFloat(website2Price)>parseFloat(website1Price)){
            website1Price  =website1Price + " low!"
        }else if(parseFloat(website2Price)<parseFloat(website1Price)){
            website2Price  =website2Price  + " low!"
            
        }
        return <div className="card p-3">
                <img src={this.props.poster} alt={this.props.title}></img>
                <div className="card-body">
                    <div className="pt-2 pb-1 movie-title font-weight-bold">{this.props.title}</div> 
                    <div className="fwPrice row"><div className="col-6">{this.props.website2}:</div><div className="col-6">{website2Price}</div></div>  
                    <div className="cwPrice row"><span className="col-6">{this.props.website1}:</span><span className="col-6">{website1Price}</span></div>
                </div>
                </div>
            
    }
}
 
export default MovieList;