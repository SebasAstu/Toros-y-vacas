import ToroVaca from "./toros_y_vacas"

const tv = new ToroVaca();

describe("", () => {
    it("deberia guardar el numero secreto mayor a 4 digitos", () => {
      const resultado = tv.guardarCodigo("23456");

      expect(resultado).toEqual("23456");
    });

   
  });