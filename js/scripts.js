function ToDoList(){
   this.tasks= [];
   this.currentId=0;
  
}

ToDoList.prototype.addList = function(task){
   task.id=this.assignId();
   this.tasks.push(task);
   
}

ToDoList.prototype.assignId= function(){
   this.currentId += 1;
   return this.currentId;
}

ToDoList.prototype.deleteList = function(id){
   
}



function Task(description){
   this.description=description;
}


var task2 = new Task("wash clothes");



function taskDone(id){
 alert("Task has completed");
}

var todoList = new ToDoList();


$(document).ready(function(){
   $("#inputForm").submit(function(event){
      event.preventDefault();
      var inputTask = $("input#task").val();
       var task1 = new Task(inputTask);
       todoList.addList(task1);
       $("#outPut").html('');
       for(var i=0;i<todoList.tasks.length;i++){
          var inputId = todoList.tasks[i].id;
         var list = $("#outPut");
         $("<li></li>").html("<input type='checkbox' onclick='taskDone(inputId)'>"+todoList.tasks[i].description).appendTo(list);
         $("input#task").val('');
       }
      
      });
   
});

//console.log(todoList.tasks[0].description);




