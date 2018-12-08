import React, { Component } from 'react';

//Importar o reactstrap - Bootsrap 4 -- import { componente } from 'libName'
import { Alert, Button } from 'reactstrap';
import Artigo from '../components/Artigo';
//import Contador from '../components/Contador';

class HomePage extends Component {

    render() {
        return (
            <div>
                <Alert color="info">Alert Component ReacStrap - Info</Alert>
                <Alert color="warning">Alert Component ReacStrap - Warning </Alert>
                <Button color="success">Component Button reactstrap - success</Button>


                <Artigo
                    nome="Douglas"
                    texto="Programação Web com React JS"
                />

                <Artigo
                    nome="Burnes"
                    texto="Programação Web com PHP"
                />

                {/* <Contador tempo={500} numero={50} /> */}
            </div>
        )
    }
}

export default HomePage;