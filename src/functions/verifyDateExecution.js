const days = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sabado",
];

function convertDataString(data) {
  const strDate = JSON.stringify(data);
  const splitDate = strDate.split("T");
  const formatDate = splitDate[0].replace(`"`, "");
  return formatDate;
}

function pegarDatasExecucao(dataLimite, dataHoje, diasDaSemana) {
  const comparaDataLimite = convertDataString(dataLimite);
  let atualData = convertDataString(dataHoje);
  const dias = diasDaSemana;
  const datasExecucao = [];
  let controlador = true;
  while (controlador) {
    let comparaData = new Date(`${atualData}T20:10:43.368Z`);
    let qualDia = days[comparaData.getDay()];
    if (dias.includes(qualDia)) {
      datasExecucao.push(atualData);
    }
    if (comparaDataLimite === atualData) {
      if (dias.includes(qualDia) && !datasExecucao.includes(atualData))
        datasExecucao.push(atualData);
      controlador = false;
    }
    comparaData.setDate(comparaData.getDate() + 1);
    atualData = convertDataString(comparaData);
  }
  return datasExecucao;
}

export default pegarDatasExecucao;
