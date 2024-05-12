import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  @Input() picture:string ="assets/picture.jpeg";
  @Input() name:string = "Dima";
  @Input() surname:string = "Dzhosan";
  @Input() patronymic:string = "V";
  @Input() phone: string = "+777777777777";
  @Input() city: string = "Berlin";
  @Input() email: string = "dzhosan777@gmail.com";
}
