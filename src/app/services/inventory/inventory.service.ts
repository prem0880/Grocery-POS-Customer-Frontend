import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http : HttpClient) { }

  createInventory(inventory : Inventory) {
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    const newInvent = {
      quantity : inventory.quantity,
      manufacturedDate : inventory.manufacturedDate,
      purchasedPrice : inventory.purchasedPrice,
      tax : inventory.tax,
      expiryDate:inventory.expiryDate
    }
    return this.http.post("https://admin-pos.herokuapp.com/api/product/"+inventory.product+"/vendor/"+inventory.vendor+"/inventory", newInvent,{headers, responseType : 'text'} );
  }

  getAllInventory() : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory");
  }

  generatePdf() : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/pdf");
  }

  deleteInventory(id:any) {
    const headers =new HttpHeaders().set('Content_Type', 'application/json');
    return this.http.delete("https://admin-pos.herokuapp.com/api/inventory/"+id,{headers, responseType : 'text'});
  }
  getInventoryById(id:any) : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/"+id);
  }

  getInventoryByName(name:string) : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/name/"+name);
  }

  getInventoryByQuantity(quant:number) : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/quantity/"+quant);
  }

  getInventoryByPrice(start:number, end:number) : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/price/"+start+"/"+end);
  }

  getInventoryByDate(start:number, end:number) : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/date/"+start+"/"+end);
  }

  getInventoryByLowPrice() : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/lowprice");
  }

  getInventoryByHighPrice() : Observable<any> {
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Inventory>("https://admin-pos.herokuapp.com/api/inventory/highprice");
  }
}

export class Inventory {

  id?:number;
  quantity?:number;
  tax?:number;
  manufacturedDate?:Date;
  purchasedPrice?:number;
  expiryDate?:Date;
  product?:any;
  vendor?:any;
  addedDate?:Date;
}