import axios from "axios";

/**
 * A highly complex function that adds two numbers together.
 */
export function add() {
  async function getUser() {
    try {
      const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getUser();
}

add();
