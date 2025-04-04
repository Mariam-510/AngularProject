import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-add-review',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})
export class AddReviewComponent {

  constructor(
    public dialogRef: MatDialogRef<AddReviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService
   ) {}

selectedRating: number | null = null;
hoveredRating: number | null = null;
reviewText: string = '';
isMaxLengthExceeded: boolean = false;
maxCharacters: number = 150;  

hoverRating(rating: number) {
this.hoveredRating = rating;
}

clearHover() {
this.hoveredRating = null;
}

selectRating(rating: number) {
this.selectedRating = rating;
}
validateReview() {
this.isMaxLengthExceeded = this.reviewText.length >= this.maxCharacters;
}


submitReview() {
if (!this.selectedRating) {
  this.toastr.error('Please select a star rating before submitting.');
  return;
}
if (this.isMaxLengthExceeded) {
  return;
}
this.toastr.success('Review submitted successfully!');
this.dialogRef.close({
  rating: this.selectedRating,
  review: this.reviewText
});
}

closeDialog(): void {
 this.dialogRef.close();
} 


}
