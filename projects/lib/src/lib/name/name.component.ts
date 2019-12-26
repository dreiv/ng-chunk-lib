import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent {
  @Input() name: string;
}
