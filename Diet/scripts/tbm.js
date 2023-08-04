const inputIdade = document.querySelector("#idade");
const inputAltura = document.querySelector("#altura");
const inputPeso = document.querySelector("#peso");
const sexo = document.getElementsByName("sexo")

document.getElementById("personal-informatio").addEventListener("submit", function(event){
    event.preventDefault();

    if(sexo[0].checked){
        console.log("Certo")
    }
})