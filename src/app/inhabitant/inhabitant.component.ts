import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-inhabitant',
  templateUrl: './inhabitant.component.html',
  styleUrls: ['./inhabitant.component.css']
})
export class InhabitantComponent {
  @Input() inhabitantItem: string;
}
