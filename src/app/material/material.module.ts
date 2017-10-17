import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatGridListModule, MatInputModule,
  MatListModule, MatMenuModule, MatSortModule, MatToolbarModule, MatCardModule,
  MatTabsModule, MatButtonToggleModule, MatChipsModule, MatIconModule, MatDialogModule, MatTooltipModule,
  MatSnackBarModule, MatTableModule,
  MatNativeDateModule, MatExpansionModule, MatSelectModule,
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    // MatRadioModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    // MatPaginatorModule,
    MatSelectModule,





  ],
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    // MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }
