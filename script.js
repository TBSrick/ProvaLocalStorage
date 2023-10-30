const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const calcularBtn = document.getElementById('calcularSoma');
const calcularsuBtn = document.getElementById('calcularsu');
const calcularmulBtn = document.getElementById('calcularmul');
const calculardiBtn = document.getElementById('calculardi');
const resultado = document.getElementById('resultado');
const historico = document.getElementById('historico');
const limparHistoricoBtn = document.getElementById('limparHistorico');
 
window.onload = function() {
    const somasSalvas = JSON.parse(localStorage.getItem('historico')) || [];
    somasSalvas.forEach(soma => {
        const listItem = document.createElement('li');
        listItem.textContent = soma;
        historico.appendChild(listItem);
    });
};
 
calcularBtn.addEventListener('click', function() {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
    const soma = valorNum1 + valorNum2;
    const sub = valorNum1 - valorNum2;
    
 
    resultado.textContent = "Resultado: " + soma;
 
    // Salva a soma no histórico no localStorage
    const textoSoma = `${valorNum1} + ${valorNum2} = ${soma}`;
    const somasSalvas = JSON.parse(localStorage.getItem('historico')) || [];
    somasSalvas.push(textoSoma);
    localStorage.setItem('historico', JSON.stringify(somasSalvas));
 
    // Adiciona a nova soma à lista de histórico na página
    const listItem = document.createElement('li');
    listItem.textContent = textoSoma;
    historico.appendChild(listItem);
});

calcularsuBtn.addEventListener('click', function() {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
    const sub = valorNum1 - valorNum2;
    
 
    resultado.textContent = "Resultado: " + sub;
 
    // Salva a soma no histórico no localStorage
    const textoSoma = `${valorNum1} - ${valorNum2} = ${sub}`;
    const somasSalvas = JSON.parse(localStorage.getItem('historico')) || [];
    somasSalvas.push(textoSoma);
    localStorage.setItem('historico', JSON.stringify(somasSalvas));
 
    // Adiciona a nova soma à lista de histórico na página
    const listItem = document.createElement('li');
    listItem.textContent = textoSoma;
    historico.appendChild(listItem);
});

calcularmulBtn.addEventListener('click', function() {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
    const mul = valorNum1 * valorNum2;
    
 
    resultado.textContent = "Resultado: " + mul;
 
    // Salva a soma no histórico no localStorage
    const textoSoma = `${valorNum1} * ${valorNum2} = ${mul}`;
    const somasSalvas = JSON.parse(localStorage.getItem('historico')) || [];
    somasSalvas.push(textoSoma);
    localStorage.setItem('historico', JSON.stringify(somasSalvas));
 
    // Adiciona a nova soma à lista de histórico na página
    const listItem = document.createElement('li');
    listItem.textContent = textoSoma;
    historico.appendChild(listItem);
});

calculardiBtn.addEventListener('click', function() {
    const valorNum1 = parseFloat(num1.value);
    const valorNum2 = parseFloat(num2.value);
   
    
    
 if(valorNum1  === 0 || valorNum2 === 0)
 {
alert('Digite um valor diferente que zero');
 }
  else{
    const div = valorNum1 / valorNum2;
 

    resultado.textContent = "Resultado: " + div;
 
    // Salva a soma no histórico no localStorage
    const textoSoma = `${valorNum1} / ${valorNum2} = ${div}`;
    const somasSalvas = JSON.parse(localStorage.getItem('historico')) || [];
    somasSalvas.push(textoSoma);
    localStorage.setItem('historico', JSON.stringify(somasSalvas));
 
    // Adiciona a nova soma à lista de histórico na página
    const listItem = document.createElement('li');
    listItem.textContent = textoSoma;
    historico.appendChild(listItem);
}});

 
limparHistoricoBtn.addEventListener('click', function() {
    localStorage.removeItem('historico'); // Remove o histórico do localStorage
    historico.innerHTML = ''; // Limpa o histórico na página
});