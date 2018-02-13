document.addEventListener("DOMContentLoaded", function() {

  var rootButtonEl = document.querySelector('button[name="root-button"]')
  var pingPongButtonEl = document.querySelector('button[name="ping-pong-button"]')
  var countButtonEl = document.querySelector('button[name="count-button"]')

  rootButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "get",
      dataType: "text"
    });
  });

  pingPongButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/ping",
      method: "get",
      dataType: "text"
    }).done(function(responseData){
      console.log(responseData);
    }).fail(function(request){
      console.log(request.responseText);
      var failMsgEl = document.createElement('p');
      failMsgEl.innerHTML = "Sorry, I have failed.  I will try harder next time."
      document.querySelector('#step3456').appendChild(failMsgEl);
    }).always(function(){
      console.log('Hey the request finished!');
    });
  });

  countButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/count",
      method: "get",
      dataType: "text"
    }).done(function(responseData){
      var countMsgEl = document.createElement('p');
      countMsgEl.innerHTML = responseData;
      document.querySelector('#step7').appendChild(countMsgEl);
    })
  });

});
