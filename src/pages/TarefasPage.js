import React, { Component } from 'react';

/* Importar o reactstrap - Bootsrap 4 -- import { componente } from 'libName'*/
import { Nav, NavItem } from 'reactstrap';

//Importar link e Route do React Router Dom para criar links de navegação
import { Link, Route } from 'react-router-dom';

const TAREFAS = [
    {
        id: 1,
        titulo: 'Aprenda Javascript',
        descricao: 'Aprenda Javascript Lorem Impsum Dolor Sit Amet, Consecteu Inibulis...'
    },
    {
        id: 2,
        titulo: 'PHP + Javascript',
        descricao: 'PHP + Javascript Lorem Impsum Dolor Sit Amet, Consecteu Inibulis...'
    },
    {
        id: 3,
        titulo: 'Avaliação de Conhecimento JS + PHP',
        descricao: 'Avaliação de Conhecimento JS + PHP Lorem Impsum Dolor Sit Amet, Consecteu Inibulis...'
    }
];


class TarefasPage extends Component {

    render() {

        const tarefasLink = TAREFAS.map((tarefa, index) => {
            return (
                <NavItem key={tarefa.id}>
                    <Link className="nav-link" to={'/tarefas/' + tarefa.id}>{tarefa.titulo}</Link>
                </NavItem>
            )
        })

        return (
            <div>
                <h1>TarefasPage</h1>

                <Nav>
                    {tarefasLink}
                </Nav>


                <Route
                    path="/tarefas/:tarefaId"
                    render={props => {

                        //Recebe o id da tarefa passado pela URL
                        const tarefaId = props.match.params.tarefaId;
                        const tarefa = TAREFAS.find(tar => tar.id == tarefaId);

                        return (
                            <div>
                                {tarefa.descricao}
                            </div>
                        )
                    }
                    }
                />

            </div>
        )
    }
}

export default TarefasPage;