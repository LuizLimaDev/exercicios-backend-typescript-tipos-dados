const geradorEtiquete = (produto: {
  produto: string;
  lote: number;
  ano: number;
  qtd: number;
}): string[] => {
  const etiquetas: string[] = [];

  for (let id = 0; id <= produto.qtd; id++) {
    etiquetas.push(
      `${produto.lote}-${produto.ano}-${id.toString().padStart(3, "0")}`
    );
  }

  return etiquetas;
};

console.log(
  geradorEtiquete({
    produto: "CPU Dual Core 3.0GHZ",
    lote: 321,
    ano: 2022,
    qtd: 5,
  })
);
