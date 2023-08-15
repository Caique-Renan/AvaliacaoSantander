import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }
  isEditMode: boolean = false;
  
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      picture: [''],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', Validators.required],
      street: [''],
      city: [''],
      state: [''],
      country: [''],
      timezone: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.apiService.createUser(this.userForm.value).subscribe(
        response => {
          console.log('Resposta da criação de usuário:', response);
          alert('Usuário criado com sucesso');
          // Você pode redirecionar para outra página aqui
        },
        error => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    }
  }
  
}
