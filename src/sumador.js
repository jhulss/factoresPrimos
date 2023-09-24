class factoresPrimos{
  constructor()
  {
    this.lista = [];
  }

  calcularFactores(numero)
  {
    if (numero > 1)
    {
      this.lista.push(numero)
    }
    return this.lista;
  }


}

export default factoresPrimos;
