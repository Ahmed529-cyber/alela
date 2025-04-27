import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-acceuil',
  imports: [CommonModule],
  templateUrl: './acceuil.component.html',
  styleUrl: './acceuil.component.css'
})
export class AcceuilComponent {
    randomIcons: { top: number, left: number }[] = [];

    ngOnInit(): void {
        for (let i = 0; i < 10; i++) {
            this.randomIcons.push({
                top: Math.random() * window.innerHeight,
                left: Math.random() * window.innerWidth
            });
        }
    }
}
