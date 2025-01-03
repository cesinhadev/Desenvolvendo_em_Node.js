function RemoverEnderecoUsuario(usuario) {
    const usuarioSemEndereco = Object.assign({}, usuario)
    delete usuarioSemEndereco.endereco;
    return usuarioSemEndereco;
}

module.exports = RemoverEnderecoUsuario;