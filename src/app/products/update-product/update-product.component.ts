import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;

  constructor(private actvatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.actvatedRoute.params.subscribe(data => {
        this.productId  = data.id;
    });
  }

}
