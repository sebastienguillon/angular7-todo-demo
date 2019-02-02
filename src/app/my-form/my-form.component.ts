import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  formData: any = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.formData.nom = 'Douglas';
  }

  enregistrer(leForm) {
    // confirm()
    console.log(leForm);
    if (leForm.valid) {
      console.log('Enregistré !');
    }
  }
}
