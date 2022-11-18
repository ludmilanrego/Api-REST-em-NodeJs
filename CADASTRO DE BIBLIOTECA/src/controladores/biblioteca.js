let { idLivro, livros } = require('../bancodedados');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
}

const procurarLivro = (req, res) => {
    const { id } = req.params;
    if (id > 0 && id < 1000) {
        const livroId = livros.find((livro) => {
            return livro.id === Number(id);
        })
        if (!livroId) {
            return res.status(404).json({ "mensagem": "livro não foi encontrado" });
        }
        else {
            return res.send(livroId);
        }
    }
    else {
        res.status(404).json({ "mensagem": "o ID deve ser um número válido" });
    }
}

const cadastrarLivro = (req, res) => {
    let { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(404).json({ "mensagem": "o titulo é obrigatório" })
    }
    if (!autor) {
        return res.status(404).json({ "mensagem": "o autor é obrigatório" })
    }
    if (!ano) {
        return res.status(404).json({ "mensagem": "o ano é obrigatório" })
    }
    if (!numPaginas) {
        return res.status(404).json({ "mensagem": "o número de paginas é obrigatório" })
    }

    const livro = {
        id: ++idLivro,
        titulo: titulo,
        autor: autor,
        ano: ano,
        numPaginas: numPaginas
    }
    livros.push(livro);
    return res.status(201).json(livro);
}

const sustituirLivro = (req, res) => {
    let { titulo, autor, ano, numPaginas } = req.body;

    const { id } = req.params;
    const livroId = livros.find((livro) => {
        return livro.id === Number(id);
    })
    if (!livroId) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." });
    }

    if (!titulo) {
        return res.status(404).json({ "mensagem": "o titulo é obrigatório" })
    }
    if (!autor) {
        return res.status(404).json({ "mensagem": "o autor é obrigatório" })
    }
    if (!ano) {
        return res.status(404).json({ "mensagem": "o ano é obrigatório" })
    }
    if (!numPaginas) {
        return res.status(404).json({ "mensagem": "o número de paginas é obrigatório" })
    }

    livroId.titulo = titulo;
    livroId.autor = autor;
    livroId.ano = ano;
    livroId.numPaginas = numPaginas;

    return res.status(201).json({ "mensagem": "Livro substituído." });
}

const atualizarLivro = (req, res) => {
    let { titulo, autor, ano, numPaginas } = req.body;

    const { id } = req.params;
    const livroId = livros.find((livro) => {
        return livro.id === Number(id);
    })
    if (!livroId) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser alterado para o ID informado." });
    }

    if (titulo) {
        livroId.titulo = titulo;
    }
    if (autor) {
        livroId.autor = autor;
    }
    if (ano) {
        livroId.ano = ano;
    }
    if (numPaginas) {
        livroId.numPaginas = numPaginas;
    }



    return res.status(200).json({ "mensagem": "Livro alterado." });
}

const excluirLivro = (req, res) => {
    const { id } = req.params;
    const livroId = livros.find((livro) => {
        return livro.id === Number(id);
    })
    if (!livroId) {
        return res.status(404).json({ "mensagem": "Não existe livro cadastrado para o ID informado." });
    }
    livros = livros.filter((livro) => {
        return livro.id !== Number(id);

    })
    return res.status(200).json({ "mensagem": "Livro removido." });

}

module.exports = {
    listarLivros,
    procurarLivro,
    cadastrarLivro,
    sustituirLivro,
    atualizarLivro,
    excluirLivro
}