const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

const rollDice = async () => {
  const rolledDice = Math.floor(Math.random() * 6) + 1;
  return rolledDice;
};

const getRandomBlock = async () => {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
      break;
  }

  return result;
};

const logRollResult = async (characterName, block, diceResult, attribute) => {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );

  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
};

const playRaceEngine = async (character1, character2) => {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 Rodada ${round}`);
    let block = await getRandomBlock();
    console.log(`🔹 Bloco: ${block}`);

    let rolledDiceP1 = await rollDice();
    let rolledDiceP2 = await rollDice();

    let totaltestSkillP1 = 0;
    let totaltestSkillP2 = 0;

    if (block.toUpperCase() === "RETA") {
      totaltestSkillP1 = rolledDiceP1 + character1.VELOCIDADE;
      totaltestSkillP2 = rolledDiceP2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        rolledDiceP1,
        character1.VELOCIDADE
      );
      await logRollResult(
        character2.NOME,
        "velocidade",
        rolledDiceP2,
        character2.VELOCIDADE
      );
    }

    if (block.toUpperCase() === "CURVA") {
      totaltestSkillP1 = rolledDiceP1 + character1.MANOBRABILIDADE;
      totaltestSkillP2 = rolledDiceP2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        rolledDiceP1,
        character1.MANOBRABILIDADE
      );
      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        rolledDiceP2,
        character2.MANOBRABILIDADE
      );
    }

    if (block.toUpperCase() === "CONFRONTO") {
      let powerResultP1 = rolledDiceP1 + character1.PODER;
      let powerResultP2 = rolledDiceP2 + character2.PODER;

      console.log(`
      🏁 ${character1.NOME} Confrontou com ${powerResultP1} 🎯
      `);

      await logRollResult(
        character1.NOME,
        "poder",
        rolledDiceP1,
        character1.PODER
      );
      await logRollResult(
        character2.NOME,
        "poder",
        rolledDiceP2,
        character2.PODER
      );

      if (powerResultP1 > powerResultP2 && character2.PONTOS > 0) {
        console.log(
          `${character1.NOME} Ganhou o confronto! ${character2.NOME} perdeu 1 ponto! 🐢`
        );
        character2.PONTOS--;
      }

      if (powerResultP2 > powerResultP1 && character1.PONTOS > 0) {
        console.log(
          `${character2.NOME} Ganhou o confronto! ${character1.NOME} perdeu 1 ponto! 🐢`
        );
        character1.PONTOS--;
      }

      if (powerResultP2 === powerResultP1) {
        console.log("Confronto empatado, Nenhum ponto foi perdido!");
      }
    }

    if (totaltestSkillP1 > totaltestSkillP2) {
      console.log(`🏁 ${character1.NOME} ganhou a rodada!`);
      character1.PONTOS += 1;
    } else if (totaltestSkillP2 > totaltestSkillP1) {
      console.log(`🏁 ${character2.NOME} ganhou a rodada!`);
      character2.PONTOS += 1;
    }

    console.log("----------------------------------------------");
  }
};

const declareWinner = async (character1, character2) => {
  console.log("Resultado Final :");
  console.log(`${character1.NOME} ${character1.PONTOS} pontos(s)`);
  console.log(`${character2.NOME} ${character2.PONTOS} pontos(s)`);

  if (character1.PONTOS > character2.PONTOS) {
    console.log(`\n🏆🏆 ${character1.NOME} venceu a corrida! 🏆🏆`);
  } else if (character2.PONTOS > character1.PONTOS) {
    console.log(`\n🏆🏆 ${character2.NOME} venceu a corrida! 🏆🏆`);
  } else {
    console.log(`A corrida terminou empatada!`);
  }
};

(async function main() {
  console.log(
    `🏁🚨 Corrida entre  ${player1.NOME} e ${player2.NOME} começando...\n`
  );
  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);  
})();
