import axios from "axios";

/**
 * A highly complex function that adds two numbers together.
 */
class CardDeckAPI {
  async shuffle() {
    try {
      const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export const api = new CardDeckAPI();

api.shuffle();
