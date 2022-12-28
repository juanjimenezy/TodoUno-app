import { Injectable } from "@angular/core";
import {MessageService} from 'primeng/api';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class Globals {
    vhost: string = 'http://localhost:8070';

    constructor(private messageService: MessageService){};

    toastMessageSucces(titulo,mensaje){
        this.messageService.add({severity:'success', summary:titulo, detail:mensaje});
      }
    
      toastMessageWarn(titulo,mensaje){
        this.messageService.add({severity:'warn', summary:titulo, detail:mensaje});
      }
    
      toastMessageError(titulo,mensaje){
        this.messageService.add({severity:'error', summary:titulo, detail:mensaje});
      }
}