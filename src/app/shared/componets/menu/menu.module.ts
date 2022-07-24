import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ReactiveFormsModule } from '@angular/forms';

const MATERIAL = [MatToolbarModule, MatIconModule, MatInputModule];

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...MATERIAL
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
