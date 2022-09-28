var alerta = document.getElementById('alerta');
//exemplo: https://wbruno.com.br/expressao-regular/mascara-campo-de-telefone-em-javascript-com-regex-nono-digito-telefones-sao-paulo/
function mtel(v) {
    v = v.replace(/\D/g, ""); //Remove tudo o que nÃ£o Ã© dÃ­gito
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parÃªnteses em volta dos dois primeiros dÃ­gitos
    v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hÃ­fen entre o quarto e o quinto dÃ­gitos
    return v;
}

function mask(p) {
    let fone = p;
    fone.value = mtel(fone.value);
    alerta.style.display = "none";
}

function whatsapp() {
    let fone = document.getElementById('phone');


    if (fone.value.length <= 13) {
        alerta.innerText = "ATENÇÃO: Corrija campo telefone"
        alerta.style.display = "initial"
        fone.focus();
    } else {

        fone = fone.value.replace(/\D/g, "");
        //window.open(`https://web.whatsapp.com/send?phone=55${fone}`);
        window.open(`https://wa.me/+55${fone}`);
        window.parent.location = window.parent.location.href;
    }

}