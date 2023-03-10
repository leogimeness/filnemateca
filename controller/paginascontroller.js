const filmes = require('../database/filmes.json')


const PaginasControllers = {

    index: (req,res) => {

        const filmeFiltrados = filmes.filter( f => f.generos == "drama")

        res.render('index.ejs',{filmes})
    },

    create: (req,res) =>{
        res.render('filme-create.ejs')
    },

    showFilme: (req,res) =>{
        const id = req.params.idDoFilme;

        let filme = filmes.find( f => f.id == id);
        
        if (filme !== undefined){
            res.render('filme.ejs',{filme})
        }
    },
    editFilme:(req,res) =>{
        let id = req.params.id

        let filme = filmes.find(p => p.id == id);

        res.render('filme-edit.ejs',{filme});
    },
    buscarFilme:(req,res) =>{

        let text = req.query.busca

        let censura = req.query.censura
        
        let filtradora = f =>{
            let tituloOk = f.titulo.toLowerCase().includes(text.toLowerCase())
            let censuraOk = f.censura <= censura

            return tituloOk && censuraOk
        }

        let filmeFiltrado = filmes.filter(filtradora)

        res.render('index.ejs',{filmes:filmeFiltrado})

    }
}


module.exports = PaginasControllers


