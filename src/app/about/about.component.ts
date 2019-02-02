import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  nom: string;
  constructor(
    private userService: UserService
    ) {
    }

    ngOnInit() {
      if (this.userService.user && this.userService.user.nom) {
        this.nom = this.userService.user.nom;

      }
  }

}
