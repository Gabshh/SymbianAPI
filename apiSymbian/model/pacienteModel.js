//IMPORTAÇÃO DO SEQUELIZE
const Sequelize = require('sequelize');

//IMPORTAÇÃO DA CONEXÃO DO BANDO DE DADOS
const connection = require('../database/database');

/**************************************************
 REPRESENTAÇÃO DO MODELO DE DADOS tbl_paciente
 PARÂMETROS DO MÉTODO define():
    1 - NOME DA TABELA
    2 - OBJETO JSON CONTENDO:
                        NOME DO CAMPO
                        TIPO DE DADO
                        REGRAS DO CAMPO
 *************************************************/

const PacienteModel = connection.define(
    'tbl_paciente',
    {
        id_paciente:{
            type: Sequelize.INTEGER(10),
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type: Sequelize.STRING(500),
            allowNull:false
        },
        telefone:{
            type: Sequelize.STRING(10),
            allowNull:true
        },
        celular:{
            type: Sequelize.STRING(11),
            allowNull:false
        },
        email:{
            type: Sequelize.STRING(100),
            allowNull:false
        },
        nome_responsavel:{
            type: Sequelize.STRING(500),
            allowNull:true
        },
        telefone_responsavel:{
            type: Sequelize.STRING(10),
            allowNull:true
        },
    }
);

module.exports = PacienteModel;