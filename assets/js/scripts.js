document.addEventListener('DOMContentLoaded', function () {
    boton();
});

function boton () {
    let btnRegistrar  = document.querySelector("#btn");
    let inputRegistrar  = document.querySelector("#input");
    let iconError  = document.querySelector(".icon-error");
   

    btnRegistrar.addEventListener("click", function () {
        var contenido = inputRegistrar.value;
        
        
        if(!contenido.includes("@")) {

            if(document.querySelector('.parrafo-error')) {
                labelError.remove();
            }

                let contenido  = document.querySelector(".contenido");
                inputRegistrar.classList.add("error");
            
                let labelError = document.createElement('DIV');

                labelError.innerHTML = `<p class="parrafo-error">Please provide a valid email</p>`;
                
                contenido.appendChild(labelError);

                inputRegistrar.classList.add('error-img');
                iconError.classList.add("d-block");
            
            
        }else {
            alert("Registrado");
            inputRegistrar.value = "";
            document.querySelector(".parrafo-error").remove();
            iconError.classList.remove("d-block");
            let contenido  = document.querySelector(".contenido");
            inputRegistrar.classList.remove("error");
            
            let labelError = document.createElement('DIV');

            labelError.innerHTML = `<p class="parrafo-correcto">Correct</p>`;
            contenido.appendChild(labelError);

            setTimeout(() => {
                labelError.remove();
                
            }, 1000);
        }
    })
}