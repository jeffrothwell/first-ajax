document.addEventListener("DOMContentLoaded", function() {

  var rootButtonEl = document.querySelector('button[name="root-button"]')
  var pingPongButtonEl = document.querySelector('button[name="ping-pong-button"]')
  var countButtonEl = document.querySelector('button[name="count-button"]')
  var timeButtonEl = document.querySelector('button[name="time-button"]')
  var carButtonEl = document.querySelector('button[name="car-button"]')

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

  timeButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/time",
      method: "get",
      data: {"timezone": 'Pacific/Honolulu',},
      dataType: "text"
    }).done(function(responseData){
      var timeMsgEl = document.createElement('p');
      timeMsgEl.innerHTML = responseData;
      document.querySelector('#step8').appendChild(timeMsgEl);
    })
  });

  carButtonEl.addEventListener('click', function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/a_car",
      method: "get",
      dataType: "html"
    }).done(function(responseData){
      var carMsgEl = document.createElement('ul');
      carMsgEl.innerHTML = responseData;
      document.querySelector('#step9').appendChild(carMsgEl);
    })
  });

});
