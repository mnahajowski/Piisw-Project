import {Ticket} from "./ticket";

export interface TimeTicket extends Ticket{
  validationTime: Date;
  validitySeconds: Number;
}
