let num1;
let num2;
let res = 0;

function close1(){
    if(confirm('Do you want close!!!')){
        document.getElementById("reset1").reset();
        document.getElementById("reset2").reset();

        document.getElementById("val1").innerHTML = "Start";
        document.getElementById("val2").innerHTML = "Start";
        document.getElementById("user2").innerHTML = "Score";
        res = 0;
    }
    else{
        alert("Please enter a sum!!!");
    }
}
//
var seconds = 40;
/*
if (localStorage.getItem("counter")) {
        if (localStorage.getItem("counter") <= 0) {
            var value = seconds;
            alert(value);
        } else {
            var value = localStorage.getItem("counter");
        }
    } else {
        var value = seconds;
    }
    document.getElementById("timer").innerHTML = value;
*/
      var counter = function() {
        if (value <= 1) {
            alert("Timeout!!!");
            localStorage.setItem("counter", seconds);
            value = seconds;
        } else {
            value = parseInt(value) - 1;
            localStorage.setItem("counter", value);
        }
        document.getElementById("timer").innerHTML = value;
    };

    var interval = setInterval(function() { counter(); }, 1000);

    var resetCounter = () => {
        value = seconds;
        localStorage.removeItem("counter");
      };
//
function start1(){
    let username = document.getElementById("user1").value;
    if(username.length >=1){
        num1 = Math.floor(Math.random() * 100)+1;
        num2 = Math.floor(Math.random() * 100)+1;

        document.getElementById("val1").innerHTML = num1;
        document.getElementById("val2").innerHTML = num2;
        resetCounter()
    }
    else{
        alert('Please enter your name!!!');
    }
}

function save1(){
    let username = document.getElementById("user1").value;
    if(username.length >=1){
        let sum = document.getElementById("val3").value;
        if(sum .length >=1){
            if(Number(sum) == (num1+num2)){
                res+=1;
                document.getElementById("user2").innerHTML = res;
                document.getElementById("reset1").reset();
                start1();
            }
            else{
                alert('Sorry wrong answer, please start again!!!');
                res = 0;
                document.getElementById("reset1").reset();
                document.getElementById("user2").innerHTML = res;
                start1();
            }  
        }
        else{
            alert('Please enter a sum!!!');
        } 
    } 
    else{
        alert('Please enter your name!!!');
    }  
}