const soletrando = (palavra: string): string => {
  return palavra.split("").join("-");
};

console.log(soletrando("Luiz"));
