import { PropertyBase } from './propertybase.model';

export interface Property extends PropertyBase {
  description: string | null;
}
