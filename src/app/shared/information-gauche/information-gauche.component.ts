import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-information-gauche',
  standalone: true,
  imports: [ButtonComponent],
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
