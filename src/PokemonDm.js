import { LitElement} from 'lit-element';

export class PokemonDm extends LitElement {
  
}

async firstUpdate() {

    const pokemonDM = this.shadowRoot.querySelector('pokemon-dm');
    this.pokemons = await pokemonDM.fetchPokemons();
    console.log('pokemon fetched', thispokemons);
    
}
