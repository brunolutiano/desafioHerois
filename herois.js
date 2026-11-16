// Classificador de nível de Herói

// Lista de heróis (nome e XP) para demonstrar o laço de repetição
const herois = [
    { nome: "Arthas", xp: 850 },
    { nome: "Lyra", xp: 1500 },
    { nome: "Thorin", xp: 4200 },
    { nome: "Selene", xp: 6800 },
    { nome: "Kael", xp: 7500 },
    { nome: "Nyx", xp: 8900 },
    { nome: "Draven", xp: 9999 },
    { nome: "Aurora", xp: 12000 },
];

for (const heroi of herois) {
    let nome = heroi.nome;
    let xp = heroi.xp;
    let nivel;

    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}
