import { Component, ComponentFactoryResolver, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NavigationItem } from '../models/models';
import { RegisterComponent } from '../register/register.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('modalTitle') modaltitle!: ElementRef

  //ViewContainerRef represents a container where one or more views can be attached.
  @ViewChild('container', {read: ViewContainerRef, static: true} )

  container!: ViewContainerRef;
  
navigationList : NavigationItem[] = [
  {
    category : "electronics",
    subcategories:['mobile', 'laptops']
  },
  {
    category : "furniture",
    subcategories:['chairs', 'tables']
  },
];
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  openModal(name: string): void {

    this.container.clear();

    let componentType!: Type<any>;

       if(name=='login'){
        componentType = LoginComponent;
        this.modaltitle.nativeElement.textContent = 'Entrer Login Information'
      }

       if(name=='Register'){
        componentType = RegisterComponent;
        this.modaltitle.nativeElement.value ='Entrer Register Information';
       }

       const factory = this.resolver.resolveComponentFactory(componentType)

        this.container.createComponent(factory);
  }

}
