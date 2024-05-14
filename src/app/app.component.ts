import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { AsusComponent } from './asus/asus.component';
import { AserComponent } from './aser/aser.component';
import { CanonComponent } from './canon/canon.component';
import { DellComponent } from './dell/dell.component';
import { HpComponent } from './hp/hp.component';
import { LogitechComponent } from './logitech/logitech.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { SamsungComponent } from './samsung/samsung.component';
import { TplinkComponent } from './tplink/tplink.component';
import { BlockComponent } from './block/block.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppleComponent, AserComponent, AsusComponent, CanonComponent, DellComponent, HpComponent, LenovoComponent, LogitechComponent, SamsungComponent, TplinkComponent, BlockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw';
}
