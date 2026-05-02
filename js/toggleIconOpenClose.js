const btnOpenIcon = document.getElementById("btnOpenIcon");
const btnOpen = document.getElementById("btnOpen");

btnOpen.addEventListener("click" , ()=>{

  if(btnOpenIcon.classList.contains("bi-chevron-right")){
        btnOpenIcon.classList.remove("bi-chevron-right")
        btnOpenIcon.classList.add("bi-chevron-left")
    }
    else{
        btnOpenIcon.classList.add("bi-chevron-right")
        btnOpenIcon.classList.remove("bi-chevron-left")
    }
})
