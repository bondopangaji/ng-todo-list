import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output()
  onAddTodo: EventEmitter<Todo> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTodo!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTodo = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a todo!');
      return;
    }

    const newTodo: Todo = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTodo.emit(newTodo);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
