import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  product_state : boolean = true;

  onProductToggle() {
    this.product_state = !this.product_state;
    console.log("TOGGLE" + this.product_state);
  }
}
