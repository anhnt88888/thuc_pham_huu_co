import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/interface/IUser';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;

  productForm = this.formBuilder.group({
    username: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(256),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(256),
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(256),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ],
    ],
    confirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(256),
        Validators.pattern('^[a-zA-Z0-9]+$'),
      ],
    ],
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: UntypedFormBuilder
  ) {}

  register() {
    const user: IUser = {
      id: '',
      username: this.productForm.get('username')?.value,
      email: this.productForm.get('email')?.value,
      password: this.productForm.get('password')?.value,
      confirmPassword: this.productForm.get('confirmPassword')?.value,
      isAdmin: false,
    };
    this.authService.register(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
        window.alert('Successful account registration');
      },
      (error) => {
        console.log(error.message);
      }
    );
  }
}
