const form = document.getElementById("form-contatos");
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += `</td>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
});
