import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css'],
})
export class PasswordStrengthComponent {
  password: string = '';
  section1Styles = {};
  section2Styles = {};
  section3Styles = {};

  checkPasswordStrength() {
    const password = this.password;

    this.section1Styles = {
      'background-color':
        password.length === 0 ? 'gray' : password.length < 8 ? 'red' : 'gray',
    };

    this.section2Styles = {
      'background-color': password.length >= 8 ? 'yellow' : 'gray',
    };

    this.section3Styles = {
      'background-color':
        password.length >= 8 &&
        /[a-zA-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)
          ? 'green'
          : 'gray',
    };
  }
}
