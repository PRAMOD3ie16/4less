import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  createProduct(productBody):Observable<Product>{
      const productUrl = 'http://localhost:3000/products';
      return this.httpClient.post<Product>(productUrl, productBody );
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productBody, productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.put<Product>(productUrl, productBody);
  }
  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products'+productId;
    return this.httpClient.delete<Product>(productUrl);
  } 

  seachCategoryProduct(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/category='+categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  seachDateProduct(dateParm): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParm;
    return this.httpClient.get<Product>(productUrl);
  }

}
