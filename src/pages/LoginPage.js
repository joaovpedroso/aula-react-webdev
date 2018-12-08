//Importar o React e o Component
import React, { Component } from 'react';

//Importar o reactstrap - Bootsrap 4 -- import { componente } from 'libName'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Prompt } from 'react-router-dom';

//Importar o validador de login que seta os dados
import { setAutenticate } from '../utils/loginManager';

class LoginPage extends Component {

    state = {
        usuario: '',
        senha: ''
    }

    onLoginClick = () => {

        this.setState(
            {
                usuario: '', senha: ''
            },
            () => {
                //Setando que o usuário está logado
                setAutenticate(true);

                //Direcionar para a pagina /
                this.props.history.push('/');
            }
        );
    }

    onInputChange = event => {
        const { name, value } = event.target;
        //console.log(value);
        this.setState({
            [name]: value
        })
    }

    render() {
        const { usuario, senha } = this.state;
        const bloquearNavegacao = Boolean(usuario || senha);

        return (
            <div>
                <Container>
                    <h1>Login Page</h1>

                    <Prompt
                        when={bloquearNavegacao}
                        message="Deseja sair do login?"
                    />

                    <Form>

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="text" name="usuario" id="usuario" placeholder="Usuário" onChange={this.onInputChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="passwotd" name="senha" id="senha" placeholder="Senha" onChange={this.onInputChange} />
                        </FormGroup>

                        <Button onClick={this.onLoginClick}>
                            Entrar
                        </Button>

                    </Form>
                </Container>
            </div>
        )
    }
}

export default LoginPage;