import { Component, OnInit } from '@angular/core';
import {ItemService} from '../item.service';
import { Item } from '../Item'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  items: Item[] = []

  filteredItems: Item[] = []

  searchTerm: string = ""

  ngOnInit() {
    this.searchTerm = this.route.snapshot.queryParams["term"] || ""
    this.items = this.itemService.getItems()
    this.filteredItems = this.items
    this.changeTerms(this.searchTerm)
  }

  changeTerms(term: string) {
    this.filteredItems = this.filterItems(this.items, term.toLowerCase())
    this.router.navigate([`/items`], { queryParams: { term } })
  }

  filterItems(arr: any[], term: string){
   return arr.filter(item => (
      item.name.toLowerCase().includes(term) 
    || item.description.toLowerCase().includes(term)
  ))
  }
}
