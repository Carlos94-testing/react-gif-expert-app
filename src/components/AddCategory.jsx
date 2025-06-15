import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    //El evento de onSubmit del formulario, por defecto refresca la pagina cuando se envia
    //el formulario. el preventDefault() evita eso
    event.preventDefault();

    //Si la longitud del inputValue(sin espacios) es menor o igual a 1 entonces salgo de la función
    if (inputValue.trim().length <= 1) return;

    //hago un console.log de lo que esta ingresado el input cuando envio el formulario
    // console.log(inputValue);

    // setCategories((categories) => [inputValue, ...categories]);

    onNewCategory(inputValue.trim());

    //Limpiamos el valor del inputValue para que la caja del imput quede vacia
    setInputValue("");
  };

  return (
    <form
      onSubmit={(event) => {
        onSubmit(event);
      }}
    >
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => {
          onInputChange(event);
        }}
      />
    </form>
  );
};

//NOTA DE EVENT:
// el onChange del input dispara un event, es event lo paso como parametro a mi función
// onInputChange(event). Luego utilizo el setInputValue del useState para modificar el valor
// del inputValue
////Otra manera de escribir la prop onChange seria:
////onChange={onInputChange} --- pasando solo la referencia de la función ya que
//// solo estoy recibiendo un parametro en la funcion y es el mismo event

////Otra manera de escribir la funcion onInputChange seria:
////const onInputChange = ({target}) => { --- desestructuranto el event que recibe y extrayendo el target
//// setInputValue(target.value)
//// }
