import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { RestaurantInterface } from "./restaurant/restaurant.interface";
import { MenuItemInterface } from "./../restaurant-detail/restaurant-menu-item/restaurant-menu-item.interface.component";
import { MEAT_API } from "./../app.api";
import { ErrorHandler } from "./../app.error-handler";

@Injectable()
export class RestaurantsService {
  constructor(private http: Http) {}

  restaurants(): Observable<RestaurantInterface[]> {
    let responseObservable = this.http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);

    return responseObservable;
  }
  restaurantById(id: string): Observable<RestaurantInterface> {
    let responseObservable = this.http
      .get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
   
    return responseObservable;
  }
  reviewsOfRestaurant(id: string): Observable<any> {
    let responseObservable = this.http
      .get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
   
    return responseObservable;
  }
  menuOfRestaurant(id:string):Observable<MenuItemInterface[]>{
        let responseObservable = this.http
          .get(`${MEAT_API}/restaurants/${id}/menu `)
          .map(response => response.json())
          .catch(ErrorHandler.handleError);
    
      return responseObservable;
  }

}
