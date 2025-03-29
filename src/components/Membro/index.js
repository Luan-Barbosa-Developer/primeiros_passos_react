import React, {Component} from 'react';
import Sobre from '../Sobre';

export default class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar(){
        this.setState({nome: 'Mateus'});


            
    }

    render(){
        return(
            <div>
                <button onClick={this.entrar}>entrar</button>
                <button onClick={this.props.status}>sair</button>
                <Sobre nome={this.state.nome} cargo={this.props.cargo} idade={this.props.idade}></Sobre>

            </div>
        );
    }
}