import express, {Request, Response, NextFunction} from 'express';

import statusRoute from './routes/status.route';

import usersRoute from './routes/users.route';
import errorHandler from './middlewares/error_handler_middleware';

const app = express();

//Configurações da aplicação.

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// Configurações de rotas.

app.use(statusRoute);

app.use(usersRoute);


// Configuração dos Hhandlers de Erro


app.use(errorHandler);



//Inicialização do servidor.

app.listen(3000, () => {

        console.log('Aplicação executando na porta 3000');

})

