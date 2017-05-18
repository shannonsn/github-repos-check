var textbox = document.getElementById('box');
var submitButton = document.getElementById('submit');
var display = document.getElementById('display');

function submit() {
    var url = "http://api.github.com/users/" + textbox.value;
    //makes the ajax call to the github api
    // alert($);
    $.get(url).then(function(result) {
        //result the response from the github call
        display.innerHTML = "Hi " + textbox.value + " you have " + result.public_repos + " github repository/repositories";
    });
};
