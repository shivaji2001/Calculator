var result = 0;
var input = "";
var resultdisplayed = false;

var buttons = document.getElementsByTagName('td');
var disp = document.getElementById('display');


buttons[1].addEventListener('click',
    function() {
        result = 0;
        input = "";
        disp.innerText = input;
    }
);



buttons[2].addEventListener('click',
    function() {
        input = input + "+";
        disp.innerText = input;
    });
buttons[3].addEventListener('click',
    function() {
        input = input + "%";
        disp.innerText = input;
    });
buttons[4].addEventListener('click',
    function() {
        input = input + "/";
        disp.innerText = input;
    });
buttons[5].addEventListener('click', function() {
    input = input + "7";
    disp.innerText = input;
});

buttons[6].addEventListener('click',
    function() {
        input = input + "8";
        disp.innerText = input;
    });
buttons[7].addEventListener('click',
    function() {
        input = input + "9";
        disp.innerText = input;
    });
buttons[8].addEventListener('click',
    function() {
        input = input + "*";
        disp.innerText = input;
    });
buttons[9].addEventListener('click',
    function() {
        input = input + "4";
        disp.innerText = input;
    });
buttons[10].addEventListener('click',
    function() {
        input = input + "5";
        disp.innerText = input;
    });
buttons[11].addEventListener('click',
    function() {
        input = input + "6";
        disp.innerText = input;
    });
buttons[12].addEventListener('click',
    function() {
        input = input + "-";
        disp.innerText = input;
    });
buttons[13].addEventListener('click',
    function() {
        input = input + "1";
        disp.innerText = input;
    });
buttons[14].addEventListener('click',
    function() {
        input = input + "2";
        disp.innerText = input;
    });
buttons[15].addEventListener('click',
    function() {
        input = input + "3";
        disp.innerText = input;
    });
buttons[16].addEventListener('click',
    function() {
        input = input + "+";
        disp.innerText = input;
    });
buttons[17].addEventListener('click',
    function() {
        input = input + "0";
        disp.innerText = input;
    });
buttons[18].addEventListener('click',
    function() {
        result = eval(input);
        disp.innerText = result;
        input = result;
    });