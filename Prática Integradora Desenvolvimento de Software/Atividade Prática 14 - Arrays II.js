/***************************************************************************
 *                                                                         *
 * Implemente um código em JavaScript em que uma matriz que contenha 4     *
 * linhas e 5 colunas apresente o seguinte formato:                        *
 *                                                                         *
 *  Na primeira linha os 5 primeiros múltiplos do número 2.                *
 *                                                                         *
 *  Na segunda linha os 5 primeiros múltiplos do número 3.                 *
 *                                                                         *
 *  Na terceira linha os 5 primeiros múltiplos do númeSro 4.                *
 *                                                                         *
 *  Na quarta linha os 5 primeiros múltiplos do número 5.                  *
 *                                                                         *
 ***************************************************************************/

matriz = []
for(var i =0; i <4; i++){ 
    matriz[i] = []; 
    for(var j = 0; j < 6; j++){
        matriz[i][j] = (i+2)*(j+1)
    
    }

}
