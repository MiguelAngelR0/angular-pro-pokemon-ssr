import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { PokemonList } from '../../pokemons/components/pokemonList/pokemonList';
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { PokemonsService } from '../../pokemons/services/pokemons';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pokemons-page',
  imports: [PokemonList, PokemonListSkeleton],
  templateUrl: './pokemonsPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPage implements OnInit {
  private pokemonsService = inject(PokemonsService);
  public pokemons = signal<SimplePokemon[]>([]);

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private title = inject(Title);

  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map((params) => params.get('page') ?? '1'),
      map((page) => (isNaN(+page) ? 1 : +page)),
      map((page) => Math.max(1, page)),
    ),
  );

  // public isLoading = signal(true);

  // private appRef = inject(ApplicationRef);

  // private $appState = this.appRef.isStable.subscribe( isStable => console.log( "Es estable ", isStable))

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(console.log)

    this.loadPokemons();
    // setTimeout(() => {
    //   this.isLoading.set(false)
    // }, 3000)
    console.log(this.currentPage());
  }

  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe();
  // }

  public loadPokemons(page = 0) {
    //this.curentPage viene de un observable por lo que no lo podemos actualizar
    const pageToLoad = this.currentPage()! + page;

    this.pokemonsService.loadPage(pageToLoad)
    .pipe(
      tap(() =>  this.router.navigate([],{queryParams: { page: pageToLoad}}) ),
      tap(() => this.title.setTitle(`Pokemons SSR - Page ${pageToLoad}`))
    )
    .subscribe((pokemons) => {
      this.pokemons.set(pokemons);
    });
  }
}
