// Importando express
const express = require('express');
const admController = require('./controller/admController');
const PaginasControllers = require('./controller/paginascontroller')

// Criando router
const router = express.Router();

// configurar uma rota get '/'

router.get('/',PaginasControllers.index)

//Configure uma rota get para /filme/create e encaminhe essa requisição para FilmesController.create

router.get('/filme/create',PaginasControllers.create)

router.get("/filme/:idDoFilme",PaginasControllers.showFilme)

router.get('/adm/filmes/:id/edit',PaginasControllers.editFilme);

router.get('/busca',PaginasControllers.buscarFilme);


router.get('/adm/login',admController.showLogin);



// Exportando router
module.exports = router;