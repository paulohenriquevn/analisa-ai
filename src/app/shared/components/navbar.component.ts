import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, ButtonComponent]
})
export class NavbarComponent {
    isMenuOpen = false;

    toggleMenu(): void {
        this.isMenuOpen = !this.isMenuOpen;
    }
}