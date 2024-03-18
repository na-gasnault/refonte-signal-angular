import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-information-gauche',
  standalone: true,
  imports: [],
  templateUrl: './information-gauche.component.html',
  styleUrl: './information-gauche.component.css'
})
export class InformationGaucheComponent {
  @Input()
  title?: string;
  @Input()
  imageSource?: string;
  @Input()
  content?: string
}
