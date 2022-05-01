//---Get current time and date---//
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//-----Whole Function--------//
$(document).ready(function () {
    //---Function that saves to local storage---//
    $(".saveBtn").on("click", function () {
        //---Create var for text and time boxes from html----//
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
    //------Displaying from Local storage-----//
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();

   //--Function That retrieves time---//
    function timeTracker() {
        //---Get current time---//
        var timeNow = moment().hour();

        //---Function that loops through time blocks---//
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //--Adding correct times for each section--//
            //---For Past time---//
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }   //---For present time---//
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }   //---For future time---//
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
        //---End of Function that Loops through time blocks---//
    }
    //--End of Function that retrieves time--//
})
//-------End of Whole Function-------//