import { TicketTypeName } from "./ticket-type-name";
import { ValidityStatus } from "./validity-status";

export interface Ticket {
  type: TicketTypeName;
  id: number;
  name: string;
  discounted: boolean;
  validitySeconds?: number;
  validityStatus: ValidityStatus;
  startTime?: number;
  validationTime?: number;
  validationRouteNumber?: string;
}
