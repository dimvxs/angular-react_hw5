import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
link1: string = "";
link2: string = "";
link3: string = "";
link4: string = "";
link5: string = "";
@Input() logo: string = "";
}
