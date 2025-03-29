import React, {Component} from "react";

export default class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Nome: {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h3> Idade: {this.props.idade} anos</h3> 
            </div>
        )
    }
}