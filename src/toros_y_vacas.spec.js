import ToroVaca from "./toros_y_vacas"

describe("guardar codigo secreto", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
  });

    it("deberia guardar el numero secreto mayor a 4 digitos", () => {
      const resultado = juego.guardarCodigoSecreto("23456");

      expect(resultado).toEqual("23456");
    });

    it("deberia guardar el numero secreto mayor a 4 digitos y menor a 6", () => {
        const resultado = juego.guardarCodigoSecreto("12345");
  
        expect(resultado).toEqual("12345");
      });

    it("no deberia guardar el numero secreto menor a 4 digitos y mayor a 6", () => {
        const resultado = juego.guardarCodigoSecreto("1234567");
  
        expect(resultado).toEqual("El codigo a adivinar debe ser mayor a 4 y menor a 6 digitos");
      });

    it("no deberia guardar el numero secreto si la cadena esta vacia", () => {
        const resultado = juego.guardarCodigoSecreto("");
  
        expect(resultado).toEqual("El codigo a adivinar no puede estar vacio");
      });

  });


  describe("intentos", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
    });
  
    it("el segundo jugador ingresa un numero fuera del limite creado por el primer jugador ", () => {
      juego.guardarCodigoSecreto("234326");
      const resultado = juego.verificarCodigo("2343256");
      expect(resultado).toEqual("El numero esta fuera de los limites");
    });
    it("Deberia restar el numero de intentos despues de cada intento ", () => {
      juego.guardarCodigoSecreto("23456");
      const resultado = juego.verificarCodigo("23455");
      expect(juego._cantidadIntentos).toEqual(7);
    });

  });

  describe("Controlar si el codigo Advivinando es toro", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
    });

    it("deberia devolver (!) si algun digito coincide con el codigo secreto", () => {
      juego.guardarCodigoSecreto("23456");
      const resultado = juego.verificarCodigo("20897");
      expect(resultado).toEqual("!");
    });

    it("no deberia devolver (!) si si ningun digito coincide con el codigo secreto", () => {
      juego.guardarCodigoSecreto("23456");
      const resultado = juego.verificarCodigo("10789");
      expect(resultado).toEqual("");
    });
  });

  describe("Controlar si el codigo Advivinando es vaca", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
  });

    it("deberia devolver (*) si algun digito coincide en con el codigo secreto pero no se enecuentra en la posicion correcta", () => {
      juego.guardarCodigoSecreto("23456");
      const resultado = juego.verificarCodigo("12897");
      expect(resultado).toEqual("*");
    });
    it("no deberia devolver (*) si si ningun digito coincide con el codigo secreto", () => {
      juego.guardarCodigoSecreto("23456");
      const resultado = juego.verificarCodigo("10789");
      expect(resultado).toEqual("");
    });
  });

  describe("Verificar ganador", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
  });

    it("deberia devolver un mensaje de que gano si la cantidad de (!) es igual al tamaño del codigo secreto ", () => {
      juego.partida("12345","12345");
      const resultado= juego.partida("12345","12345");
      expect(resultado).toEqual("felicidades jugador 2 ganaste!");
    });
  });

  describe("Verificar perdedor", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
  });

    it("Cuando la cantidad de intentos llegue a 0 el segundo jugador pierde la partida y se mostrara el mensaje que perdio ", () => {
      juego.partida("12345","67890");

      juego.partida("12345","67898");
      juego.partida("12345","67894");
      juego.partida("12345","67891");
      juego.partida("12345","67892");
      juego.partida("12345","67893");
      juego.partida("12345","67895");
      juego.partida("12345","67896");
      juego.partida("12345","67896");
      const resultado= juego.partida("12345","67896");
      expect(resultado).toEqual("Lo siento, jugador 2 perdiste! el codigo secreto es: "+ juego._codigoSecreto);
    });
  });

   describe("Definir numero de intentos para el segundo jugador", () => {

    let juego;
    beforeEach(()=> {
    juego = new ToroVaca
  });

    it("deberia devolver el numero de intentos definido por el primer jugador", () => {
      juego.partida("12345","67890");
      const resultado=juego.definirIntentos(10);
      expect(resultado).toEqual(10);
    });

    it("si el numero ingresado no es a 0 deberia devolver un mensaje de error", () => {
      juego.partida("12345","67890");
      const resultado=juego.definirIntentos(-10);
      expect(resultado).toEqual("El numero debe ser mayor a 0");
    });

  });

  describe("Controlar Bisonte", () => {

    let juego = new ToroVaca;

    it("deberia devolver (%) si se envia un solo numero primo", () => {
      const resultado= juego.buscarBisonte("3");
      expect(resultado).toEqual("%");
    });

    it("deberia devolver (%)si en el codigo secreto enviado por el primer jugador existen numeros primos", () => {
      
      expect(juego.buscarBisonte("1")).toEqual("");
      expect(juego.buscarBisonte("2")).toEqual("%");
      expect(juego.buscarBisonte("3")).toEqual("%");
      expect(juego.buscarBisonte("4")).toEqual("");
      expect(juego.buscarBisonte("5")).toEqual("%");
    });
    
    it("deberia devolver (%) de una lista de numeros(codigo secreto) dado por el primer jugador", () => {
      const resultado= juego.buscarBisonte("2346");
      expect(resultado).toEqual("%%");
    });

  });
