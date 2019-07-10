import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule,
         MatInputModule, MatProgressSpinnerModule,
         MatCardModule, MatMenuModule, MatPaginatorModule,
         MatGridListModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    FormsModule,
    MatSelectModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatGridListModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
