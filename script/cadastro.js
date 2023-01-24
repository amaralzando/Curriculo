function validateForm() {  
  var user = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("senha").value;
  if (!user || !email|| !pass) {
    alert("Um dos campos estäo sem preencher!");
    return false;
  } 
  else if (pass.length < 9) {
    alert("A senha deve ter pelo menos 8 caracteres");
    return false;
  }
  return true;
}

function redirecionamentoLogin() {
  window.location.href = "index.html";
}