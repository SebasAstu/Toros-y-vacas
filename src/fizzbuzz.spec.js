import FizzBuzz from "./fizzbuzz";

const fb= new FizzBuzz();

describe("Fizzbuzz para un numero", () => {
    it("deberia generar el mismo numero 1 que no tiene regla", () => {
      const resultado = fb.generarPara(1);

      expect(resultado).toEqual("1");
    });

    it("deberia generar el mismo numero 2 que no tiene regla", () => {
        const resultado = fb.generarPara(2);
        expect(resultado).toEqual("2");
      });
    
      it("deberia generar fizz para el numero 3", () => {
        const resultado = fb.generarPara(3);
        expect(resultado).toEqual("fizz");
      });

      it("deberia generar fizz para multiplo de 3", () => {
        const resultado = fb.generarPara(6);
        expect(resultado).toEqual("fizz");
      });

      it("deberia generar buzz para el numero 5", () => {
        const resultado = fb.generarPara(5);
        expect(resultado).toEqual("buzz");
      });

      it("deberia generar buzz para multiplo de 5", () => {
        const resultado = fb.generarPara(10);
        expect(resultado).toEqual("buzz");
      });

      it("deberia generar fizzbuzz para el numero 15", () => {
        const resultado = fb.generarPara(15);
        expect(resultado).toEqual("fizzbuzz");
      });
      it("deberia generar fizzbuzz para multiplo de 3 y 5", () => {
        const resultado = fb.generarPara(15);
        expect(resultado).toEqual("fizzbuzz");
      });
  });

  