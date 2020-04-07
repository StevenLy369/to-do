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
ToDoList.prototype.findTask = function(id){
   for(var i = 0;i<this.tasks.length; i++){
     if(this.tasks[i]){
       if(this.tasks[i].id === id){
         return i;
       }
     }
     
   }
  return false;    
 }

ToDoList.prototype.deleteTask = function(index){
    delete this.tasks[index];
}
  
function Task(description){
   this.description=description;
}
var todoList = new ToDoList();

function deleteTaskFmList(id){
    var index = todoList.findTask(id);
   console.log(index+ " index");
  
  todoList.deleteTask(index);
  showTaskList();
  console.log(taskRemove);
}


function taskDone(id){
 alert("Task has completed");
}




function showTaskList(){
   $("#outPut").html('');
   for(var i=0;i<todoList.tasks.length;i++){
      if(todoList.tasks[i]){
         var inputId = todoList.tasks[i].id;
         var list = $("#outPut");
         //<input type='checkbox' onclick='taskDone("++")>
         var demoTask ="<input type='checkbox' onclick='taskDone("+inputId+")'>"+
         todoList.tasks[i].description+
         "<img src='img/Delete.png' style='height: 30px;width: 30px;' alt='delete_image' onclick='deleteTaskFmList("+inputId+")'>"
         $("<li></li>").html(demoTask).appendTo(list);
            
      }
     
   }
}

$(document).ready(function(){
   $("#inputForm").submit(function(event){
      event.preventDefault();
      var inputTask = $("input#task").val();
       var task1 = new Task(inputTask);
       todoList.addList(task1);
       console.log(task1.id+ "====>")
       showTaskList();
      $("input#task").val('');
       
      
   });
   
});






