class factoresPrimos{
  constructor()
  {
    this.lista = [];
  }

  calcularFactores(numero)
  {
    if (numero > 1)
    {
      while (numero%2 === 0)
      {
        this.lista.push(2);
        numero /= 2;
      }
      if (numero > 1)
      {
        this.lista.push(2);
      }
    }
    return this.lista;
  }


}

export default factoresPrimos;
