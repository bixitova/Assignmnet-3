// couldn't manage to make my js code work
var firstBid = 500;
var education =document.getElementById ("education");
var networth = document.getElementById ("networth");
var skills = document.getElementById ("skills");
var age = document.getElementById ("age");
var reputation = document.getElementById ("reputation");
var button = document.getElementById ("submit");

button.addEventListener("click", calculate6);

function calculate1(){
    if (education.children[1].getAttribute("value") == "Bachelor's degree")
    {
        var result1 = 1.5 * Number(firstBid);
    }
    else if (education.children[2].getAttribute("value") == "College degree")
    {
        var result2 = 1.2 * Number(firstBid);
    }
    else if (education.children[3].getAttribute("value") == "High school degree")
    {
        var result3 = 1.05 * Number(firstBid);
    }
    else if (education.children[4].getAttribute("value") == "Middle school degree")
    {
        var result4 = 0.9 * Number(firstBid);
    }
}
function calculate2(){
    if (networth.children[1].getAttribute("value") == "More than 100,000$")
    {
        var result5 = 2 * Number(firstBid);
    }
    else if (networth.children[2].getAttribute("value") == "Between 50,000$ and 100,000$")
    {
        var result6 = 1.5 * Number(firstBid);
    }
    else if (networth.children[3].getAttribute("value") == "Less than 50,000$")
    {
        var result7 = 1.2 * Number(firstBid);
    }
}
function calculate3(){
    if (skills.children[0].getAttribute("value") == "Playing Dombra")
    {
        var result8 = 100 + Number(firstBid);
    }
    else if (skills.children[1].getAttribute("value") == "Good Cook")
    {
        var result9 = 200 + Number(firstBid);
    }
    else if (skills.children[2].getAttribute("value") == "Easy going Character")
    {
        var result10 = 150 + Number(firstBid);
    }
    else if (skills.children[3].getAttribute("value") == "Sings well")
    {
        var result11 = 100 + Number(firstBid);
    }
    function calculate4(){
        if (age.children[0].getAttribute("value") == "Between 18-23")
        {
            var result12 = 1.5 * Number(firstBid);
        }
        else if (age.children[1].getAttribute("value") == "Between 24-27")
        {
            var result13 = 1.2 * Number(firstBid);
        }
        else if (age.children[2].getAttribute("value") == "28+")
        {
            var result14 = 0.95 * Number(firstBid);
        }
        function calculate5(){
            if (reputation.children[0].getAttribute("value") == "Gossips about his/her parent's attitude")
            {
                var result15 = 0.85 * Number(firstBid);
            }
            else if (reputation.children[1].getAttribute("value") == "Gossips about his/her character")
            {
                var result16 = 0.9 * Number(firstBid);
            }
            else if (reputation.children[2].getAttribute("value") == "General gossips around his/her person")
            {
                var result17 = Number(firstBid) - 200;
            }
            function calculate({
                calculate1 + calculate2 + calculate3 + calculate4 + calculate5 + calculate6;
                alert(result)
            })
}
