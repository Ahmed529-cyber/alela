import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule , RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'alela';
  randomIcons: { top: number, left: number }[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.generateRandomIcons();
    
    setTimeout(() => {
      this.generateRandomIcons();
      this.cdr.detectChanges();
    }, 500);
  }
  
  ngAfterViewInit(): void {
    window.addEventListener('load', () => {
      this.generateRandomIcons();
      this.cdr.detectChanges();
    });
  }
  
  private generateRandomIcons(): void {
    const appHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const appWidth = Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth
    );
    
    this.randomIcons = [];
    for (let i = 0; i < 25; i++) {
      this.randomIcons.push({
        top: Math.random() * appHeight,
        left: Math.random() * appWidth
      });
    }
  }
}