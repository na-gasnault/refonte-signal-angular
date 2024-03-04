import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
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
}
