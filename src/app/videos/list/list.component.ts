import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Licitacao } from '../../models/licitacao.model';
import { Pages } from '../../models/pages.model';
import { LicitacaoService } from '../../services/licitacao.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listLicitacao: Licitacao[];
  filters: any[];
  selectedFilters: any[];
  loading: boolean;
  pagination: Pages;
  showModal = false;
  activeLicitacao: Licitacao;
  filterForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private licitacaoService: LicitacaoService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.selectedFilters = [];
    this.selectedFilters['page'] = 1;

    this.route.queryParamMap.subscribe(queryParams => {
      queryParams.keys.map(key => {
        this.selectedFilters[key] = queryParams.get(key);
      });
    })

    this.filterForm = this.formBuilder.group({
      abrangencia: [this.selectedFilters['abrangencia'] ? this.selectedFilters['abrangencia'] : ''],
      fonte: [this.selectedFilters['fonte'] ? this.selectedFilters['fonte'] : ''],
      status: [this.selectedFilters['status'] ? this.selectedFilters['status'] : ''],
      data_cadastro: [this.selectedFilters['data_cadastro'] ? this.selectedFilters['data_cadastro'] : '']
    });

    this.getAllLicitacao(this.selectedFilters);
  }

    private getAllLicitacao(filters?: any) {
        this.loading = true;
        this.licitacaoService.getAll(filters)
            .subscribe((res) => {
                this.filters = res.filters;
                this.listLicitacao = res.data;
                this.pagination = res.pages;
                this.loading = false;
            },
            error => {
                this.loading = false;
            });
    }
  
    setFilter(name: string, value: string) {
        const filter = {};
        filter[name] = value;
        this.selectedFilters = { ...this.selectedFilters, ...filter };

        for (let key in this.selectedFilters) {
            if (!this.selectedFilters[key]) {
                delete this.selectedFilters[key];
            }
        }

        this.router.navigate(['.'], { relativeTo: this.route, queryParams: { ...this.selectedFilters }});

        this.getAllLicitacao(this.selectedFilters);
    }

    getPageLicitacao(page: number) {
        this.setFilter('page', page.toString());
    }

    openUrl(event: Event, url: string) {
        event.stopPropagation();
        window.open(url, '_blank');
    }

    openModal(event: Event, licitacao: Licitacao) {
        this.activeLicitacao = licitacao;
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
        this.activeLicitacao = null;
    }
}
