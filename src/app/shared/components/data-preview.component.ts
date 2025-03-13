import { Component, Input } from '@angular/core';
import { ButtonComponent } from './button.component';
import { NgIf, NgFor } from '@angular/common'; // Adicione NgFor

@Component({
    selector: 'app-data-preview',
    templateUrl: './data-preview.component.html',
    styleUrls: ['./data-preview.component.scss'],
    standalone: true,
    imports: [NgIf, NgFor, ButtonComponent]
})
export class DataPreviewComponent {
    @Input() data: any | null = null;

    // Sample data for demonstration when no real data is available
    sampleHeaders = ['Data', 'Produto', 'Quantidade', 'Valor', 'Total'];
    sampleRows = [
        { date: '2023-01-15', product: 'Produto A', quantity: 5, price: 'R$ 120,00', total: 'R$ 600,00' },
        { date: '2023-01-17', product: 'Produto B', quantity: 2, price: 'R$ 85,50', total: 'R$ 171,00' },
        { date: '2023-01-20', product: 'Produto C', quantity: 10, price: 'R$ 45,75', total: 'R$ 457,50' },
        { date: '2023-01-22', product: 'Produto A', quantity: 3, price: 'R$ 120,00', total: 'R$ 360,00' }
    ];
}