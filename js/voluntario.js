const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email")
const itelefone = document.querySelector(".telefone");
const idisponibilidade = document.querySelector(".disponibilidade");
const icep = document.querySelector(".cep");

function cadastrar(){
    fetch ("http://localhost:8080/voluntarios", 
{
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"
        },

        method: "POST",
        body: JSON.stringify({
        "nome": inome,
        "CEP": icep,
        "disponibilidade": {
        "periodo": idisponibilidade
        },
        "meioContato": {
        "email": iemail,
        "telefone": itelefone
        }
            })
    })

    .then(function(res){ console.log(res)})
    .catch(function(res){ console.log(res)})
}
