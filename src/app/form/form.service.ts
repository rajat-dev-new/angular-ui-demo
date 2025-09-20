import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FormEntry {
  id?: number;
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8000/api/form/';

  constructor(private http: HttpClient) {}

  submitForm(data: FormEntry): Observable<FormEntry> {
    return this.http.post<FormEntry>(this.apiUrl, data);
  }

  getSubmissions(): Observable<FormEntry[]> {
    return this.http.get<FormEntry[]>(this.apiUrl);
  }
}
