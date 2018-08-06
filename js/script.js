$(document).ready(function(){

    //Add Task after Click ADD Button 
    $("#add").click(function(){
        var taskValue = $("#taskValue").val();
        if (taskValue !== ""){
            AddTask(taskValue);            
            
            //Clear input field
            ClearInputField();
        }
    });

    //Add Task after Press ENTER
    $("#taskValue").keyup(function(event){
        if (event.keyCode === 13){
            $("#add").click();        
        }
    });
});

function AddTask(task){
    var item = $("<li></li>").text(task).click(function(e){
        $(this).toggleClass("taskDone");
        // e.stopPropagation();
    });
    
    //Add "Delete" Button to item
    var delBtn = $("<button class='deleteBtn'></button>").text("X").click(function(e){
        //stopPropation wyłącza event Click u rodzica("li")
        e.stopPropagation();
        $(this).parent().text("Deleting...").animate({
                width: "0%"
                }, 
                700, 
                function(){
                    $(this).remove();
                }
            );
        }
    );

    item.append(delBtn);

    $("#taskList").append(item);
}

function ClearInputField(){
    $("#taskValue").val("");
}
