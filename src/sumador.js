class factoresPrimos{
  constructor()
  {
    this.lista = [];
  }

  calcularFactores(numero)
  {
    let div = 2;
    if (numero > 1)
    {
      while (numero%div === 0)
      {
        this.lista.push(div);
        numero /= div;
      }
      div++;
      if (numero > 1)
      {
        this.lista.push(numero);
      }
    }
    return this.lista;
  }


}

export default factoresPrimos;
