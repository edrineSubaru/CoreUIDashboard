  import { CommonModule, NgStyle } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
  import { RowComponent, ColComponent, CardHeaderComponent, CardBodyComponent, CardComponent, ButtonDirective, FormControlDirective, FormDirective, FormLabelDirective, TextColorDirective, TableDirective } from '@coreui/angular';
  import { EmployeeInfoService } from '../services/employee.service'; 
  // D:\Programming\Lab\CoreUIDashboard\src\app\services\employee.service.ts


  @Component({
    selector: 'app-personal-profile',
    standalone: true,
    templateUrl: './personal-profile.component.html',
    styleUrl: './personal-profile.component.scss',
    imports: [TableDirective, RowComponent, ColComponent, CardHeaderComponent, CardBodyComponent, 
      CardComponent, TextColorDirective, ReactiveFormsModule, FormsModule, FormDirective, CommonModule
      ],
  })

  export class PersonalProfileComponent implements OnInit{
    encLoggedInUserId?: string = '';
    employeeInfo: any[] = [];
    employeeData: any[] = [];
    
    employeeDetailsForm!: FormGroup;

  
    constructor(private personalProfileService: EmployeeInfoService, private formBuilder: FormBuilder) { }
    

    ngOnInit(): void {
      this.employeeDetailsForm = this.formBuilder.group({
        name: [''],
        employeeId: [''],
        passportNumber: [''],
        niN: [''],
        nationality: [''],
        email: [''],
        contact: [''],
        altContact: [''],
        emergencyContact: [''],
      });
      this.getEmployeeInfo();    
      this.loadEmployees();    
    
    } 
    get employeeDetailsFormControl() {
      return this.employeeDetailsForm.controls;
    }

    loadEmployees(): void {
      this.personalProfileService.getEmployees().subscribe(
        (data) => {
          this.employeeInfo = data; 
          console.log('Employees loaded:', this.employeeInfo);
        },
        (error) => {
          console.error('Error loading employees:', error);
        }
      );
    }
    


    
    onSubmit(){

    }

    getEmployeeInfo() {
      // let encUserId = "690071006400540036006D00660056004E004A0073003D00"

      let encUserId = 54;
      
      this.personalProfileService.getDashboardInfo(encUserId).subscribe({
        next: (response: any) => {
          if (response) { 

            const employee = Array.isArray(response) ? response[0] : response;
            var name = employee.firstName + ' ' + employee.lastName;

            this.employeeDetailsForm.patchValue({
              name: name || '',  
              employeeId: employee.userId || '',
              passportNumber: employee.passportNo || '',
              niN: employee.nationalId || 'AU000011',
              nationality: employee.nationality || 'Uganda',
              email: employee.contactEmail || 'test@hotmail.com',
              contact: employee.contactNo || '+256-700000000',
              altContact: employee.altContact || '+256-704043124',
              emergencyContact: employee.emergencyContact || ''
            });
    
            this.employeeDetailsForm.disable();
          }
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
    

  
    
  }


