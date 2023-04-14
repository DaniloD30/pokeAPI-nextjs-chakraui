export interface IPokemon {
  name: string;
  url: string;
  type?: 'favorite' | 'all';

}

export interface IPokemonCardProps {
  isArtworkBgLoading?: boolean;
  name?: string;
  dexIndex?: number;
}
export interface IPokemonCardArtworkProps {
  artworkUrl: string;
}