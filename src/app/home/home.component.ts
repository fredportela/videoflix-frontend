import { Component, OnInit } from '@angular/core';

import { LicitacaoService } from '../services/licitacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  statistics: any;

  constructor(private _licitacaoService: LicitacaoService) { }

  ngOnInit() {
    this.getStatistics();
  }

  private getStatistics() {
    this.loading = true;
    this._licitacaoService.getStatistics()
      .subscribe((res) => {
        this.statistics = res;
        this.loading = false;
      },
      error => {
        this.loading = false;
      });
  }
  
}
