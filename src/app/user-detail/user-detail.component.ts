

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { UserDetails } from './user-detail.model'; 

@Component({
  selector: 'app-user-details',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userId: string | null = null;
  user: UserDetails | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId) {
        this.apiService.getUserDetails(this.userId).subscribe(
          (data: UserDetails) => {
            this.user = data;
          },
          error => {
            console.error('Error fetching user details:', error);
          }
        );
      }
    });
  }

  deleteUser(userId: string): void {
    this.apiService.deleteUser(userId).subscribe(() => {
      console.log('User deleted successfully');
      this.router.navigate(['/user-list']);
    });
  }

  editUser(userId: string): void {
    this.router.navigate(['/user-edit', userId]);
  }
  
}
