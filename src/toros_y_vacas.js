class ToroVaca{

    _codigoSecreto=0;

    guardarCodigo(cadena)
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
    compararCodigo(cadena)
    {
        if(cadena.length==this._codigoSecreto.length)
        {
            return cadena;
        }
    }
}
export default ToroVaca;