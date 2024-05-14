import { Routes } from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { AserComponent } from './aser/aser.component';
import { AsusComponent } from './asus/asus.component';
import { CanonComponent } from './canon/canon.component';
import { DellComponent } from './dell/dell.component'; 
import { HpComponent } from './hp/hp.component';
import { LogitechComponent } from './logitech/logitech.component';
import { LenovoComponent } from './lenovo/lenovo.component';
import { TplinkComponent } from './tplink/tplink.component';
import { SamsungComponent } from './samsung/samsung.component';
import { BlockComponent } from './block/block.component';

export const routes: Routes = [
    {path: 'apple', component: AppleComponent},
    {path: 'aser', component: AserComponent},
    {path: 'asus', component: AsusComponent},
    {path: 'cannon', component: CanonComponent},
    {path: 'dell', component: DellComponent},
    {path: 'hp', component: HpComponent},
    {path: 'logitech', component: LogitechComponent},
    {path: 'lenovo', component: LenovoComponent},
    {path: 'tplink', component: TplinkComponent},
    {path: 'samsung', component: SamsungComponent},
    {path: 'block', component: BlockComponent}
   ];
