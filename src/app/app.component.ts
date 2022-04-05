import { Component } from '@angular/core';

interface Task {
  title: string,
  isCanceled: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO_APP';

  // todo_array: Array<string> = [
  //   "Go home",
  //   "Take a nap",
  //   "Start learning Angular with Sabuj"
  // ]
  tasks: Array<Task> = [
    {
      title: 'Go home',
      isCanceled: false
    },
    {
      title: "Take a nap",
      isCanceled: false
    },
    {
      title: "Start learning Angular with Sabuj",
      isCanceled: false
    }
  ]

  clearToDo() {
    this.tasks.splice(0);
  }

  // addTask(task: any) {
  //   this.tasks.push({
  //     title: task,
  //     isCanceled: false
  //   })
  // }

  addTask(input){
    let value = input.value;
    input.value = "";
    this.tasks.push(
      {
        title: value,
        isCanceled: false
      });
  }

  editTask(idx: number) {
    let title = this.tasks[idx].title;
    let result = prompt('Edit Task Title', title)

    if(result !== null){
      this.tasks[idx].title = result
    }
  }

  // cancleTask(idx: number) {
  //   this.tasks.splice(idx, 1)
  // }

  cancleTask(idx: number) {
    if (this.tasks[idx].isCanceled) {
      this.tasks[idx].isCanceled = false;
    } else {
      this.tasks[idx].isCanceled = true;
    }
  }

  deleteTask(idx: number) {
    const do_delete = confirm('Are you sure to delete the task')

    if (do_delete) {
      this.tasks.splice(idx, 1)
    }

  }

}
