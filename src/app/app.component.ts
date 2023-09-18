import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EshoppingApp';
  public searchTerm : string = '';
  constructor(private _auth:AuthService){

  }
  LoggedIn(input:boolean){
    if(input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }
  LogOut(){
    this._auth.logoutUser();
  }
  // earch(event:any){
  //   this.searchTerm=(event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this._product.search.next(this.searchTerm);
  // }
}
