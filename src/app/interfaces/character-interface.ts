import { CardItemInterface } from "./card-item-interface";

export interface InfoInterface{
    count   : number;
    pages   : number;
    next    : string;
    prev    : string | null
}

export interface CharacterInterface {
    info    : InfoInterface;
    results : CardItemInterface[];
}
