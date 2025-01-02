const validarCarteirinhaDeIdoso = require("./validarCarteirinhaDeIdoso");

test("retornar tru para uma idade valida", () => {
    expect(validarCarteirinhaDeIdoso(82)).toBe(true);
});

test("retornar error uma idade invalida", () => {
    expect(() => validarCarteirinhaDeIdoso(12)).toThrow("Carteirinha Invalida!");
})
