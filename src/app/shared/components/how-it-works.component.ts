import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from './button.component';

interface Step {
    number: number;
    title: string;
    description: string;
}

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, ButtonComponent]
})
export class HowItWorksComponent {
    steps: Step[] = [
        {
            number: 1,
            title: 'Conecte seus dados',
            description: 'Faça upload de arquivos CSV ou Excel, ou conecte-se diretamente a bancos de dados e aplicativos como Google Sheets, MySQL, PostgreSQL e mais.'
        },
        {
            number: 2,
            title: 'Analise com IA',
            description: 'Nossa tecnologia de IA analisa automaticamente seus dados, identifica padrões e sugere visualizações relevantes para suas métricas mais importantes.'
        },
        {
            number: 3,
            title: 'Visualize insights',
            description: 'Crie dashboards interativos e visualizações impressionantes com apenas alguns cliques, sem necessidade de conhecimentos técnicos.'
        },
        {
            number: 4,
            title: 'Tome decisões baseadas em dados',
            description: 'Compartilhe seus insights, configure alertas para métricas importantes e tome decisões informadas para impulsionar seu negócio.'
        }
    ];
}