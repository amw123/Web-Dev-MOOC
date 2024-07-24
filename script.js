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

function darkMode() {
    // if (dark == true){     //  Light mode
    //     dark = false;

    //     document.body.style.color = "black";
    //     document.h1.style.backgroundColor = "white";
    //     document.span.style.color = "white";
    //     document.getElementById("pos").h2.style.backgroundColor = "white";
    //     document.getElementById("pos").h2.style.color = "black";
    //     document.getElementById("pos-text").style.color = "black";
    //     document.getElementById("rules-list").h2.style.backgroundColor = "white";
    //     document.getElementById("rules-list").style.color = "black";
    // }
    
    if (darkModeOn==false) {                  // Dark mode
        document.body.style.background = "black";

        document.getElementById("pos").style.background = "black";
        document.getElementById("pos").style.color = "lightgreen";

        document.getElementById("goalie").style.background = "black";
        document.getElementById("goalie").style.color = "pink";

        darkModeOn =true
    }
    //document.body.style.color = "white";
    // document.h1.style.backgroundColor = "black";
    // document.span.style.color = "light-green";
    // document.getElementById("pos").h2.style.backgroundColor = "red";
    // document.getElementById("pos").h2.style.color = "purple";
    // document.getElementById("pos-text").style.color = "green";
    // document.getElementById("rules-list").h2.style.backgroundColor = "black";
    // document.getElementById("rules-list").style.color = "pink";
    
    
} 

