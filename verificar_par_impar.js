document.getElementById('btnEnvio').addEventListener('click', function () {
    var num = document.getElementById('numero').value;
    verificarNumero(num);
})

function verificarNumero(num) {
    let result;
    if (num % 2 == 0) {
        result = "par";
    } else {
        result = "ímpar"
    }
    
    var modal = new bootstrap.Modal(document.getElementById('resultadoModal'));
    modal.show();
    document.getElementById('resultadoText').innerText = 'O número ' + num + ' é ' + result;
}