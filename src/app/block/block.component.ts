import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-block',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
  @Input() picture: string = "assets/apple.png";
  @Input() link: string = "/apple";
}
