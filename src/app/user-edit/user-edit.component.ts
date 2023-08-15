import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar FormBuilder e FormGroup
import { ApiService } from '../api.service';
import { UserDetails } from './user-detail.model'; 

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: string | null = null;
  user: UserDetails | null = null;
  userForm: FormGroup; // Adicionar uma variável para o FormGroup

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder // Injetar o FormBuilder
  ) {
    this.userForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateOfBirth: ['', Validators.required],
      phone: ['', Validators.required],
      street: [''],
      city: [''],
      state: [''],
      country: [''],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.apiService.getUserDetails(this.userId).subscribe(
          (data: UserDetails) => {
            this.user = data;
            this.initializeFormWithUserData();
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
      }
    });
  }

  initializeFormWithUserData(): void {
    if (this.user) {
      this.userForm.patchValue({
        title: this.user.title,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        gender: this.user.gender,
        email: this.user.email,
        dateOfBirth: this.user.dateOfBirth,
        phone: this.user.phone,
        street: this.user.location.street,
        city: this.user.location.city,
        state: this.user.location.state,
        country: this.user.location.country,
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid && this.userId !== null) {
      const updatedUserData: UserDetails = {
        id: this.userId,
        title: this.userForm.value.title,
        firstName: this.userForm.value.firstName,
        lastName: this.userForm.value.lastName,
        gender: this.userForm.value.gender,
        email: this.userForm.value.email,
        dateOfBirth: this.userForm.value.dateOfBirth,
        phone: this.userForm.value.phone,
        picture: '', // Inclua o campo 'picture' com um valor padrão vazio
        location: {
          street: this.userForm.value.street,
          city: this.userForm.value.city,
          state: this.userForm.value.state,
          country: this.userForm.value.country,
          timezone: '' // Defina a timezone conforme necessário
        },
        registerDate: '', // Defina as datas conforme necessário
        updatedDate: ''   // Defina as datas conforme necessário
      };
  
      this.apiService.updateUserDetails(this.userId, updatedUserData).subscribe(
        () => {
          alert('User details updated successfully');
          this.router.navigate(['/user-details', this.userId]);
        },
        error => {
          alert('Error updating user details: ' + error);
        }
      );
    }
  }
  
}
