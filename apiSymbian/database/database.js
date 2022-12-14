//IMPORTAÇÃO DO MÓDULO DO SEQUELIZE 
const Sequelize = require('sequelize');

/************************************************************************
CRIAÇÃO DE UMA INSTÂNCIA DO SEQUELI E CONEXÃO COM O BANCO DE DADOS MYSQL
 PARAMETROS DE CONEXÃO COM O BANCO DE DADOS:
 1 - NOME DO BANCO DE DADOS - STRING
 2 - USUÁRIO DO BANCO DE DADOS - STRING
 3 - SENHA DO BANCO DE DADOS - STRING
 4 - OBJETO JSON - DETERMINA AS CONFIGURAÇÕES DE USO DO BANCO DE DADOS:
       4.1 - LOCAL DA INSTÂNCIA DO BANCO DE DADOS (localhost)
       4.2 - TIPO DO BANCO DE DADOS (MySQL)
       4.3 - DEFINIÇÃO DO FUSO HORÁRIO DO BANCO DE DADOS
 ***********************************************************************/

const connection = new Sequelize(
    'symbiandb',
    'root',
    '12345678',
    {
        host:'localhost',
        dialect:'mysql',
        timezone:'-03:00'
    }
);

module.exports = connection;