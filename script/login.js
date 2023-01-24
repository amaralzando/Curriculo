function validateForm() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  if (email == "" || pass == "") {
    alert("Um dos campos estäo sem preencher!");
    return;
  } 
  else if (pass.length < 9) {
    alert("A senha deve ter pelo menos 8 caracteres");
    return;
  }
}

function redirecionamentoCurriculo() {
  window.location.href = "http://127.0.0.1:5500/Curriculo.html";
}