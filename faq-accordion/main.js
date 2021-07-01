'use strict'

const questions = document.getElementById("questions");
/* Mantener los desplegables en su sitio si recargamos la pagina */
for (let i = 1; i < questions.children.length; i++) {
    if(questions.children[i].children[0].children[0].checked){
        questions.children[i].classList.remove("question__block");
        questions.children[i].classList.add("question__block__selected");
        questions.children[i].children[0].nextElementSibling.classList.remove("answer");
        questions.children[i].children[0].nextElementSibling.classList.add("answer__selected");
    }
}
/*Evento de escucha para que el acordeón funcione*/
questions.addEventListener("click", (e) => {
    if(e.target.name === "first" || e.target.name === "second" || e.target.name === "third" || e.target.name === "fourth" || e.target.name === "fifth") {
        if(e.target.checked == true){
            e.target.parentNode.parentNode.classList.remove("question__block");
            e.target.parentNode.parentNode.classList.add("question__block__selected");
            e.target.parentNode.nextElementSibling.classList.remove("answer");
            e.target.parentNode.nextElementSibling.classList.add("answer__selected");
        }else{
            e.target.parentNode.parentNode.classList.remove("question__block__selected");
            e.target.parentNode.parentNode.classList.add("question__block");
            e.target.parentNode.nextElementSibling.classList.remove("answer__selected");
            e.target.parentNode.nextElementSibling.classList.add("answer");
        }
    }
});
