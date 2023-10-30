document.getElementById("meuBotao").addEventListener("click", inicio)

function inicio (){
    let pessoas = parseInt(prompt("Quantos heróis são?"));
    let heroData = [];

    for (let i = 0; i < pessoas; i++) {
        let nome = prompt("Qual é o nome do Herói?");
        let pontuacao = parseInt(prompt("De 0 a 10000, quão bom você se classifica?"));
        let mensagem = [""];

        switch (true) {
            case pontuacao > 0 && pontuacao <= 1000:
                mensagem = "O Herói " + nome + " está no nível Ferro";
                break;
            case pontuacao > 1000 && pontuacao <= 2000:
                mensagem = "O Herói " + nome + " está no nível Bronze";
                break;
            case pontuacao > 2000 && pontuacao <= 5000:
                mensagem = "O Herói " + nome + " está no nível Prata";
                break;
            case pontuacao > 5000 && pontuacao <= 7000:
                mensagem = "O Herói " + nome + " está no nível Ouro";
                break;
            case pontuacao > 7000 && pontuacao <= 8000:
                mensagem = "O Herói " + nome + " está no nível Platina";
                break;
            case pontuacao > 8000 && pontuacao <= 9000:
                mensagem = "O Herói " + nome + " está no nível Ascendente";
                break;
            case pontuacao > 9000 && pontuacao <= 10000:
                mensagem = "O Herói " + nome + " está no nível Imortal";
                break;
            case pontuacao > 10000:
                mensagem = "O Herói " + nome + " está no nível Radiante";
                break;
            default:
                mensagem = "Você não tem conhecimento algum";
                break;
        }
        
        heroData += mensagem + "<br>";
    }

    document.getElementById("greeting").innerHTML = heroData;
}

