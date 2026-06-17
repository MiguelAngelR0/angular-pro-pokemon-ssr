import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { SimplePokemon } from '../../interfaces';
import { computeMsgId } from '@angular/compiler';

@Component({
  selector: 'app-pokemon-card',
  imports: [RouterLink],
  templateUrl: './pokemon-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCard {

  public pokemon = input.required<SimplePokemon>();

  public readonly pokemonImage = computed(() => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon().id}.png`)

  // logEffect = effect(() => {
  //   console.log('PokemonCard: ',this.pokemon());
  // })


}
