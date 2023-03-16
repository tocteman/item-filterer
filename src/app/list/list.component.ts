import { Component, Input } from '@angular/core';
import { Item } from '../Item'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() items: Item[] = []
}
