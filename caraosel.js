let caraosel = document.querySelector(".caraosel");

let isdragStart = false;
let dragStart=()=>{
  isdragStart = true;
}
let dragging = (k)=>{
    if(!isdragStart) return;
    k.preventDefault();
    caraosel.scrollLeft = k.pageX;
}
let dragStop=()=>{
    isdragStart = false;
}

caraosel.addEventListener("mousedown",dragStart);
caraosel.addEventListener("mousemove",dragging);
caraosel.addEventListener("mouseup",dragStop);

