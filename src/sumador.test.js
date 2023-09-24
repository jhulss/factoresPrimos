import factoresPrimos from "./sumador";


describe("Factores primos", () => {
  it("se deberia retornar una lista vacia", () => {
    const calcular = new factoresPrimos();
    expect(calcular.calcularFactores(1)).toEqual([]);
  });

  it("deberia ingresar un numero mayor a 1, en este caso 2 ya que dos es un numero primo", () => {
    const calcular = new factoresPrimos();
    expect(calcular.calcularFactores(2)).toEqual([2]);
  });


});