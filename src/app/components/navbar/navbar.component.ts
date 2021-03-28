import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  model: any = {};

  constructor(public accountService: AccountService) {}

  ngOnInit() {}

  login() {
    this.accountService.login(this.model).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  logout() {
    this.accountService.logout();
  }
}
