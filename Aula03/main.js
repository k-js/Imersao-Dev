
var listaFilmes = ["Yesterday", "A chegada", "Escola de rocke", "Harry Potter 2"]
// elemento          1               2              3               4
// índece            0               1              2               3

//adc novos elemntos
listaFilmes.push("Harru 2");

// experimente h1 , strong
/**document.write("<p>" + listaFilmes[0] + "<p>");
document.write("<p>" + listaFilmes[1] + "<p>");
document.write("<p>" + listaFilmes[2] + "<p>");
document.write("<p>" + listaFilmes[3] + "<p>");
document.write("<p>" + listaFilmes[4] + "<p>"); */

for( var indice = 0; indece < 5; indice = indice + 1) {
  document.write("<p>" + listaFilmes[indice] + "<p>")
}