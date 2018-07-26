$("document").ready(function(){
    
    //Add Task Event
    $("#add").click(function(){
        var taskValue = $("#taskValue").val();
        if (taskValue !== ""){
            AddTask(taskValue);            
            
            //Clear input field
            ClearInputField();

            //Delete Task Event
            $(".deleteBtn").click(function(){
                $(this).parent().remove();
                }
            );
        }
    });
});

function AddTask(task){
    var item = $("<li></li>").text(task);
    
    //Add "Delete" Button to item
    var delBtn = $("<button class='deleteBtn'></button>").text("X");
    item.append(delBtn);

    $("#taskList").append(item);
}

function ClearInputField(){
    $("#taskValue").val("");
}