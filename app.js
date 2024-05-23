// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');



button.addEventListener('click', async function () {

    // 1. Hacer una petición GET a la API que nos ofrece el chiste de Chuck Norris. Existe un método nativo de JavaScript que se llama 'fetch'. En su versión más simple, simplemente le tenemos que pasar como parámetro, la URL de la API que queremos consumir. El método fetch devuelve la respuesta de la API

    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    option.text = "Kiwi";
    option.value = "kiwi";
    x.add(option);    

    const categoryJoke = document.querySelector('#category'); 

    let url = "https://api.chucknorris.io/jokes/random";
        if (categoryJoke.value == "") {
                url += "?category=" + categoryJoke.value;
        }

        console.log("esta es la url: ", url);

    const response = await fetch(url);
    console.dir("objeto response", response);

        


  
    // 2. Modificar la URL para que ahora tenga en cuenta la category. Tenéis que obtener el valor del <select> que ha seleccionado el usuario. Por ejemplo, si ha seleccionado "food", debes construir la query string category=food

    

    const data = await response.json();
    console.log("objeto data", data);


    // // 3. Modificar el DOM para mostrar el chiste al usuario
    jokeDIV.textContent = data.value;

});

// Errores comunes

// 1. No poner bien la URL de la APIs de la cual quieres recibir la información
//  await fetch("https://api.chucknorris.io/jokes/random");

// 2. No saber interpretar el tipo de dato que os viene de la API
// La forma más fácil de interpertar la estructura de datos que te devuelve la API-->
// 1. console.log(data) --> Mostrar por consola los datos de la API antes de hacer nada
// 2. En la página Web de la API, existe documentación con los campos y estructura de datos que devuelve la API

// 3. No usar el ejercicio de chuck norris como base. Esta bien mirar como se hace el fetch en otros ejercicios. No copiar y pegar, escribirlo todo para que se vaya quedando e interorizando


