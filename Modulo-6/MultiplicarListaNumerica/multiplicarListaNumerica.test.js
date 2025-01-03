const multiplicarListaNumerica = require("./multiplicarListaNumerica")

test("multiplicar Corretamente", () =>{
    expect(multiplicarListaNumerica(2, [1, 2, 3])).toEqual([2, 4, 6]);
});