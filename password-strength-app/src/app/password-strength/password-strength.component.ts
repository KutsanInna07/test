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

    if (!password) {
      this.section1Styles = { 'background-color': 'gray' };
      this.section2Styles = { 'background-color': 'gray' };
      this.section3Styles = { 'background-color': 'gray' };
    } else if (password.length < 8) {
      this.section1Styles = { 'background-color': 'red' };
      this.section2Styles = { 'background-color': 'red' };
      this.section3Styles = { 'background-color': 'red' };
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.section1Styles = { 'background-color': 'green' };
        this.section2Styles = { 'background-color': 'green' };
        this.section3Styles = { 'background-color': 'green' };
      } else if (
        (hasLetters && hasDigits) ||
        (hasLetters && hasSymbols) ||
        (hasDigits && hasSymbols)
      ) {
        this.section1Styles = { 'background-color': 'yellow' };
        this.section2Styles = { 'background-color': 'yellow' };
        this.section3Styles = { 'background-color': 'gray' };
      } else {
        this.section1Styles = { 'background-color': 'red' };
        this.section2Styles = { 'background-color': 'gray' };
        this.section3Styles = { 'background-color': 'gray' };
      }
    }
  }
}
