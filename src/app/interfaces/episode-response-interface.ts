import { InfoInterface } from "./character-interface";
import { EpisodeInterface } from "./episode-interface";

export interface EpisodeResponseInterface {
    info    : InfoInterface;
    results : EpisodeInterface[];
}
