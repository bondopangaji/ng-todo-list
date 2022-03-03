import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Output()
  onDeleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output()
  onToggleReminder: EventEmitter<Todo> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(todo: Todo) {
    this.onDeleteTodo.emit(todo);
  }

  onToggle(todo: Todo) {
    this.onToggleReminder.emit(todo);
  }
}
