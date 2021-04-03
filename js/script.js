
 var timeDisplayEl = $('#clock');
 // handle displaying the time
 function displayTime() {
     var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
     timeDisplayEl.text(rightNow);
   };
 
   setInterval(displayTime, 1000);
 
// Id #-Plan is split into #  and -plan 
// using JQuery on ("click", function())
// on the button of  "saveplan" class "id", 
// and changing the " id" attribute of #-plan class [0]
$(".saveplan").on("click", function () {
    var time = $(this).attr("id").split("-")[0];
    var text = $("#" + time + "-plan").val()
// time and text are stored in local storage 
// under the concatenated  id and -plan of the clicked saved button
// 
    console.log("Timer", time, text)
    localStorage.setItem(time, text)
})

//current time is converted into 24:00 hours format
// to use 9:000 to 18:000 hours to get stored text 
// from local storage area and to chnage the background colors
// using a for loop from 9 to 18
// and getting the item  stored in localstorage under concatenated #-plan id.
var currentHour = moment().hours()

    for (var i = 9; i <= 18; i++) {
        console.log(currentHour, localStorage.getItem(i))
        $("#" + i + "-plan").val(localStorage.getItem(i))
        if(currentHour> i){
            $("#" + i + "-plan").addClass("past")     
        }else if(currentHour == i){
            $("#" + i + "-plan").addClass("present")     
        }else{
            $("#" + i + "-plan").addClass("future")     
        }
    }
