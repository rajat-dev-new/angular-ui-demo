
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formData = { name: '' };
  response: any;
  responseTableData: any[] | null = null;
  displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('https://jsonplaceholder.typicode.com/posts', this.formData)
      .subscribe(res => {
        this.response = res;
        this.responseTableData = null;
      });
  }

  fetchData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res: any) => {
        this.response = res;
        if (Array.isArray(res)) {
          this.responseTableData = res.slice(0, 5); // Show first 5 for demo
        } else {
          this.responseTableData = null;
        }
      });
  }
}
