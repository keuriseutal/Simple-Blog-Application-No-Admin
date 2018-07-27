import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/users.interface';
import { ForgotPasswordComponent }  from '../../_components/forgot-password/forgot-password.component';

@Component({
  selector: 'app-print-password',
  templateUrl: './print-password.component.html',
  styleUrls: ['./print-password.component.css']
})
export class PrintPasswordComponent implements OnInit {

  @Input() password: string;

  constructor() {}

  ngOnInit() {
  }


}
