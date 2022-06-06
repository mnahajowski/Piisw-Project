import { ValidityStatus } from "./validity-status";

export interface Ticket {
  type: string;
  name: string;
  discounted: boolean;
  validitySeconds?: number;
  validityStatus: ValidityStatus;
  startTime?: number;
  validationTime?: number;
  validationRouteNumber?: string;
}
