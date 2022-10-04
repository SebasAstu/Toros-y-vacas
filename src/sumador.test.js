import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    const resultado=sumar(3, 2);
    expect(resultado).toEqual(5);
  });

  it("deberia tomar en cuenta el numero 0", () => {
    const resultado=sumar(3, 0);
    expect(resultado).toEqual(3);
  });
});

