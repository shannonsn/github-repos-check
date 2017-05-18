var textbox = document.getElementById('box');
var submitButton = document.getElementById('submit');
var display = document.getElementById('display');

function submit(){
  // if(textbox !== ''){
  // display.innerHTML = "https://github.com/" + textbox.value
  //  }
  var url= "http://api.github.com/users/" + textbox.value;
  //makes the ajax call to the github api
  // alert($);
  $.get(url).then(function(result){
    //result the response from the github call
    display.innerHTML = result.public_repos;
  })
};
