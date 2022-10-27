//IMPORTA O MÓDULO DO EXPRESS
const express = require('express');

const pacienteModel = require('../model/pacienteModel');

//CONFIGURAR RECURSO DE ROTEAMENTO (Router)
const router = express.Router();

//ROTA DE LISTAGEM DE PACIENTES
router.get('/listarPacientes', (req, res)=>{

    // res.send('ROTA DE LISTAGEM DE PACIENTES');
    pacienteModel.findAll()
    .then(
        (pacientes)=>{
            res.status(200).send(pacientes);
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MENSAGEM":error});
        }
    );

});

//ROTA DE LISTAGEM DE PACIENTES POR CÓDIGO DO PACIENTE
router.get('/listarPaciente/:id_paciente', (req,  res)=>{

    let { id_paciente } = req.params;

    pacienteModel.findAll({
        where:{
            id_paciente
        }
    })
    .then(
        (paciente)=>{
            res.status(200).send(paciente);
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MENSAGEM":error});
        }
    );

    /** POR CHAVE PRIMÁRIA */
    // pacienteModel.findByPk(id_paciente)
    // .then(
    //     (paciente)=>{
    //         res.status(200).send(paciente);
    //     }
    // )
    // .catch(
    //     (error)=>{
    //         res.status(500).json({"MENSAGEM":error});
    //     }
    // );

});

//ROTA DE CADASTRO DE PACIENTES
router.post('/cadastrarPaciente', (req, res)=>{
    
    // console.log(req.body);
    // res.send('ROTA DE CADASTRO DE PACIENTES');

    let { nome, telefone, celular, email, nome_responsavel, telefone_responsavel } = req.body;
    // console.log(req.body);
    // res.status(200);

    // Montar a insert na tabela
    pacienteModel.create({
        nome,
        telefone,
        celular,
        email,
        nome_responsavel,
        telefone_responsavel
    }).then(
        ()=>{
            res.status(201).json({"MENSAGEM":"PACIENTE CADASTRADO COM SUCESSO!"});
        }
    ).catch(
        (error)=>{
            res.status(500).json({"MENSAGEM":error});
        }
    );

});

//ROTA DE ALTERAÇÃO DE PACIENTES
router.put('/editarPaciente', (req, res)=>{
    // res.send('ROTA DE EDIÇÃO DE PACIENTES');

    let { telefone, celular, email, id_paciente } = req.body;

    pacienteModel.update(
        {
        telefone,
        celular,
        email
        },
        {where:{id_paciente}}
    )
    .then(
        ()=>{
            res.status(200).json({"MENSAGEM":"PACIENTE EDITADO COM SUCESSO."});
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MENSAGEM":error});
        }
    );

});

//ROTA DE EXCLUSÃO DE PACIENTES
router.delete('/excluirPacientes/:id_paciente', (req, res)=>{
    
    // res.send('ROTA DE EXCLUIR PACIENTES');

    let {id_paciente} = req.params;

    pacienteModel.destroy({
        where:{id_paciente}
    })
    .then(
        ()=>{
            res.status(200).json({"MENSAGEM":"PACIENTE EXCLUÍDO COM SUCESSO."});
        }
    )
    .catch(
        (error)=>{
            res.status(500).json({"MENSAGEM":error});
        }
    );

});

pacienteModel.sync({force:true});

module.exports = router;