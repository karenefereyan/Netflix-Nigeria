// const acc = document.getElementsByClassName("faq-item");
// // console.log(acc);
// var i;

// for (i=0; i<acc.length; i++){
//     acc[i].addEventListener("click", function(){
//         this.classList.toggle("active")

//     })
    
// }
const accordionButton = document.getElementById('panel-opener');
accordionButton.addEventListener("click", function(){
    this.classList.toggle('active');
    console.log("Toggled!")

    var panel = document.getElementById("faq-item-description-text");
    //console.log("The next element sibling of myself is:", panel);
    if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }

})