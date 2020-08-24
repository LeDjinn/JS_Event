//------------Fonctionalité------------------------



let footerCounter = 0;
document.getElementsByTagName("footer")[0].addEventListener("click", function(){
  footerCounter++;
	console.log(`Click number ${footerCounter}`);
});


//////--------Fonctionalité 2-----------------------

let menu = document.getElementById("navbarHeader");
let boutton = document.querySelector(".navbar-toggler-icon");

function openOrCloseMenu() 
{
    menu.classList.toggle("collapse");
}

boutton.addEventListener("click", openOrCloseMenu);

//////--------Fonctionalité 3-----------------------

/////----- Version LeDjinn--------

// let card = document.getElementsByClassName("card-body")[0];
// function changeColor (){
//     card.getElementsByTagName("p")[0].style.color = 'red' ;
// }

// addEventListener ("click", changeColor)

///////----Version Nini ---------

let card = document.getElementsByClassName("card-body")[0];
function changeColor (){
    card.getElementsByTagName("p")[0].classList.add("text-danger")
}

card.addEventListener ("click", changeColor)

/////--------- Fonctionalité 4 ------------
/////--------- Version Le Djinn -----------

let secondCard = document.getElementsByClassName("card-body")[1];
var x = 0;

  function changeColorGreen() {
    if (x == 0) {
        secondCard.getElementsByTagName("p")[0].style.color = ' green';
      x = 1;
    } else {
        secondCard.getElementsByTagName("p")[0].style .color = 'black';
      x = 0;
    }
  }
  secondCard.addEventListener ("click", changeColorGreen)


  ///////-------Fonctionalité 5
  var navbar = document.getElementById('navbarHeader');
  navbar.ondblclick = function noStyleSheet(){
    
    document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
    console.log('ça marche le double click');

    addEventListener ('dbclick', noStyleSheet)
}
//////-----------Fonctionalité 6

let cards = document.getElementsByClassName("card");
let button_view = document.getElementsByClassName("btn-success");


for(let i = 0; i < cards.length; i++)
{
    function view()
    {
        if (cards[i].getElementsByClassName("card-text")[0].style.display != "none")
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "none";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "20%";
        }
        else
        {
            cards[i].getElementsByClassName("card-text")[0].style.display = "block";
            cards[i].getElementsByClassName("card-img-top")[0].style.width = "100%";
        }
    }

    button_view[i].addEventListener("mouseover", view);
}
