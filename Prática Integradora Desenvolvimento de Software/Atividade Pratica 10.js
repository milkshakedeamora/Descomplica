/***************************************************************************
 *                                                                         *
 * Implemente o código em JavaScript que aplique 4 (quatro) dos métodos    *
 * apresentados: cos(), max(), min(), pow(), random() ou sqrt().           *
 *                                                                         *
 ***************************************************************************/
function encontrarValorPitagoras(valor1, valor2){
var valor3 = Math.pow(parseInt(valor1),2)+Math.pow(parseInt(valor2),2)
var hipotenusa = Math.sqrt(valor3)
if(Number.isInteger(hipotenusa)){
  return `O valor da HIPOTENUSA é ${hipotenusa}`
}else{
  valor3 = Math.pow(parseInt(Math.max(valor1,valor2)),2) - Math.pow(parseInt(Math.min(valor1,valor2)),2)
  var cateto = Math.sqrt(valor3)
  if(Number.isInteger(cateto)){
    return `O valor do CATETO é ${cateto}`
  }else{
    return `Os valores ${valor1} e ${valor2} não pertencem a um triangulo retangulo `
  }
  
}
};

console.log(encontrarValorPitagoras(3,4))
console.log(encontrarValorPitagoras(3,5))
console.log(encontrarValorPitagoras(7,4))