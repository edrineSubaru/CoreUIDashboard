import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RowComponent, ColComponent, TableDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, ButtonDirective, FormControlDirective, FormLabelDirective, FormSelectDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { TasksService } from '../services/tasks.service'; 
import { Tasks } from '../models/tasks'; 


@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [TableDirective, RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, CommonModule, ReactiveFormsModule, FormDirective, 
    FormLabelDirective, FormControlDirective, FormSelectDirective, ButtonDirective, IconDirective, 
  ],
})
export class TasksComponent implements OnInit {
edit(arg0: string|undefined,arg1: boolean) {
}
deletePopUp(arg0: string|undefined) {
}


onStatusUpdate($event: MouseEvent,arg1: any,arg2: boolean|undefined) {
throw new Error('Method not implemented.');
}
taskForm!: FormGroup;
  tasks: Tasks[] = [];
  selectedDate: string = '';
  description: string = '';
  title: string = '';

  
  constructor(private tasksService: TasksService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      title: [''],
      description: [''],   
    });
    this.getTasks();
    
  }
  get taskFormControl() {
    return this.taskForm.controls;
  }


  getTasks(){
    this.tasksService.getTasks().subscribe(
      (data) => {
        this.tasks = data; 
        console.log('Employees loaded:', this.tasks);
      },
      (error) => {
        console.error('Error loading employees:', error);
      }
    );

  }

  onSubmit(){
    const model: Tasks = {
      encTaskId: "",
      // encTaskId: "FuIlP/oxvC4=",
      title: this.taskFormControl['title'].value,
      description: this.taskFormControl['description'].value,
      status: "Pending",
      createdDate: "2024-11-27T21:22:19.957",
      encCreatedBy: "1dJFp5tLu7Y=",
      isActive: true,
      encUpdatedBy: "1dJFp5tLu7Y=",
      updatedDate: "2024-11-27T17:08:51.937"
    }
    debugger;

    // this.tasksService.saveTask(model).subscribe(
    //   (data) => {
    //     this.tasks = data; 
    //     console.log('Employees loaded:', this.tasks);
    //   },
    //   (error) => {
    //     console.error('Error loading employees:', error);
    //   }
    // );
    this.tasksService.saveTask(model).subscribe((response: any) => {
      if (response != null && response.data != null) {
        this.getTasks();
        // Swal.fire(this.translate.instant("pages.website.configuration.mostUsedWebsites.savedSuccess"), "", "success").then(() => {
        //   this.modalRef.hide();
        //   this.getFineTypes();
        // });
      } else {
        // Swal.fire(this.translate.instant("errors.unexpectedError"), "", "error").then(() => {});
        console.log("Error :", response);
      }
    });

  }

  clearForm(){
    
  }

}
