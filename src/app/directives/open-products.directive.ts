import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/models';

@Directive({
  //enlever le prefixe app
  selector: '[OpenProducts]'
})
export class OpenProductsDirective {
@Input() 

category: Category ={
  id:0,
  category:'',
  subcategory:'',
};


@HostListener('click') openProducts() {
  this.router.navigate(['/products'], {
    /* 
       vous pouvez  remarquez nous avons un ? dans bare de navigation lors d'un requette http get
       et ce point d'interrogation est appellez quyeryParams 
    */
    queryParams: {
      category : this.category.category,
      subcategory : this.category.subcategory
    },
  });
}

  constructor(private router: Router) { }

}
