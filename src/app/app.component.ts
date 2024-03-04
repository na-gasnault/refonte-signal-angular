import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { TitleComponent } from './shared/title/title.component';
import { InformationComponent } from './shared/information/information.component';
import { AvantagesComponent } from './shared/avantages/avantages.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { ButtonComponent } from './shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    TitleComponent,
    InformationComponent,
    AvantagesComponent,
    FooterComponent,
    ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-refonte-site-signal';
}
