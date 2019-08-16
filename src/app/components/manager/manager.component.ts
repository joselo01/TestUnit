import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserServices } from '../../services/users.service';
import { Possible } from '../../interfaces/possible.interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
public cargando: boolean;
possible: Possible[];
user: User[];
editState = false;
userToEdit: User;
  constructor(private userServices: UserServices) {
    this.cargando = true;
   }

  ngOnInit() {
    this.userServices.getUser().subscribe( user => {
      this.user = user;
      if (!this.user) {
        console.log('Error del servidor');
      } else {
        this.cargando = false;
      }
    });
    this.userServices.getPossible().subscribe( possible => {
      this.possible = possible;
      if (!this.possible) {
        console.log('Error del servidor');
      } else {
        this.cargando = false;
      }
  });







  }

  editUser(event, user: User) {
    this.editState = true;
    this.userToEdit = user;
  }

  OnUpdateUser(user: User) {
    this.userServices.updateUser(user);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.userToEdit = null;
  }

}
