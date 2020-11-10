const moment = require('moment');

class Utilidades {
    /*
    * Função responsável por formatar a data. Possui 3 parâmetros de entrada:
    * 1 -> data que deseja formatar
    * 2 -> formato da data que deseja formatar
    * 3 -> formato desejado na saída
    */
    static formataData(data, formatoInicial, formatoDesejado){
        const dataFormatada = moment(data, formatoInicial).format(formatoDesejado);
        return dataFormatada;
    }
}

module.exports = Utilidades;