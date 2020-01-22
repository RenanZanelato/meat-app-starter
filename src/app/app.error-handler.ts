import {Response} from '@angular/http';
import {Observable } from 'rxjs/Observable';

export class ErrorHandler
{
    static handleError(error: Response | any)
    {
        let errorMessage: string;

        errorMessage = (error instanceof Response) ? `Erro ${error.status} ao obeter a URL ${error.url} - ${error.statusText}` : error.toString();
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}