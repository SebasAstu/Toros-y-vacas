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
        if(cadena.length==this._codigoSecreto.length)
        {
            this._cantidadIntentos--;
            return cadena;
        }
        else{
            return "El numero esta fuera de los limites";
        }
    }
}
export default ToroVaca;