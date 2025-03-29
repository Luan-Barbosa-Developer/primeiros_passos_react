import React, {Component} from "react";

export default class Feed extends Component{



    render(){
        return(
                <div key={this.props.data.id}>
                    <h3>{this.props.data.username}</h3>
                    <a>{this.props.data.curtidas} {this.props.data.curtidas === 1 ? 'curtida' : 'curtidas'}  </a>
                    <a>{this.props.data.comentarios} {this.props.data.comentarios === 1 ? 'comentario' : 'comentarios'}</a>
                    <hr></hr>
                </div> 
        )
    }
}