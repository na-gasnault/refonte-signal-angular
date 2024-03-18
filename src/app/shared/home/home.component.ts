import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { TitleComponent } from '../title/title.component';
import { InformationComponent } from '../information/information.component';
import { AvantagesComponent } from '../avantages/avantages.component';
import { InformationGaucheComponent } from '../information-gauche/information-gauche.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    TitleComponent,
    AvantagesComponent,
    InformationComponent,InformationGaucheComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
