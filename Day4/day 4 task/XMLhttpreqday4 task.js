
var todosApi = 'https://jsonplaceholder.typicode.com/todos/';

var todo = new XMLHttpRequest()
todo.onreadystatechange = function () {
    var todos = JSON.parse(this.response)
    if (todos.length >= 0) {
      
        console.log('forloop')

        for (var i = 0; i < todos.length; i++){
            console.log(todos[i].title)
        }

     console.log('for in')
  
        for (var i in todos) {
            console.log(todos[i].id);
        }


        console.log('for of ');

        for (var i of todos) {
            console.log(i.userId);
        }


        console.log('forEach');

        todos.forEach(function (index, value) {
            console.log(index.title,value);

        })
            
       


    }
}




todo.open('GET', todosApi)
todo.send()
console.log(todo);


console.log('Resume')



