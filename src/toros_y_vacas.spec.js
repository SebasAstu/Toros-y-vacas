import ToroVaca from "./toros_y_vacas"

const tv = new ToroVaca();

describe("", () => {
    it("deberia guardar el numero secreto mayor a 4 digitos", () => {
      const resultado = tv.guardarCodigo("23456");

      expect(resultado).toEqual("23456");
    });

    it("deberia guardar el numero secreto mayor a 4 digitos y menor a 6", () => {
        const resultado = tv.guardarCodigo("12345");
  
        expect(resultado).toEqual("12345");
      });

     it("no deberia guardar el numero secreto menor a 4 digitos y mayor a 6", () => {
        const resultado = tv.guardarCodigo("1234567");
  
        expect(resultado).toEqual("la cadena debe ser mayor a 4 y menor a 6 digitos");
      });

  });


  describe("", () => {
    it("el segundo jugador ingresa un numero delimitado por el primer jugador ", () => {
      const resultado = tv.compararCodigo("23456");

      expect(resultado).toEqual("23456");
    });
  });