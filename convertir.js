
/**
 * Convertir RGB a Hexa
 * 5. Escriba una función convertHexaToRgb que convierta el color hexa a rgb y
devuelva un color rgb.
 */
//  hexa           return
// #FF5733  ==> rgb(255, 87, 51)
function convertHexaToRgb(hexa) {
  var red = parseInt(hexa[1] + hexa[2], 16);
  var green = parseInt(hexa[3] + hexa[4], 16);
  var blue = parseInt(hexa[5] + hexa[6], 16);
  console.log(red, green, blue);


  // return rgb; // 'rgb(255,255,255)'
}

convertHexaToRgb('#FF5733');


function convertHexaToRgb2(hexa) {
  let valores = "0123456789ABCDEF";
  // 0123456789101112131415
  let valor1;
  let valor2;
  for (let i = 0; i < valores.length; i++) {
    if (hexa[1] === valores[i]) {
      valor1 = i;
    }
    if (hexa[2] === valores[i]) {
      valor2 = i;
    }
  }

  let red = valor1 * 16 + Number(valor2);
  let green = hexa[3] * 16 + Number(hexa[4]);
  let blue = hexa[5] * 16 + Number(hexa[6]);

  console.log(red, green, blue);
}

convertHexaToRgb2('#FF5733');

/**
 * Ejemplo para cargar una imagen en un contenedor
 */

let urlimagen = 'https://previews.123rf.com/images/shushanto/shushanto2209/shushanto220900703/191842443-imagen-de-fondo-de-la-ilustraci%C3%B3n-del-arte-conceptual-de-la-destrucci%C3%B3n-de-los-planetas.jpg';
document.getElementById('imagen').innerHTML = `<img src="${urlimagen}" >`

if (valor == 1){
  urlimagen = 'carta1'
}