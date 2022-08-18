import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import * as platform from "https://cdn.skypack.dev/platform@1.3.6";

$(function(){
  let hour = 21600;
  $('#ymd').text(new Date().toLocaleString());
  $('#ip').text(platform.description);
  setInterval(() => {
    $('#s').text(Math.floor(hour / 3600));
    $('#e').text(Math.floor((hour % 3600) / 60));
    $('#c').text(Math.floor(hour % 60));
    hour = hour-1
  },1000)
})
  
