import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  @Input()
  title?: string;
  @Input()
  imageSource?: string;
  @Input()
  content?: string;
  @Input()
  boxSizeText?: string;
  @Input()
  imageTextGap?: string;
}
