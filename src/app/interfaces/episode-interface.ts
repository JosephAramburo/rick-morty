import { CharacterInfo } from "./character-interface";

export interface EpisodeInterface {
    id              : number;
    name            : string;
    air_date        : string;
    episode         : string;
    characters      : string[];
    charactersInfo ?: CharacterInfo[];
    url             : string;
    created         : string;
    
}
