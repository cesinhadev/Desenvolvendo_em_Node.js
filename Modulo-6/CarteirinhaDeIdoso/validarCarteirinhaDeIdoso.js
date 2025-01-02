function validarCarteirinhaDeIdoso(idade) {
    if(idade < 60) throw new Error("Carteirinha Invalida!");
    return true;
}

module.exports = validarCarteirinhaDeIdoso;