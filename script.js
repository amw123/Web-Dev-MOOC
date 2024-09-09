function sayHello() {

    const name =  prompt("What is your name?");
    alert("Hello "+name+ "! Welcome to my website.");
}

// sayHello();

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    alert("You have rolled a "+ dice)
}

// rollDice()

let darkModeOn = false 


    
/* Dark-mode Colour Palette:
Off-black  #121212            background
Red     #FF0000               title / bigger headers
Orange  #FF8200                headers
Amber   #FFC100                main text
Vanilla #FFEAAE                emphasis

Other Colours I Might Want To Come Back To:
#CA9CE1        pale pink
#EAD5E6
#F2BEFC        pale orange?
*/

    /*
    
    if (darkModeOn==false) {                  // Dark mode
        document.body.style.background = "#121212"; //dark grey

        // Figure out how to add images into the dark mode
        //document.getElementsByTagName("body").style.backgroundImage = "url('BWhockey.jpeg')"

        document.getElementById("mainTitle").style.background =  "#121212"; 
        document.getElementById("mainTitle").style.color = "#FF0000";
        //document.getElementById("mainTitle").style.border = "#CA9CE1";

        document.getElementById("intro").style.color = "#FFC100";
        // document.getElementById("intro").style.textShadow = "1px, 1px, white";

        document.getElementById("posTitle").style.background = "#121212";
        document.getElementById("posTitle").style.color = "#FF8200";
        //document.getElementById("posTitle").style.textDecoration = "underline";
        //document.getElementById("posTitle").style.textDecorationColor = "lightblue";
        //document.getElementById("posTitle").style.textDecorationThickness ="2px";

        document.getElementById("pos-text").style.background = "#121212";
        document.getElementById("pos-text").style.color = "#FFC100";
        
        //document.getElementById("def").style.background = "#121212";   // we want to leave the color as it is
        document.getElementById("def").style.color = "#FFC100";
        //document.getElementById("mid").style.background = "#121212";
        document.getElementById("mid").style.color = "#FFC100";
        document.getElementById("att").style.background = "#250144"; //dark purple
        document.getElementById("att").style.color = "#FFC100";


        document.getElementById("goalie").style.background = "#121212";
        document.getElementById("goalie").style.color = "pink";
        document.getElementById("goalieTitle").style.color = "white";
        

        darkModeOn =true
    }
    else {

    }




    if (darkModeOn ==false){
        document.getElementByTagName("link").style.rel = "stylesheet";
        document.getElementByTagName("link").style.href = "./darkStyle.css";
        darkMode = true;
    }
    else if (darkModeOn == true) {
        document.getElementByTagName("link").style.rel = "stylesheet";
        document.getElementByTagName("link").style.href = "./style.css";
        darkMode = false;






    */
    //document.body.style.color = "white";
    // document.h1.style.backgroundColor = "black";
    // document.span.style.color = "light-green";
    // document.getElementById("pos").h2.style.backgroundColor = "red";
    // document.getElementById("pos").h2.style.color = "purple";
    // document.getElementById("pos-text").style.color = "green";
    // document.getElementById("rules-list").h2.style.backgroundColor = "black";
    // document.getElementById("rules-list").style.color = "pink";
function darkMode() {
    var theme = document.getElementsByTagName('link')[0];  
    if (theme.getAttribute('href') == 'style.css') { 
        theme.setAttribute('href', 'mutedStyle.css'); 
    } else { 
        theme.setAttribute('href', 'style.css'); 
    }
}