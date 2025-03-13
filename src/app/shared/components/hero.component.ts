import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from './button.component';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, ButtonComponent]
})
export class HeroComponent {

}