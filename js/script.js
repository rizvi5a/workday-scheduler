$(".saveplan").on("click", function(){
var time=$(this).attr("id").split("-")[0];
var text=$("#"+time+"-plan").val()
console.log("Timer",time,text)
localStorage.setItem(time,text)
})