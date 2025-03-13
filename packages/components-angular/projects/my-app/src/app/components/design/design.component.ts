import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

import { AccordionComponent } from '../accordion/accordion.component';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './design.component.html',
  styleUrl: './design.component.scss'
})
export class DesignComponent {
  currentComponent: Type<any> | null = null;

  components: { [key: string]: Type<any> } = {
    accordion: AccordionComponent,
    alert: AlertComponent
  };

  loadComponent(componentName: string): void {
    this.currentComponent = this.components[componentName];
  }

}
