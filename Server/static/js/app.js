var modal = document.getElementById("myModal");
var span = document.getElementById("modal_close");

//Method for handling display of form
function predictionForm() {
  modal.style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("modal_heading").style.display = "block";
  document.getElementById("predictionform").style.display = "block";
  document.getElementById("profile").style.display = "None";
  document.getElementById("great").style.display="None"
  document.getElementById("good").style.display="None"
  document.getElementById("avg").style.display="None"
}

//Method for form reset
function form_reset() {
  document.getElementById("predictionform").reset();
}

//Method for displaying about page
function aboutDeveloper() {
  modal.style.display = "block";
  document.getElementById("great").style.display="None"
  document.getElementById("good").style.display="None"
  document.getElementById("avg").style.display="None"
  document.getElementById("profile").style = "block";
}

//Onclick listerner for closing registration or okta-reset form
function closeModal() {
  modal.style.display = "none";
  document.getElementById("modal_heading").style.display = "none";
  document.getElementById("predictionform").style.display = "none";
  location.reload()
}


predictionform.addEventListener("submit", async e => {
 var GRE_SCORE=document.getElementById("gre-score").value
 var UNIVERSITY_RATING=document.getElementById("university-rating").value
 var SOP=document.getElementById("sop").value
 var LOR=document.getElementById("lor").value
 var RESEARCH_PAPER=document.getElementById("research-paper").value
//  console.log(GRE_SCORE,UNIVERSITY_RATING,SOP,LOR,RESEARCH_PAPER)
document.getElementById("submitForm").disabled=true
document.getElementById("predictionFormReset").disabled=true
 var body=JSON.stringify({
     GRE_SCORE,
     UNIVERSITY_RATING,
     SOP,
     LOR,
     RESEARCH_PAPER
 })
  
await fetch("/prediction",{method:"POST",body}).then((res)=>{
  return res.json()
 }).then((data)=>{
   console.log(data.prediction)
   document.getElementById("alert").style.display="Block"   
  //  alert(`Your chance for getting admission are ${data.prediction}`)
   document.getElementById("predictionform").style.display="None"
   document.getElementById("closeAlert").style.display="Block"
   let prediction=data.prediction
   if(prediction>=65){
     document.getElementById("great").style.display="Block"
     document.getElementById("greatAlert").innerText=prediction      
     return
    }
    else if(prediction<65 && prediction>=35){
      document.getElementById("good").style.display="Block"
      document.getElementById("goodAlert").innerText=prediction      
      return
     }
     document.getElementById("avg").style.display="Block"
     document.getElementById("avgAlert").innerText=prediction 
 })
})