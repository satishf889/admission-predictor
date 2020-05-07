var modal = document.getElementById("myModal");
var span = document.getElementById("modal_close");

function predictionForm() {
  modal.style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("predictionform").style.display = "block";
}

function form_reset() {
  document.getElementById("licensee_registration").reset();
}

function aboutDeveloper() {
  modal.style.display = "block";
  document.getElementById("profile").style = "block";
}

//Onclick listerner for closing registration or okta-reset form
function closeModal() {
  modal.style.display = "none";
  document.getElementById("modal_heading").style.display = "none";
  document.getElementById("predictionform").style.display = "none";
}
