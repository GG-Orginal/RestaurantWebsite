import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService: CartService, public dialogRef: MatDialogRef<CheckoutComponent>) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cartService.form.valid) {
      console.log(this.cartService.form.value)
      this.cartService.form.patchValue({total: this.cartService.getCart().getTotalPrice()})
      this.cartService.newOrder(this.cartService.form.value).subscribe(response => {
      }, error => {
        console.log("error");
      });
      this.cartService.form.reset();
      this.cartService.initializeFormGroup();
      // this.notificationService.success(':: Submitted successfully');
    }
    this.onClose()
    // window.location.reload();
  }

  onClose() {
    this.cartService.form.reset();
    this.cartService.initializeFormGroup();
    this.dialogRef.close();
  }
}
