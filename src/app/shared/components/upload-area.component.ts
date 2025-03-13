import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { ButtonComponent } from './button.component';

@Component({
    selector: 'app-upload-area',
    templateUrl: './upload-area.component.html',
    styleUrls: ['./upload-area.component.scss'],
    standalone: true,
    imports: [NgIf, NgClass, ButtonComponent]
})
export class UploadAreaComponent {
    @Output() fileSelect = new EventEmitter<File>();

    isDragging = false;
    selectedFile: File | null = null;

    handleDragOver(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = true;
    }

    handleDragLeave(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;
    }

    handleDrop(event: DragEvent): void {
        event.preventDefault();
        event.stopPropagation();
        this.isDragging = false;

        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this.handleFiles(files);
        }
    }

    handleFileInput(event: Event): void {
        const target = event.target as HTMLInputElement;
        const files = target.files;

        if (files && files.length > 0) {
            this.handleFiles(files);
        }
    }

    private handleFiles(files: FileList): void {
        const file = files[0];
        // Check if the file is a CSV or Excel file
        const validTypes = [
            'text/csv',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        if (validTypes.includes(file.type) ||
            file.name.endsWith('.csv') ||
            file.name.endsWith('.xlsx') ||
            file.name.endsWith('.xls')) {
            this.selectedFile = file;
            this.fileSelect.emit(file);
        } else {
            // Display error for invalid file type
            alert('Por favor, carregue um arquivo CSV ou Excel.');
        }
    }

    resetFile(): void {
        this.selectedFile = null;
    }
}