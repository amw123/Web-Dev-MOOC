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