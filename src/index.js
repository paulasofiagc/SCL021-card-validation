import validator from "./validator.js";
//Create the event to my "validateCard" bttn to generate the 'validator.js' instuction
const validateBottom = document.getElementById("validateCard");
//creando una función para traer el input N° de tarjeta y traer input Nombre.
function validateCard() {
  const numberCard = document.getElementById("numberCC").value;

  const name = document.getElementById("Name").value;
  // Condiciones bajo la cual se maneja la función
  //Si el largo total es menor o igual a = no permite continuar
  if (numberCard.length <= 0) {
    alert("Por favor ingrese un número de tarjeta.");
    //Si la funcion isValid es verdadera, se mostrará un alert aprobando.
  } else if (validator.isValid(numberCard) === true) {
    const mask = validator.maskify(numberCard);
    alert(
      `${name} la tarjeta ${mask} es válida. ¡Tu reservación está lista! ✔.`
    );
    // si la función isValid es false, la tarjeta es inválida.
  } else {
    const mask = validator.maskify(numberCard);
    alert(`${name} la tarjeta ${mask} es inválida.`);
  }
}
//Al hacer click, hace correr la función.
validateBottom.addEventListener("click", validateCard);
