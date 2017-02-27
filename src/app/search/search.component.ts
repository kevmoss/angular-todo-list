import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  ToDoTitle: String;
  Todo: Todo;
  constructor( private dataServices: TodoDataService,) { }

  addToDo(): void {
    // this.dataServices.addTodo(this.ToDo);
    // console.log(this.ToDoTitle)    
    //  console.log(this.ToDo) 
    
  }
  ngOnInit() {
  }

}
