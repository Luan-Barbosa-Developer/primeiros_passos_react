import React, {Component} from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {nome: '',
                   email: '',
                   password: '',
                   sexo: ''
            }
        }

        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e){
        const form = this.state.form;
        
        form[e.target.name] = e.target.value;
        this.setState({form: form})

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h2>Login</h2>

                <form onSubmit={this.cadastrar}>

                    Nome:
                    <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm}/>
                    <br/>

                    Email:
                    <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm}/>
                    <br/>

                    senha:
                    <input type="password" name="password" value={this.state.form.password} onChange={this.dadosForm}/>
                    <br/>

                    Sexo:
                    <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                        <option value='Masculino'>Masculino</option>
                        <option value='Feminino'>Feminino</option>
                    </select>
                    <br/>
                    
                    <button type="submit"> cadastrar</button>

                </form>

                {`${this.state.form.nome} \n
                ${this.state.form.email} \n
                ${this.state.form.password} \n
                ${this.state.form.sexo}`}
            </div>
        );
    }
}