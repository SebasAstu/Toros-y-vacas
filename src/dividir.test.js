import dividir from "./dividir";

describe("Dividir", () => {
    it("deberia dividir dos numeros", () => {
      const resultado=dividir(4, 2);
      expect(resultado).toEqual(2);
    });

    it("deberia tomar en cuenta el numero 0", () => {
        const resultado=dividir(0, 4);
        expect(resultado).toEqual(0);
      });
  });