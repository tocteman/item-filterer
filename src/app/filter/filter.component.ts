import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Form, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() term: string = ""
  @Output() termChanged = new EventEmitter<string>()
  searchTerm?: FormControl;

  ngOnInit() {
  this.searchTerm = new FormControl(this.term) 
  this.searchTerm.valueChanges.subscribe(terms => {
      this.changeTerms(terms)
    })
  }
  changeTerms(value: any) {
    this.termChanged.emit(value)
  }
}
