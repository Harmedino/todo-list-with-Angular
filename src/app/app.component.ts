import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

  message: any = '';
  array: any = [];

  add() {
    if (this.message == '') {
      alert('input this field');
      return;
    } else {
      this.array.push({ name: this.message, done: false });
    }
  }

  del(i: any) {
    this.array.splice(i, 1);
  }

  check(i: any) {
    this.array[i].done
      ? (this.array[i].done = false)
      : (this.array[i].done = true);
  }
}
