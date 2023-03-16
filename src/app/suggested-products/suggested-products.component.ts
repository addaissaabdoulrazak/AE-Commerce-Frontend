import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../models/models';

@Component({
  selector: 'app-suggested-products',
  templateUrl: './suggested-products.component.html',
  styleUrls: ['./suggested-products.component.css']
})
export class SuggestedProductsComponent implements OnInit {
  
  @Input()

  // Using models category
  category : Category ={
    id :0 ,
    category: "",
    subcategory : "",
  }


  constructor() { }

  ngOnInit(): void {
  }

}
