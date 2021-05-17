let acc = document.getElementsByClassName("accordion");
let spanBtns = document.getElementsByClassName("faq-btn"); 
let i, j, k;

//console.log("The featured items are:", featuredItem);
//console.log("The span buttons are:", spanBtns);

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
   // console.log("The value of spanBtns is", spanBtns);
    
    if (panel.style.display === "block") {
      spanBtns[0].innerText = "+";
      panel.style.display = "none";
    } else {
      spanBtns[0].innerText ="x";
      panel.style.display = "block";
    }
  
  });
}
