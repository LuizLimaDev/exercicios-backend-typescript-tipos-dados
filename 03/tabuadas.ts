const tabuadas = (tabuadas: number[]): string => {
  let resultado: string = "";

  tabuadas.forEach((numero) => {
    for (let multiplicador = 0; multiplicador <= 10; multiplicador++) {
      resultado += `${numero} x ${multiplicador} = ${
        numero * multiplicador
      } \n`;

      if (multiplicador === 10) {
        resultado += `------------------------------ \n \n`;
      }
    }
  });

  return resultado;
};

console.log(tabuadas([7, 9]));
