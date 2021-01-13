import axios from "axios";

/**
 * An intuitive (unofficial) TypeScript wrapper for the Deck of Cards API. https://deckofcardsapi.com/
 */
class CardDeckAPI {
  async shuffle(decks?: number) {
    const deckCount = decks;
    try {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${deckCount?.toString()}`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async drawFromNewDeck(count: number) {
    const drawCount = count;
    try {
      const response = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${drawCount.toString()}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const api = new CardDeckAPI();

api.drawFromNewDeck(8);
