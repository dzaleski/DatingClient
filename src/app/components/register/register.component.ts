import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancel = new EventEmitter();

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe(
      (response) => {
        this.cancelled();
        console.log(response);
      },
      (error) => console.log(error)
    );
  }

  cancelled() {
    this.cancel.emit(false);
  }
}
