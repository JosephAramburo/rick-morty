export interface LocationInterface{
    name    : string;
    url     : string;
}

export interface CharacterShared{
    name        : string;
    episodes    : number;
}

export interface CardItemInterface {
    id              : number;
    name            : string;
    status          : string;
    species         : string;
    type            : string;
    gender          : string;
    origin          : LocationInterface,
    location        : LocationInterface;
    image           : string;
    episode         : string[]
    url             : string;
    created         : string;
    seen            ?: string;
    characterShared ?: CharacterShared[]; 
}
