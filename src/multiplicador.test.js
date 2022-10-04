import multiplicar from "./multiplicador";

describe("Multiplicar", () => {
    it("deberia multiplicar dos numeros", () => {
      const resultado=multiplicar(3, 2);
      expect(resultado).toEqual(6);
    });

    it("deberia tomar en cuenta el numero 0", () => {
        const resultado=multiplicar(3, 0);
        expect(resultado).toEqual(0);
      });
  });