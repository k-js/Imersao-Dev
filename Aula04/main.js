function adicionarFilme() {
  var NomeDoFilme = document.getElementById("filmeNome").value;
  var filmeFavorito = document.getElementById("filme").value;
  if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    //    console.error("Endereço de filme inválido");
    alert("Endereço de filme inválido");
  }
  document.getElementById("filme").value = "";
  document.getElementById("filmeNome").value = "";
}

console.log("campoFilmeFavorito");