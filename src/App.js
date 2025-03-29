import React, {Component} from 'react';
import Feed from './components/feed';
import Login from './components/Login';

export default class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed:[
                {id: 1, username:"Luan", curtidas: 1, comentarios: 0},
                {id: 2, username:"Mateus", curtidas: 101, comentarios: 21},
                {id: 3, username:"Jose", curtidas: 14, comentarios: 9},
                {id: 4, username:"Ana", curtidas: 85, comentarios: 5},
                {id: 5, username:"Maria", curtidas: 56, comentarios: 12},
            ],
            nome: "Mateus",
            contador: 0,
            hora: "00:00:00",
            status: false
        }

        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
        this.sair = this.sair.bind(this);
    }

    componentDidMount(){

        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);

    }

     aumentar(){
        let state = this.state;
        state.contador += 1;

        this.setState(state)
    }

    diminuir(){
        let state = this.state;

        if (state.contador === 0) {
            return;
        }
        state.contador -= 1  

        this.setState(state)
    }

    sair(){
        this.setState({status: false});
    }

    render() {
        return(
  


                <div>
                    {this.state.status ? this.state.feed.map((item) =>{
                        return(

                    <Feed data={item}></Feed>

                        );
                    }) : 
                    <Login></Login>
                    }

                </div>



        );
    }
}