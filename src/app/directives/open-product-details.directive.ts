import { Directive, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  /**
   * cette fonction onclick est appeler grace a son selector.
   * 
   */
  selector: '[OpenProductDetails]'
})
export class OpenProductDetailsDirective {
@Input()
productId:number=0;

@HostListener('click') openProductDetails(){
  window.scrollTo(0,0);
  this.router.navigate(['/product-details'],{
    queryParams:{
      id:this.productId
    },
  })
}
  constructor(private router: Router) { }

}
