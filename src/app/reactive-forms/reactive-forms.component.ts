import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    // password: new FormControl('', [
    //   Validators.required,
    //   Validators.minLength(6),
    // ]),
  });

  getUsername() {
    return this.loginForm.get('username');
  }

  onSubmit(loginForm: any) {
    console.log(loginForm.value);
  }
}
