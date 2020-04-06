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
      console.log("inputTask   "+inputTask)
      // var todoList = new ToDoList();
       var task1 = new Task(inputTask);
       todoList.addList(task1);
       console.log(todoList.tasks[0].description);
       //$("#outPut").text();
       var list = $("#outPut");
        $("<li></li>").html(todoList.tasks[0].description).appendTo(list);
    
      
      // console.log(task1)
      // console.log( "--->"+todoList.addList(task1));

      
      
      
      
      
   });
   
});






