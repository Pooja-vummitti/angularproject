import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
 firstName: string = '';
 lastName: string = '';
 email: any = '';

//  myForm: FormGroup; // Define a FormGroup

//   constructor(private fb: FormBuilder) {
//     this.myForm = this.fb.group({
//       firstName: ['', Validators.required], // Define form control with validation
//     });
//   }
submit(){
  if (this.firstName!=='' && this.lastName!==''&& this.firstName!=='') {
    alert('Thank you for joining us');
        }else{
          alert("Please fill all fields");
        }

}
//   onSubmit() {
//     if (this.myForm.valid) {
//       console.log(this.myForm.value.firstName);
//     }
//   }
}
