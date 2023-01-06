import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage implements OnInit {
  tabCurrencies = ['EUR', 'GBP', 'JPY', 'CNY', 'TND', 'EGP'];
  resultat = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let h = new HttpParams().set(
      'access_key',
      '7b239b58f93255b5ef5795cdc77cee8c'
    );
    this.http.get('http://apilayer.net/api/live', { params: h }).subscribe({
      next: (response) => {
        this.tabCurrencies = [];
        for (const key in response['quotes']) {
          this.tabCurrencies.push(key.slice(3));
        }
      },
    });
  }

  onConvert(curr2) {
    console.log('Albert');

    let s = `USD${curr2}`;

    console.log(s);
    let h = new HttpParams().set(
      'access_key',
      '7b239b58f93255b5ef5795cdc77cee8c'
    );
    //  h = h.
    this.http.get('http://apilayer.net/api/live', { params: h }).subscribe({
      next: (response) => {
        console.log(response['quotes'][s]);
        this.resultat =
          'Today, 1 USD worths ' + response['quotes'][s] + ' ' + curr2;
      },
    });
  }
}
