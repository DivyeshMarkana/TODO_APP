import { Component, OnInit } from '@angular/core';
import { LocalDataService } from './local-data.service';

interface Task {
  title: string,
  isCanceled: boolean
  isDeleted: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TODO_APP';

  parsedJson: any;

  constructor(private localData: LocalDataService) { }

  ngOnInit(): void {
    this.loadData()
  }

  tasks: Array<Task> = [
    // {
    //   title: 'Go home',
    //   isCanceled: false,
    //   isDeleted: false
    // },
    // {
    //   title: "Take a nap",
    //   isCanceled: false,
    //   isDeleted: false
    // },
    // {
    //   title: "Start learning Angular with Sabuj",
    //   isCanceled: false,
    //   isDeleted: false
    // }
  ]

  deletedTaskList: Array<Task> = [];

  loadData() {
    const parsedData: string = this.localData.getData('token')

    this.parsedJson = JSON.parse(parsedData)

    for (let i in this.parsedJson) {
      let task: Task = <Task>this.parsedJson[i]
      this.tasks.push(task)
    }
  }

  clearToDo() {
    this.tasks.splice(0);
    this.localData.clearData()
  }

  addTask(input) {
    let value = input.value;
    input.value = "";

    if (value !== '') {
      this.tasks.push(
        {
          title: value,
          isCanceled: false,
          isDeleted: false
        });
    }

    this.localData.setData("token", this.tasks)
  }

  editTask(idx: number) {
    let title = this.tasks[idx].title;
    let result = prompt('Edit Task Title', title)

    if (result !== null) {
      this.tasks[idx].title = result
    }
  }

  cancleTask(idx: number) {
    if (this.tasks[idx].isCanceled) {
      this.tasks[idx].isCanceled = false;
    } else {
      this.tasks[idx].isCanceled = true;
    }
  }

  deleteTask(idx) {
    const do_delete = confirm('Are you sure to delete the task')

    if (do_delete) {
      this.tasks.splice(idx, 1)
      this.localData.setData("token", this.tasks)
    }
  }

  // undoTask(task) {
  //   if (this.tasks[task].isDeleted) {
  //     this.tasks.push(
  //       {
  //         title: task,
  //         isCanceled: false,
  //         isDeleted: false
  //       });
  //   }
  // }
}
