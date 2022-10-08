import ToroVaca from "./toros_y_vacas"

const tv = new ToroVaca();

describe("guardar codigo secreto", () => {
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

    it("no deberia guardar el numero secreto si la cadena esta vacia", () => {
        const resultado = tv.guardarCodigo("");
  
        expect(resultado).toEqual("la cadena no puede estar vacia");
      });

  });


  describe("intentos", () => {
  
    it("el segundo jugador ingresa un numero fuera del limite creado por el primer jugador ", () => {
      const codSecreto= tv.guardarCodigo("234326");
      const resultado = tv.compararCodigo("2343256");
      expect(resultado).toEqual("El numero esta fuera de los limites");
    });
    it("Deberia restar el numero de intentos despues de cada intento ", () => {
      const codSecreto= tv.guardarCodigo("23456");
      const resultado = tv.compararCodigo("23455");
      expect(tv._cantidadIntentos).toEqual(7);
    });

  });

  describe("Adivinar toro", () => {
    it("deberia devolver (!) si algun digito coincide con el codigo secreto", () => {
      const codSecreto= tv.guardarCodigo("23456");
      const resultado = tv.compararCodigo("20897");
      expect(resultado).toEqual("!");
    });

    it("no deberia devolver (!) si si ningun digito coincide con el codigo secreto", () => {
      const codSecreto= tv.guardarCodigo("23456");
      const resultado = tv.compararCodigo("10789");
      expect(resultado).toEqual("");
    });
  });

  describe("Adivinar vaca", () => {
    it("deberia devolver (*) si algun digito coincide en con el codigo secreto pero no se enecuentra en la posicion correcta", () => {
      const codSecreto= tv.guardarCodigo("23456");
      const resultado = tv.compararCodigo("12897");
      expect(resultado).toEqual("*");
    });

  });
