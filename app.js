var userValue = +prompt("enter a number and generate its table:");

for (var i = 1; i<=userValue; userValue--) {

    for (var j = 1; j<=10; j++){
        document.write("<br>", userValue + " x " + j + "=" + userValue * j)
    }
    document.write("<br>")
}

