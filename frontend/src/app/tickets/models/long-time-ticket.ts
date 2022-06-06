import { Ticket } from "./ticket";

export interface LongTimeTicket extends Ticket {
  validitySeconds: number;
}
