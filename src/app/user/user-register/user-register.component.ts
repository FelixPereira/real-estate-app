import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  user!: User;
  userSubmited: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createRegistrationForm();
  }

  createRegistrationForm() {
    this.registrationForm = this.formBuilder.group(
      {
        usersellRent: ['felix', [Validators.required]],
        email: ['f@gmail.com', [Validators.required, Validators.email]],
        password: ['123456', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['123456', [Validators.required]],
        mobile: [
          999999999,
          [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(12),
          ],
        ],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(
    fg: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = fg.get('password');
    const confirmPassword = fg.get('confirmPassword');
    if (!password || !confirmPassword) return { notMatched: true };

    return password.value === confirmPassword.value
      ? null
      : { notMatched: true };
  }

  get usersellRent() {
    return this.registrationForm.get('usersellRent') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    this.userSubmited = true;
    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();

      this.userSubmited = false;

      this.alertifyService.success('Congrats, you are successfully registered');
      this.router.navigate(['user/login']);
    } else {
      this.alertifyService.info('Kindly provide the required fields');
    }
  }

  userData(): User {
    return (this.user = {
      usersellRent: this.usersellRent.value,
      email: this.email.value,
      mobile: this.mobile.value,
      password: this.password.value,
    });
  }
}
