import {Component, OnInit} from '@angular/core';
import {CartService} from "../service/cart.service";
import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  public order: any = {id:''}

  constructor(public cartService: CartService, public dialogRef: MatDialogRef<CheckoutComponent>, private router:Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.cartService.form.valid) {
      console.log(this.cartService.form.value)
      this.cartService.form.patchValue({total: this.cartService.getCart().getTotalPrice()})
      this.cartService.newOrder(this.cartService.form.value).subscribe(response => {
        console.log(response)
        this.order.id = response
        this.router.navigateByUrl('/orderconfirmed', { state: this.order })
      }, error => {
        console.log("error");
      });
      this.cartService.form.reset();
      this.cartService.initializeFormGroup();


      // this.router.navigateByUrl([‘path’]).then()


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
