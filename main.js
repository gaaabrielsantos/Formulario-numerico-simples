// constante do formulário
const form = document.getElementById('form-campos');


function validarFormulario(valorA, valorB) {
    return valorB > valorA;
}

// envio do formulario
form.addEventListener('submit', function(e) {
    e.preventDefault();

    //capturando valores dos campos
    const valorA = parseFloat(document.getElementById('campo-a').value);
    const valorB = parseFloat(document.getElementById('campo-b').value);
    const mensagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A: ${valorA}`;

    //validações e alertas
    if (isNaN(valorA) || isNaN(valorB)) {
        alert("Por favor, insira valores numéricos em ambos os campos.");
    } else if (valorB > valorA) {
        alert(mensagemSucesso);
    } else if (valorB === valorA) {
        alert("Não é válido, pois B é igual a A!");
    } else {
        alert("Não é válido, pois A é maior que B!");
    }

    //zerando os campos depois do submit
    document.getElementById('campo-a').value = '';
    document.getElementById('campo-b').value = '';
});