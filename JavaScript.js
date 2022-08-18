

$(function(){
  let hour = 21600;
  setInterval(() => {
    $('#s').text(Math.floor(hour / 3600));
    $('#e').text(Math.floor((hour % 3600) / 60));
    $('#c').text(Math.floor(hour % 60));
    hour = hour-1
  },1000)
  $('#ymd').text(new Date().toLocaleString());
  $('#ip').text(platform.description);
})
  
