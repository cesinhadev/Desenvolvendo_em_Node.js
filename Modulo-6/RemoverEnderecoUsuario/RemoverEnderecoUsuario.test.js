const RemoverEnderecoUsuario = require("./RemoverEnderecoUsuario");

test("Remover endereço do usuario", () => {
    const usuario= {
        nome: "Joao",
        idade: 18,
        endereco: {
            rua: "Rua Das borboletas",
            bairro: "JD. dos mortos",
            numero: "CINCO",
        },
    };

    const usuarioSemEndereco = RemoverEnderecoUsuario(usuario);

    expect(usuario).toEqual({
        nome: "Joao",
        idade: 18,
        endereco: {
            rua: "Rua Das borboletas",
            bairro: "JD. dos mortos",
            numero: "CINCO",
        },
    });
    expect(usuarioSemEndereco).toEqual({
        nome: "Joao",
        idade: 18,
    });
});