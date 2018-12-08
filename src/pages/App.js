import React, { Component } from 'react';
import HomePage from './HomePage';
import TarefasPage from './TarefasPage';
import SobrePage from './SobrePage';
import LoginPage from './LoginPage';
import Menu from '../components/Menu';

//Importar o reactstrap - Bootsrap 4 -- import { componente } from 'libName'
import { Container, Nav, NavItem } from 'reactstrap';
import './App.css';

import {
  //BrowserRouter -> Utilizado para url sem o # -> Interpretado por diretório por alguns servidores,
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

//Importando validação de rotas
import PrivateRoute from '../components/PrivateRoute';

class App extends Component {

  render() {
    return (
      // <BrowserRouter>
      <HashRouter>
        <Container>

          <Menu />

          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* Validando a rota Tarefas pelo PrivateRoute -> Validador de rotas criado em components */}
            <PrivateRoute path="/tarefas" component={TarefasPage}></PrivateRoute>
            <Route path="/sobre" component={SobrePage} />
            <Route path="/login" component={LoginPage} />
            <Route render={()=>{
              return(
                <div>
                  <h1>Oops!! Página Não encontrada!</h1>
                </div>
              )
            }} />
          </Switch>

        </Container>
      </HashRouter>
      //</BrowserRouter>
    );
  }
}

export default App;