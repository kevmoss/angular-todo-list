import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(private dataService: TodoDataService ) { }
  title = "ToDo's";
  
  get alltodos() {
    return this.dataService.getAllTodos();
  }
}
