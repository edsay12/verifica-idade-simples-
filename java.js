var botao1 = window.document.getElementById("botao")


function verifica() {
    // ano atual pode ser acessado pela variavel ano 
    var agora = new Date()
    var ano = agora.getFullYear()

    var nasc = window.document.getElementById("nascimento")
    var aviso = window.document.getElementById("aviso")
    var imagem = window.document.getElementById("imagem")
    var sexo = window.document.getElementsByName("Sexo")
    
    
    if (sexo[0].checked){
        var genero = "Homen"
        document.body.style.background = "blue";
    }else if(sexo[1].checked){
        genero = "mulher"
        document.body.style.background = "pink";
    }

    // calculo da idade 

    var idade = Number(ano)  - Number(nasc.value) 
    if (idade >= 0 && idade < 13 ) {
        if (genero =="Homen"){
            aviso.innerHTML = `Voce e um menino de ${idade} anos`
            imagem.src = "img/bebe-menino.jpg"
        }else{
            aviso.innerHTML =`Voce e uma menina de ${idade} anos`
            imagem.src = "img/bebe-menina.jpg"
        }
        imagem.style.width = "200px"
        imagem.style.height = "200px"

    }else if(idade >=13 && idade < 30 ){
        if(genero == "Homen"){
            aviso.innerHTML = `Voce e um adolescente de ${idade} anos`
            imagem.src = "img/homen.jpeg"
            
            

        }else{
            aviso.innerHTML = `Voce e uma adolescente de ${idade} anos`
            imagem.src = "img/mulher.jpeg"
        }
        imagem.style.width = "200px"
        imagem.style.height = "200px"

    }else if (idade >=30  && idade < 120 ){
        if (genero == "Homen"){
            aviso.innerHTML = `Voce e uma Homen adulto de ${idade} anos`
            imagem.src = "img/velho.jpeg"
        }else{
            aviso.innerHTML = `Voce e uma Mulher  adulta de ${idade} anos`
            imagem.src = "img/velha.jpeg"
        }
        imagem.style.width = "200px"
        imagem.style.height = "200px"
    }else if (idade >= 120){
        alert("Data incorreta")

    }else{

        alert("Data incorreta")
    }

    // imagem do meio formataçao
}
