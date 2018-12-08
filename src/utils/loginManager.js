//Valida se o usuário está logado ou não

let AUTENTICADO = false;

export const isAutenticate = () => {
    //Retorna se o usuário está autenticado ou não
    return AUTENTICADO;
}

export const setAutenticate = (aut) => {
    //Realizar a lógica de autenticação do usuário
    AUTENTICADO = aut;
}