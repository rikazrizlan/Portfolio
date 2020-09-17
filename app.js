function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


//darkBtn.addEventListener('click', ()=>{
  //  const parent = darkBtn.parentElement;
    //const parentSibling = parent.nextElementSibling;
    //const parentSibling2 = parentSibling.nextElementSibling;
    //parent.classList.toggle("banner-dark");
    //parentSibling.classList.toggle("banner-dark");
    //parentSibling2.classList.toggle("banner-dark");
//});

/*
const texts = ['HTML5','CSS3','JavaScript','Bootstrap','AdobeXD','Figma'];

let index = 0; //indexes of the elements in the array
let count = 0; //individual letters
let currentText = '';
let letter = '';


(function type(){


    if(index===texts.length){
        index = 0;
    }
    currentText = texts[index];
    letter = currentText.slice(0, ++count);

    if(letter.length == currentText.length){
        index++;
        count = 0;
    }

    document.querySelector('.typing').textContent = letter;

    setTimeout(type, 250);

}());
*/