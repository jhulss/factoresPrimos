class factoresPrimos{
  constructor()
  {
    this.lista = [];
  }

  calcularFactores(numero)
  {
    for (let factor = 2; numero > 1; factor++)
    {
      while (numero % factor === 0)
      {
        this.lista.push(factor);
        numero /= factor;
      }
    }
    return this.lista;
  }

}

export default factoresPrimos;
