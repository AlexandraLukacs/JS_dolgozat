import { f1lista } from "./adat.js"
import { div } from "./fuggvenyek.js"

const ELEM = document.querySelector(".tartalom");
let csapat = div(f1lista);
ELEM.innerHTML += csapat;

const kartyaELEM = document.querySelectorAll(".csap")[0];
kartyaELEM.addEventListener("click", ravisz)

function ravisz(event){
    const kartyaELEM = document.querySelectorAll(".csap");
    for (let index = 0; index < kartyaELEM.length; index++) {
        document.getElementsByClassName("csap")[index].addEventListener += event.target.add(".kiv");
    }
}