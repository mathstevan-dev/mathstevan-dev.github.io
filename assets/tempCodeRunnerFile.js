function digitar2() {

    if (indiceTexto1 < texto1.length) {  

        texto1.textContent += texto1[indiceTexto1];

        indiceTexto1++;
        setTimeout(digitar2, 100);
        
    }
 
  }