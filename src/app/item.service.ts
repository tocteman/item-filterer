import { Injectable } from '@angular/core';
import { Item } from './Item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  items: Item[] = [
    {id: 1, name: "Manzana", description: "Dulce, importada de Chile, roja o verde"},
    {id: 2, name: "Frambuesa", description: "Color roja, dulce, exótica"},
    {id: 4, name: "Mango", description: "Solo disponible en temporadas"},
    {id: 5, name: "Manzana", description: "Dulce, importada de Chile, roja o verde"},
    {id: 6, name: "Frambuesa", description: "Color roja, dulce, exótica"},
    {id: 7, name: "Mango", description: "Solo disponible en temporadas"},
    {id: 8, name: "Manzana", description: "Dulce, importada de Chile, roja o verde"},
    {id: 9, name: "Frambuesa", description: "Color roja, dulce, exótica"},
    {id: 10, name: "Mango", description: "Solo disponible en temporadas"},
    {id: 11, name: "Manzana", description: "Dulce, importada de Chile, roja o verde"},
    {id: 12, name: "Frambuesa", description: "Color roja, dulce, exótica"},
    {id: 13, name: "Mango", description: "Solo disponible en temporadas"},
    {id: 14, name: "Manzana", description: "Dulce, importada de Chile, roja o verde"},
    {id: 15, name: "Frambuesa", description: "Color roja, dulce, exótica"},
    {id: 16, name: "Mango", description: "Solo disponible en temporadas"},
  ]
  getItems(): Item[] {
    return this.items
  }
  
}
