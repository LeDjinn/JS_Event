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
