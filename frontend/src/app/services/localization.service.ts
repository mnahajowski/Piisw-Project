import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  getLocalizedNameType(ticketType: String, isMulti: boolean): string {
    if (ticketType === '.SingleTicket') {
      if (isMulti)
        return 'Bilety jednorazowe';
      return 'Bilet jednorazowy';
    }
    else if (ticketType === '.LongTimeTicket') {
      if (isMulti)
        return 'Bilety długototerminowe';
      return 'Bilet długototerminowy';
    }
    else if (ticketType === '.TimeTicket') {
      if (isMulti)
        return 'Bilety czasowe';
      return 'Bilet czasowy';
    }
    else throw "Invalid type name";
  }

  getLocalizedDiscount(isDiscount: boolean): string {
    if (isDiscount)
      return 'Ulgowy';
    else
      return 'Normalny';
  }
}
