import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})

export class EmailComponent implements OnInit {

  constructor(
    private authService: AuthService) { }

  ngOnInit() {
  }

  // get value input
  onSubmit(formData) {
    if (formData.valid) {
      console.log(formData);
      this.authService.login(
        formData.value.email,
        formData.value.password
      );
    }
  }
}

