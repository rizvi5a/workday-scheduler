$(".saveplan").on("click", function () {
    var time = $(this).attr("id").split("-")[0];
    var text = $("#" + time + "-plan").val()
    console.log("Timer", time, text)
    localStorage.setItem(time, text)
})
var currentHour = moment().hours()

    for (var i = 9; i <= 18; i++) {
        console.log(currentHour, localStorage.getItem(i))
        $("#" + i + "-plan").val(localStorage.getItem(i))
        if(currentHour> i){
            $("#" + i + "-plan").addClass("bg-primary")     
        }else if(currentHour == i){
            $("#" + i + "-plan").addClass("bg-info")     
        }else{
            $("#" + i + "-plan").addClass("bg-secondary")     
        }
    }
