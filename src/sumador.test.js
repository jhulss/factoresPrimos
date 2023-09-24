import factoresPrimos from "./sumador";


describe("Factores primos", () => {
  it("se deberia retornar una lista vacia", () => {
    const calcular = new factoresPrimos();
    expect(calcular.calcularFactores(1)).toEqual([]);
  });

});