import { CommonModule, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { RowComponent, ColComponent, TableDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, ButtonDirective, FormControlDirective, FormLabelDirective, FormSelectDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';


@Component({
  selector: 'app-leave-request',
  standalone: true,
  imports: [TableDirective, RowComponent, ColComponent, CardComponent, CardHeaderComponent, CardBodyComponent, 
    ReactiveFormsModule, FormsModule, FormDirective, CommonModule, ReactiveFormsModule, FormDirective, 
    FormLabelDirective, FormControlDirective, FormSelectDirective, ButtonDirective, IconDirective, 
  ],
  templateUrl: './leave-request.component.html',
  styleUrl: './leave-request.component.scss'
})
export class LeaveRequestComponent implements OnInit {
  searchForm!: FormGroup;
  leaveInfo: any[] = [];
  selectedDate: string = '';

  
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      name: [''],
      employeeId: [''],
      passportNumber: [''],
      dateFrom: [''],
     
    });
    
  }

  onSearch(){

  }



}
