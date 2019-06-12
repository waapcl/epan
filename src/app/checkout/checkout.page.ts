import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  viewCtrl: any;

  constructor() { }

  ngOnInit() {
  }
  dismiss() {
		this.viewCtrl.dismiss();
	}


}
