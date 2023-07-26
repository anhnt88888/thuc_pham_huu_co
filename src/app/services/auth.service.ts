import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  currentUser: IUser = {
    id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
  };

  constructor(private http: HttpClient) {}

  register(user: IUser): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/users`, user);
  }

  login(user: IUser): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/users?username=${user.username}&password=${user.password}`
    );
  }

  setCurrentUser(user: IUser) {
    this.currentUser = user; // Cập nhật giá trị của currentUser
  }

  getCurrentUser(): IUser {
    return this.currentUser; // Trả về giá trị của currentUser
  }

  logout() {
    this.setCurrentUser({
      id: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isAdmin: false,
    }); // Đặt giá trị của currentUser về giá trị mặc định
  }
}
