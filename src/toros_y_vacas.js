class ToroVaca{

    _codigoSecreto=0;
    _cantidadIntentos=8;

    partida(codigo,cadena)
    {
        let intentos="";

        if(this._codigoSecreto==0)
        {
            this.guardarCodigo(codigo);
        }
        else
        {
            if(this._cantidadIntentos>0)
            {
                intentos = this.compararCodigo(cadena);

                if(cadena==codigo)
                {
                    return "felicidades jugador 2 ganaste!"
                }
                
            }
        }
    }

    guardarCodigo(cadena)
    {
       if(cadena =="")
       {
          return "la cadena no puede estar vacia"
       }
       else
       {
          if(cadena.length>=4 && cadena.length<=6)
          {
               this._codigoSecreto=cadena;
               return this._codigoSecreto;
          } 
          else 
          {
               return "la cadena debe ser mayor a 4 y menor a 6 digitos";
          }
       }
        
    }

    compararCodigo(cadena)
    {
        let resp="";
        if(cadena.length==this._codigoSecreto.length)
        {
            resp=this.buscarVacaToro(cadena);
            this._cantidadIntentos--;
           
        }
        else{
            resp= "El numero esta fuera de los limites";
        }
        return resp;
    }

    buscarVacaToro(codigoIngresado){    
        let output="";
        const codVec1 = this.separarCodigo(this._codigoSecreto);
        const codVec2 = this.separarCodigo(codigoIngresado);
        console.log(codVec1);
        console.log(codVec2);
        for(var i = 0;i<codVec1.length;i++){
            if(codVec1[i]==codVec2[i]){
                output += "!";
            }
            else{                
                if(codVec1.includes(codVec2[i])){
                    output += "*";
                }
            }                   
        }
        return output;
    }
    separarCodigo(cadena){
        let numString = String(cadena);
        const array = []    
        for(var i = 0;i<numString.length;i++){
            let valInsert = +numString.charAt(i);
            array.push(valInsert);        
        }
        return array;
    }
}
export default ToroVaca;