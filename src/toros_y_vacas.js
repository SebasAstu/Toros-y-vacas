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
        //if(this._codigoSecreto!=0)
        else
        {
            if(this._cantidadIntentos>0)
            {
                resultadoJuego = this.verificarCodigo(codigoAdivinando);

                if(codigoAdivinando==this._codigoSecreto)
                {
                    resultadoJuego= "felicidades jugador 2 ganaste!";
                } 
            }
            if(this._cantidadIntentos==0)
            {
                resultadoJuego= "Lo siento, jugador 2 perdiste! el codigo secreto es: "+ this._codigoSecreto;
            }
        }
        return resultadoJuego;
    }

    definirIntentos(numIntentos)
    {
        let respuesta="";

        if(numIntentos>0)
        {
            respuesta= this._cantidadIntentos=numIntentos;
        }
        else
        {
            respuesta= "El numero debe ser mayor a 0";
        }

        return respuesta;
    }

    guardarCodigoSecreto(codigoAAdivinar)
    {
        let respuesta="";

       if(codigoAAdivinar =="")
       {
         respuesta= "El codigo a adivinar no puede estar vacio"
       }
       else
       {
          if(codigoAAdivinar.length>=4 && codigoAAdivinar.length<=6)
          {
               this._codigoSecreto=codigoAAdivinar;
               respuesta= this._codigoSecreto;
          } 
          else 
          {
            respuesta= "El codigo a adivinar debe ser mayor a 4 y menor a 6 digitos";
          }
       }

       return respuesta;
        
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

    esPrimo(n)
    {
        if (n<=1) 
        {
            return "";
        }
        for (var i = 2; i <= Math.sqrt(n); i++)
        {
            if (n % i == 0)
            {
                return "";
            }
             
        }
        
        return "%";
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