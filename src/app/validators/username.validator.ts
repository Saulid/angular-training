import {
  FormGroup,
} from "@angular/forms";

export class UsernameValidator {
  static mustMatch(controlName: string, matchingControlName: string) {
    return (form: FormGroup) => {
      const control = form.controls[controlName];
      const matchingControl = form.controls[matchingControlName];

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
      return null;
    };
  }
}
