import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  private apiUrl = 'https://api.api-ninjas.com/v1/animals';
  private apiKey = 'or1IQXa6nfAUfxlLHha2+Q==hq9Q7EeQSrNMsoBe';

  animal: any;

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getAnimal('cheetah').subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.animal = data[0]; // Assume que a API retorna um array
        }
      },
      (error) => console.error('Erro:', error)
    );
  }


  getAnimal(name: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey
    });

    return this.http.get(`${this.apiUrl}?name=${name}`, { headers });
  }
}

