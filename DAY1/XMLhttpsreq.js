var todosApi = 'https://jsonplaceholder.typicode.com/todos/';


var todoRequest = new XMLHttpRequest();
todoRequest.onreadystatechange = function() {
    var todos = JSON.parse(this.response);
    if (todos.length >= 0) {
        for (var x = 0; x < todos.length; x++){
            console.log(todos[x].title);

        }
    }
}
todoRequest.open("GET", todosApi);
todoRequest.send();

console.log(todoRequest)

