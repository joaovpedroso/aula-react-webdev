import React from 'react';

class Contador extends React.Component {

    static defaultProps = {
        tempo: 1000,
        numero: 0
    }

    constructor(props) {
        super(props);

        //Valores que vao ser renderizados na tela
        //Exemplo lista de usuários -> 1º Realizar requisicao API/ 2º Guardar no State/ 3º Renderizar
        this.state = {
            numero: props.numero
        }
    }

    //Local ideal para realizar chamadas a API
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(
                {
                    numero: this.state.numero + 1
                }
            )
        }, this.props.tempo);
    }

    //Verifica quando algo foi alterado possui acesso ao valor anterior e ao novo valor
    componentDidUpdate(oldProps, oldState){
        console.log('componentDidUpdate');
        console.log('Numero anterior: '+oldState.numero);
        console.log('Numero atual: '+this.state.numero);
    }

    //Interromper processo em adamento no background
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <p>{this.state.numero}</p>
        );
    }

}

export default Contador;
