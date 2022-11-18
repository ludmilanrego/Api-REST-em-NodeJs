
let { idAluno, alunos, cursosDisponiveis } = require('../src/bancodedados');

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
};

const procurarAluno = (req, res) => {
    const { id } = req.params;
    if (id > 0 && id < 100) {
        const alunoId = alunos.find((aluno) => {
            return aluno.id === Number(id);
        })
        if (!alunoId) {
            res.status(404).json("mensagem": "o aluno não foi encontrado");
        }
        else {
            res.send(alunoId);
        }
    }
    else {
        res.status(404).json("mensagem": "o ID deve ser um número válido");
    }
}

const cadastrarAluno = (req, res) => {
    let { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(404).json({ "mensagem": "o nome é obrigatório" })
    }
    if (!sobrenome) {
        return res.status(404).json({ "mensagem": "o sobrenome é obrigatório" })
    }
    if (!idade) {
        return res.status(404).json({ "mensagem": "a idade é obrigatório" })
    }
    if (idade < 18) {
        return res.status(404).json({ "mensagem": "a idade mínima é 18 anos" })
    }
    if (!curso) {
        return res.status(404).json({ "mensagem": "o curso é obrigatório" })
    }
    if (!cursosDisponiveis.some((cursoDisponivel) => {
        return curso === cursoDisponivel;
    })) {
        return res.status(404).json({ "mensagem": "curso não disponível" })
    }

    const aluno = {
        id: ++idAluno,
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        curso: curso
    }
    alunos.push(aluno);
    return res.status(201).json(aluno);
}

const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    if (idade < 18) {
        return res.status(404).json({ "mensagem": "a idade mínima é 18 anos" })
    }

    if (!cursosDisponiveis.some((cursoDisponivel) => {
        return curso === cursoDisponivel;
    })) {
        return res.status(404).json({ "mensagem": "curso não disponível" })
    }

    const aluno = cursosDisponiveis.find((aluno) => {
        return aluno.id === Number(id);
    })

    aluno.nome = nome;
    aluno.sobrenome = sobrenome;
    aluno.idade = idade;
    aluno.curso = curso;
    return res.status(201).json(aluno);
}

const atualizarCurso = (req, res) => {
    const { id } = req.params;
    const { curso } = req.body;

    if (cursosDisponiveis.some((cursoDisponivel) => {
        return curso === cursoDisponivel;
    })) {
        const aluno = alunos.find((aluno) => {
            return aluno.id === Number(id);
        })
        aluno.curso = curso;
        return res.status(201).json(aluno);
    }
    else {
        return res.status(404).json({ "mensagem": "curso não disponível" });
    }

}

const excluirAluno = (req, res) => {
    const { id } = req.params;

    const aluno = alunos.find((aluno) => {
        return aluno.id = Number(id);
    });
    if (!aluno) {
        return res.status(404).json({ "mensagem": "aluno não cadastrado" });
    }
    alunos = alunos.filter((aluno) => {
        return aluno.id !== Number(id);

    })
    return res.status(200).json(alunos);

}
module.exports = {
    listarAlunos,
    procurarAluno,
    cadastrarAluno,
    atualizarAluno,
    atualizarCurso,
    excluirAluno
}

