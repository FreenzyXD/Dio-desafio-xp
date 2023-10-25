
let players = [
    {
        nome: "Freenzy",
        pontuacao: 900,
        
    },
    {
        nome: "Ament",
        pontuacao: 7000
    },
    {
        nome: "Frifas",
        pontuacao: 10000
    }
];

for (let player of players) {
    switch (true) {
        case player.pontuacao > 0 && player.pontuacao <= 1000:
            console.log("O Herói "+ player.nome + " esta no nível Ferro");
            break;
        case player.pontuacao > 1000 && player.pontuacao <= 2000:
            console.log("O Herói "+ player.nome +  "esta no nível Bronze");
            break;
        case player.pontuacao > 2000 && player.pontuacao <= 5000:
            console.log("O Herói "+ player.nome + " esta no nível Prata");
            break;
        case player.pontuacao > 5000 && player.pontuacao <= 7000:
            console.log("O Herói "+ player.nome + " esta no nível Ouro");
            break;
        case player.pontuacao > 7000 && player.pontuacao <= 8000:
            console.log("O Herói "+ player.nome + " esta no nível Platina");
            break;
        case player.pontuacao > 8000 && player.pontuacao <= 9000:
            console.log("O Herói "+ player.nome + " esta no nível Ascendente");
            break;
        case player.pontuacao > 9000 && player.pontuacao <= 10000:
            console.log("O Herói "+ player.nome + " esta no nível Imortal");
            break;
        case player.pontuacao > 10000:
            console.log("O Herói "+ player.nome + " esta no nível Radiante");
            break;
        default:
            console.log("Você precisa avançar mais para pegar um Nível");
    }}