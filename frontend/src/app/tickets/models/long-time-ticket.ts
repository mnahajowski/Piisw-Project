import {Ticket} from "./ticket";

export interface LongTimeTicket extends Ticket {
  startTime: Date;
  validitySeconds: Number;
}
