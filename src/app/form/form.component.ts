
import { Component } from '@angular/core';
import { FormService, FormEntry } from './form.service';

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
  formData: FormEntry = { name: '', email: '', message: '' };
  response: FormEntry | null = null;
  responseTableData: FormEntry[] | null = null;
  displayedColumns: string[] = ['id', 'name', 'email', 'message'];

  constructor(private formService: FormService) {}

  onSubmit() {
    this.formService.submitForm(this.formData).subscribe(res => {
      this.response = res;
      this.formData = { name: '', email: '', message: '' };
      this.loadTableData();
    });
  }

  loadTableData() {
    this.formService.getSubmissions().subscribe((res: FormEntry[]) => {
      this.responseTableData = res;
    });
  }

  ngOnInit() {
    this.loadTableData();
  }
}
