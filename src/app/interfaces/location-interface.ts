import { InfoInterface } from "./character-interface";
import { LocationItemInterface } from "./location-item-interface";

export interface LocationInterface {
    info    : InfoInterface;
    results : LocationItemInterface[];
}
