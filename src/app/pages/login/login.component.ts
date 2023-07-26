import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IUser } from 'src/app/interface/IUser';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  productForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(256)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(256)],
    ],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: UntypedFormBuilder
  ) {}

  login() {
    const user: IUser = {
      id: '',
      username: this.productForm.get('username')?.value,
      email: this.productForm.get('email')?.value,
      password: this.productForm.get('password')?.value,
      confirmPassword: this.productForm.get('confirmPassword')?.value,
      isAdmin: false,
    };

    this.authService.login(user).subscribe((user) => {
      if (user.length > 0) {
        const isAdmin = user[0].isAdmin;
        if (isAdmin) {
          window.alert('Logged in successfully');
          // Lưu quyền truy cập của người dùng vào localStorage với key là "isAdmin"
          localStorage.setItem('isAdmin', 'true');
          // Lưu thông tin tài khoản người dùng vào localStorage
          localStorage.setItem('username', user[0].username);
          localStorage.setItem('password', user[0].password);
          window.location.replace('/admin');
        } else {
          window.alert('Logged in successfully');
          // Lưu quyền truy cập của người dùng vào localStorage với key là "isAdmin"
          localStorage.setItem('isAdmin', 'false');
          // Lưu thông tin tài khoản người dùng vào localStorage
          localStorage.setItem('username', user[0].username);
          localStorage.setItem('password', user[0].password);
          window.location.replace('/home');
        }
      } else {
        console.log('Login failed. Please check your username and password.');
      }
    });
  }
}
