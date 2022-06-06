import { TicketTypeName } from "./ticket-type-name";

export interface TicketType {
  type: TicketTypeName;
  name: string;
  price: number;
  discounted: boolean;
  validitySeconds?: number;
}
