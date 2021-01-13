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
      return error;
    }
  }

  async drawFromNewDeck(amount: number) {
    const drawAmount = amount;
    try {
      const response = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=${drawAmount.toString()}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async drawFromExistingDeck(deckID: string, drawAmount: number) {
    const existingDeck = deckID;
    const drawCount = drawAmount;
    try {
      const response = await axios.get(`https://deckofcardsapi.com/api/deck/${existingDeck}/draw/?count=${drawCount}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

export const api = new CardDeckAPI();
