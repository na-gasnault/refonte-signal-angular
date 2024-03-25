import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() text?:string
@Input() buttonHref?:string
@Input() buttonBorder?:string
@Input() buttonColorText?:string
}
