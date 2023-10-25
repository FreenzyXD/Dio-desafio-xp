let nome =prompt(" Qual seu nome de Herói?");
let pontuacao=  parseInt(prompt( "de 0 a 10000 quão bom voce se classifica?"));
let mensagem = "";

    switch (true) {
        case pontuacao > 0 && pontuacao <= 1000:
            mensagem = "O Herói "+ nome + " esta no nível Ferro";
            break;
        case pontuacao > 1000 && pontuacao <= 2000:
            mensagem ="O Herói "+ nome +  "esta no nível Bronze";
            break;
        case pontuacao > 2000 && pontuacao <= 5000:
            mensagem ="O Herói "+ nome + " esta no nível Prata";
            break;
        case pontuacao > 5000 && pontuacao <= 7000:
            mensagem ="O Herói "+ nome + " esta no nível Ouro";
            break;
        case pontuacao > 7000 && pontuacao <= 8000:
            mensagem ="O Herói "+ nome + " esta no nível Platina";
            break;
        case pontuacao > 8000 && pontuacao <= 9000:
            "O Herói "+ nome + " esta no nível Ascendente";
            break;
        case pontuacao > 9000 && pontuacao <= 10000:
            mensagem ="O Herói "+ nome + " esta no nível Imortal";
            break;
        case pontuacao > 10000:
            mensagem ="O Herói "+ nome + " esta no nível Radiante";
            break;
            default:
            mensagem = "Voce não tem conhecimento algum"
            break;
            
        
        }
        console.log(mensagem);
        document.getElementById("greeting").innerHTML = mensagem