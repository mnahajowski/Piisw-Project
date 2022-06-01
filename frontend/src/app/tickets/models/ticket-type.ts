import {ValidityStatus} from "./validity-status";

export interface TicketType {
  type: string;
  name: string;
  price: number;
  discounted: boolean;
  validitySeconds: number;
  validityStatus: ValidityStatus;
  startTime: number;
  validationTime: number;
  validationRouteNumber: string;
}
