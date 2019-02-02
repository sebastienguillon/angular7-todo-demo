import { Injectable } from '@angular/core';

interface User {
  nom: string;
  prenom: string;
  age: number;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() { }
}
