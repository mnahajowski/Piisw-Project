import { Injectable } from '@angular/core';
import { RegistrationResult } from '../main-view/models/registration-result';

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

  getLocalizedDuration(seconds: number): string {
    var minutes = seconds / 60;
    var hours = minutes / 60;
    if (hours > 48) {
      var days = hours / 24;
      return `${days} dni`;
    } else if (minutes > 60) {
      return `${hours} godz.`;
    } else {
      return `${minutes} min`;
    }
  }

  getLocalizedRegistrationResult(result: RegistrationResult): string {
    switch (result) {
      case 'DUPLICATE_USERNAME':
        return 'Istnieje już konto z taką nazwą.';
      case 'PASSWORD_TOO_SHORT':
        return 'Podano zbyt krótkie hasło.';
      case 'SUCCESS':
        return 'Pomyślnie utworzono konto.';
    }
  }
}
