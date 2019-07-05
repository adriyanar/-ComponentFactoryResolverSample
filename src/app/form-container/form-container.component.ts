import { Component, ViewContainerRef, ComponentRef, ViewChild, ComponentFactoryResolver, OnInit } from '@angular/core';

import { SignInComponent } from '../sign-in/sign-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { formContainerDirective } from '../formContainer.directive'
 
@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit{

  @ViewChild(formContainerDirective, { static: true }) signInUpform: formContainerDirective;
  private componentRef: ComponentRef<any>;

  loadForm(chosenForm){
    this.signInUpform.viewContainerRef.clear()
    if(chosenForm){
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignInComponent);
      this.componentRef = this.signInUpform.viewContainerRef.createComponent(componentFactory);
    } else {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SignUpComponent);
      this.componentRef = this.signInUpform.viewContainerRef.createComponent(componentFactory);
    }
  }

  constructor ( private componentFactoryResolver: ComponentFactoryResolver ) {}


  ngOnInit(){ 
    this.loadForm(true)
  }
}
