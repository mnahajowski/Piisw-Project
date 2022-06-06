export interface TicketType {
  type: string;
  name: string;
  price: number;
  discounted: boolean;
  validitySeconds?: number;
}
