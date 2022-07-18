const validator = {
  isValid: (n) => {
    //Matriz de dígitos, convertirlos a numeros dentro de la matriz
    let digits = n.toString().split("").map(Number);
    digits.reverse();
    //Si los dígitos al ser divididos dan de resto 0.
    if (digits.length % 2 === 0) {
      //Mapa de digitos,recreando matriz, si el digito en su resto es igual a 0 entonces lo multiplicamos
      digits = digits.map((digit, idx) => (idx % 2 === 0 ? digit * 2 : digit));
    } else {
      digits = digits.map((digit, idx) => (idx % 2 === 1 ? digit * 2 : digit));
    }
    //Arreglar dígitos dobles para que se sumen.
    digits = digits.map((digit) => (digit > 9 ? digit - 9 : digit));
    // suma de digitos
    const sum = digits.reduce((acc, digit) => (acc += digit), 0);
    return sum % 10 === 0 ? true : false;
  },
  maskify: (n) => {
    let maskifyNumber = n;
    let finalNumber = "";
    for (let i = 0; i < maskifyNumber.length; i++) {
      if (i < maskifyNumber.length - 4) {
        finalNumber = finalNumber + "#";
      } else {
        finalNumber = finalNumber + maskifyNumber[i];
      }
    }
    return finalNumber;
  },
};
export default validator;
