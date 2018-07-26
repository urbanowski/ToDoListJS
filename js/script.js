$("document").ready(function(){
    $("#add").click(function(){
        var taskValue = $("#taskValue").val();
        if (taskValue !== ""){
            AddTask(taskValue);
            ClearInputField();
        }
    });
})

function AddTask(task){
    var item = $("<li></li>").text(task);
    $("#taskList").append(item);
}

function ClearInputField(){
    $("#taskValue").val() = "";
}