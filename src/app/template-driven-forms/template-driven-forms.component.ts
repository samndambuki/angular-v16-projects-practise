import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css'],
})
export class TemplateDrivenFormsComponent {
  user = { username: '', password: '' };
  onSubmit(form: any) {
    console.log(form.value);
  }
}
