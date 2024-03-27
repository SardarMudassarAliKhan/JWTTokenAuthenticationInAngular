import { Component } from '@angular/core';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  routerLinkActiveOptions = { exact: true };
  constructor(
    public accountService: AccountService) {}
}
