import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common'; // Adicione esta importação

type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
    selector: 'app-button',
    imports: [NgClass], // Adicione NgClass aos imports
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() variant: ButtonVariant = 'default';
    @Input() size: ButtonSize = 'default';
    @Input() disabled: boolean = false;
    @Input() type: 'button' | 'submit' | 'reset' = 'button';
}