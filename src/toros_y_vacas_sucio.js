class ToroVaca{

    _codigoSecreto=0;
    _cantidadIntentos=8;

    partida(codigoAAdivinar,codigoAdivinando)
    {
        let resultadoJuego="";

        if(this._codigoSecreto==0)
        {
            this.guardarCodigoSecreto(codigoAAdivinar);
            resultadoJuego = "codigo secreto ingresado, iniciar partida";
        }
        else
        {
            if(this._cantidadIntentos>1)
            {
                resultadoJuego = this.verificarCodigo(codigoAdivinando);

                if(codigoAdivinando==this._codigoSecreto)
                {
                    resultadoJuego= "felicidades jugador 2 ganaste!";
                } 
            }
            else{
                resultadoJuego= "Lo siento, jugador 2 perdiste! el codigo secreto es: "+ this._codigoSecreto;
            }
        }
        return resultadoJuego;
    }

    definirIntentos(numIntentos)
    {
        if(numIntentos>0)
        {
            return this._cantidadIntentos=numIntentos;
        }
        else
        {
            return "El numero debe ser mayor a 0";
        }
    }

    guardarCodigoSecreto(codigoAAdivinar)
    {
       if(codigoAAdivinar =="")
       {
          return "El codigo a adivinar no puede estar vacio"
       }
       else
       {
          if(codigoAAdivinar.length>=4 && codigoAAdivinar.length<=6)
          {
               this._codigoSecreto=codigoAAdivinar;
               return this._codigoSecreto;
          } 
          else 
          {
               return "El codigo a adivinar debe ser mayor a 4 y menor a 6 digitos";
          }
       }
        
    }

    verificarCodigo(codigoAdivinando)
    {
        let respuesta="";
        if(codigoAdivinando.length==this._codigoSecreto.length)
        {
            respuesta=this.buscarVacaToro(codigoAdivinando);
            this._cantidadIntentos--;
           
        }
        else{
            respuesta= "El numero esta fuera de los limites";
        }
        return respuesta;
    }

    buscarVacaToro(codigoAdivinando)
    {    
        let señal="";
        const codVec1 = this.separarCodigo(this._codigoSecreto);
        const codVec2 = this.separarCodigo(codigoAdivinando);
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1[i]==codVec2[i]){
                señal += "!";
            }
            else{                
                if(codVec1.includes(codVec2[i])){
                    señal += "*";
                }
            }                   
        }
        return señal;
    }
    separarCodigo(codigo){
        let numString = String(codigo);
        const array = []    
        for(var i = 0;i<numString.length;i++){
            let valInsert = +numString.charAt(i);
            array.push(valInsert);        
        }
        return array;
    }
}
export default ToroVaca;