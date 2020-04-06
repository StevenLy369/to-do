function ToDoList(){
   this.tasks= [];
  
}

ToDoList.prototype.addList = function(task){
   this.tasks.push(task);
   
}



function Task(description){
   this.description=description;
}


var task2 = new Task("wash clothes");




var todoList = new ToDoList();


$(document).ready(function(){
   $("#inputForm").submit(function(event){
      event.preventDefault();
      var inputTask = $("input#task").val();
       var task1 = new Task(inputTask);
       todoList.addList(task1);
       $("#outPut").html('');
       for(var i=0;i<todoList.tasks.length;i++){
         var list = $("#outPut");
         $("<li></li>").html(todoList.tasks[i].description).appendTo(list);
         $("input#task").val('');
       }
       
      });
   
});

//console.log(todoList.tasks[0].description);




