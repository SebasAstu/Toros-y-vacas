class ToroVaca{

    _codigoSecreto=0;
    _cantidadIntentos=8;

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
        for(var i = 0;i<codigoIngresado.length;i++){
            if(this._codigoSecreto[i]==codigoIngresado[i]){
                output += "!";
            }
        }                   
        return output;
    }
}
export default ToroVaca;