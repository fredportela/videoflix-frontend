import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  exportAs: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() className: string;
  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    document.body.style.overflow = 'hidden';
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

  closeModal(event: Event) {
    event.stopPropagation();
    this.modalClose.next(event);
  }

}
