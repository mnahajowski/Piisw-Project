import {Ticket} from "./ticket";

export interface SingleTicket extends Ticket{
  validationTime: Date;
  validationRouteNumber: String;
}
