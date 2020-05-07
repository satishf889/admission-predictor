var modal = document.getElementById("myModal");
var span = document.getElementById("modal_close");

//Method for handling display of form
function predictionForm() {
  modal.style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("predictionform").style.display = "block";
}

//Method for form reset
function form_reset() {
  document.getElementById("predictionform").reset();
}

//Method for displaying about page
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


predictionform.addEventListener("submit", async e => {
 var GRE_SCORE=document.getElementById("gre-score").value
 var UNIVERSITY_RATING=document.getElementById("university-rating").value
 var SOP=document.getElementById("sop").value
 var LOR=document.getElementById("lor").value
 var RESEARCH_PAPER=document.getElementById("research-paper").value
 console.log(GRE_SCORE,UNIVERSITY_RATING,SOP,LOR,RESEARCH_PAPER)

 var body=JSON.stringify({
     GRE_SCORE,
     UNIVERSITY_RATING,
     SOP,
     LOR,
     RESEARCH_PAPER
 })
  
 await fetch("/prediction",{method:"POST",body}).then((res)=>{
    console.log(`Response is {JSON.stringify(res,null,2)}`)
 })
//  .catch((err)=>{
//     alert("Something went wrong. Please try again.")
//  })

})