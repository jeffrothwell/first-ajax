document.addEventListener("DOMContentLoaded", function() {

  rootButtonEl = document.querySelector('button[name="root-button"]')
  pingPongButtonEl = document.querySelector('button[name="ping-pong-button"]')

  rootButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "get",
      dataType: "text"
    });
  });

  pingPongButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "get",
      dataType: "text"
    }).done(function(responseData){
      console.log(responseData);
    }).fail(function(){
      var failMsgEl = document.createElement('p');
      failMsgEl.innerHTML = "Sorry, I have failed.  I will try harder next time."
      document.querySelector('#step3456').appendChild(failMsgEl);
    });
  });


});
