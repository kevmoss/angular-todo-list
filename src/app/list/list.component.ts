import { Component, OnInit, Input } from '@angular/core';
import { TodoDataService } from '../todo-data.service';

@Component({
    moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private dataServices: TodoDataService) { }

  ngOnInit(): void{
    this.dataServices.getAllTodos();
  }
  get todos() {
    return this.dataServices.getAllTodos();
  }
  removeTodo(todo) {
    this.dataServices.deleteTodoById(todo.id);
  }
  toggleCompleted(todo){
    this.dataServices.toggleTodoComplete(todo)
  }

}
