import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security-settings',
  templateUrl: './security-settings.component.html',
  styleUrls: ['./security-settings.component.css']
})
export class SecuritySettingsComponent implements OnInit {
  securityForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.securityForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      securityQuestion: ['', Validators.required],
      securityAnswer: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.securityForm.value);
    
  }
}
