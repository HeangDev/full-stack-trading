import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from "@angular/common";

@Component({
    selector: 'app-button',
    templateUrl: './button.html',
    styleUrl: './button.css',
    imports: [NgClass, NgIf],
})
export class Button {
    @Input() label: string = "Button";
    @Input() type: "button" | "submit" = "button";
    @Input() variant: "contained" | "text" | "outlined" = "contained";
    @Input() color: "light" | "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "dark" = "light";
    @Input() size: "small" | "medium" | "large" = "medium";
    @Input() disabled: boolean = false;
    @Input() iconStart?: string;
    @Input() iconEnd?: string;

    @Output() clicked = new EventEmitter<void>();

    get classes(): string[] {
        return [
            'btn',
            `btn_${this.variant}`,
            `btn_${this.size}`,
            `btn_${this.color}`,
        ];
    }

    onClick() {
        if (!this.disabled) {
            this.clicked.emit();
        }
    }
}
