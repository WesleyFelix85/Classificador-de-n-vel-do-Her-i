  let nome = "Jogador 1"
  let quantidadeExperiencia = 5000
  let nivel

  if (quantidadeExperiencia <= 1000) 
  {
    nivel = "Ferro"
  }
  if (quantidadeExperiencia > 1000 && quantidadeExperiencia <= 2000)
  {
    nivel = "Bronze"
  }
  if (quantidadeExperiencia > 2000 && quantidadeExperiencia <= 5000)
  {
    nivel = "Prata"
  }
  if (quantidadeExperiencia > 5000 && quantidadeExperiencia <= 7000)
  {
    nivel = "Ouro"
  }
  if (quantidadeExperiencia > 7000 && quantidadeExperiencia <= 8000)
  {
    nivel = "Platina"
  }
  if (quantidadeExperiencia > 8000 && quantidadeExperiencia <= 9000)
  {
    nivel = "Ascendente"
  }
  if (quantidadeExperiencia > 9000 && quantidadeExperiencia <= 10000)
  {
    nivel = "Imortal"
  }
  if (quantidadeExperiencia > 10000)
  {
    nivel = "Radiante"
  }

  console.log("O Herói de nome "+ nome +" está no nível: "+ nivel)