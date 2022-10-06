class ToroVaca{

    _codigoSecreto=0;

    guardarCodigo(cadena)
    {
        if(cadena.length>=4 && cadena.length<=6)
        {
            this._codigoSecreto=cadena;
        return this._codigoSecreto;
        } 
    }
}
export default ToroVaca;