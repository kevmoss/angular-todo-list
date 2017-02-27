import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
    moduleId: module.id,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todos: Todo[];
  constructor(private dataServices: TodoDataService) { }

  
  ngOnInit(): void {
    console.log(this.dataServices.getAllTodos())
  }

}
