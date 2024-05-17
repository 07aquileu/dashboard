//efeito do botão voltar ao Topo

function Topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}

//Validação de Login

function Login(){
    var logado= 0;
    var suario= document.getElementById("usuario").value;
    var senha= document.getElementById("senha").value;

    if(usuario == "adnim" && senha == "123456"){
        window.location="index.html";
        logado= 1;
    }

    if(logado == 0){
        alert("Acesso negado .Dados incorretos")
    }
}

//Ativar alert no botão cadastrar

function cadrastro(){
    alert("Cadrastro com sucesso");
    window.location.href="index.html";
}