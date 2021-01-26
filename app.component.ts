import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  users:any = [];
  user = '';
  selectedUser: any;
  userarray:any = [];
  userForm: FormGroup =this.initialValue()

  constructor(
    public formBuilder : FormBuilder
  ) {

  }

  add() {
    if (this.selectedUser > -1) {
      console.log(this.selectedUser)
      this.users[this.selectedUser] = this.user;
    } else {
      this.users.push(this.user);
    }
    this.user = '';
    this.selectedUser = -1;
  }

  remove(i :number) {
    this.users.splice(i, 1);
    this.selectedUser = -1;
  }

  edit(i: number) {
    this.selectedUser = i;
    this.user = this.users[i];
  }

  submit() {
   if (!this.userForm.value.firstName){
     return
   }
    if (this.selectedUser > -1) {
      this.userarray[this.selectedUser] = this.userForm.value;
    } else {
      this.userarray.push(this.userForm.value);
    }
    this.userForm=this.initialValue();
    this.selectedUser = -1;
  }
  initialValue(){
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      course: [''],
      mobile: [''],
     city: [''],
    });
  }
  edituser(i :any){
    this.selectedUser = i;
    this.userForm.setValue({
      ...this.userarray[i]
    })
  }
  delete(i :any){
    this.userarray.splice(i, 1);
    this.selectedUser = -1;
  }
}