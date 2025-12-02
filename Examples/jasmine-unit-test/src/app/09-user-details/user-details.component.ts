import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}
  
  userId: number = 0;

  ngOnInit() {
    this.route.params.subscribe((p) => {
      if (p['id'] === 0) this.router.navigate(['not-found']);
    });
  }

  save() {
    this.router.navigate(['users']);
  }
}
