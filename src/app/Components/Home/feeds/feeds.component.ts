import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css',
})
export class FeedsComponent {
  stories = [
    {
      image: 'assests/images/profile.jpg',
    },
    {
      image: 'assests/images/profile.jpg',
    },
    {
      image: 'assests/images/profile.jpg',
    },
    {
      image: 'assests/images/profile.jpg',
    },
    {
      image: 'assests/images/profile.jpg',
    },
  ];
}
