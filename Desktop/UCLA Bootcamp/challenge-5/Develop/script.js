tasks = [];

// loadTasks 
var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    if (!tasks) {
        tasks = {};
    };
    printTasks(tasks)
}

var printTasks = function () {
    $.each(tasks, function (list, arr) {
        var taskP = $("<p>").addClass("description task-item-" + list).text(arr)

        // console.log(list)
        // console.log(taskP);

        $("#task-item-" + list).replaceWith(taskP);
    })
}

var Today = (moment().format("MM D, YYYY"))
$("#currentDay").text(Today);

// Color code bins
var hourAudit = function() {
    var currentHour = moment().hour()

    for(var i=8; i<18; i++) {
        var taskArea = $("#task-"+i)
        
    }
}
