import { Ticket } from "./ticket";

export interface TimeTicket extends Ticket {
  validitySeconds: number;
}
