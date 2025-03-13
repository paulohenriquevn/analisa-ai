import { Component } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from './button.component';

interface Feature {
    title: string;
    description: string;
    icon: string;
}

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, NgFor, ButtonComponent]
})
export class FeaturesComponent {
    features: Feature[] = [
        {
            title: 'Análise Preditiva',
            description: 'Identifique tendências futuras com base em dados históricos usando algoritmos avançados de machine learning.',
            icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
        },
        {
            title: 'Importação Simplificada',
            description: 'Importe seus dados de diversas fontes incluindo Excel, CSV, bancos de dados SQL e APIs externas.',
            icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
        },
        {
            title: 'Visualizações Interativas',
            description: 'Crie painéis interativos e visualizações com apenas alguns cliques para comunicar seus insights.',
            icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        },
        {
            title: 'Colaboração em Tempo Real',
            description: 'Compartilhe suas análises com sua equipe e trabalhe colaborativamente em tempo real.',
            icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        },
        {
            title: 'Automação de Relatórios',
            description: 'Programe relatórios automáticos para serem enviados por e-mail periodicamente.',
            icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
        },
        {
            title: 'Segurança Avançada',
            description: 'Seus dados estão protegidos com criptografia de ponta a ponta e controles de acesso granulares.',
            icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
        }
    ];
}