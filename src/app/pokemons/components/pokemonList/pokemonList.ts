import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCard } from "../pokemon-card/pokemon-card";
import { SimplePokemon } from '../../interfaces';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemonList.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonList {

  public pokemons = input.required<SimplePokemon[]>();

}
