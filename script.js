function maior() {
  var data1 = document.getElementById('data1').value; 
  var data2 = document.getElementById('data2').value; 

  var pdata = new Date(data1);
  var sdata = new Date(data2);

  if (pdata > sdata) {
    alert("A primeira data é maior...");
  } else if (sdata > pdata) {
    alert("A segunda data é maior...");
  } else {
    alert("As datas são iguais.");
  }
}

function diferenca() {
  var data1, data2;

  var data1 = document.getElementById("data1").value;
  var data2 = document.getElementById("data2").value;

  var sdata = new Date(data2);
  var pdata = new Date(data1);
  var diferenca = sdata.getTime() - pdata.getTime();
  var dias = diferenca / (1000 * 60 * 60 * 24);
  alert("A diferença entre as datas é de " + dias + " dias.");
}

function mostrarDataAtual() {
  var dataAtual = new Date();
  var hour = formatarNumero(dataAtual.getHours());
  var minutes = formatarNumero(dataAtual.getMinutes());
  var dia = formatarNumero(dataAtual.getDate());
  var mes = formatarNumero(dataAtual.getMonth() + 1); 
  var ano = dataAtual.getFullYear();

  var dataFormatada = hour + ':' + minutes + 'h - ' + dia + '/' + mes + '/' + ano;

  return dataFormatada;
}

function formatarNumero(numero) {
  return numero.toString().padStart(2, '0');
}

document.getElementById('dataAtual').textContent = mostrarDataAtual();

