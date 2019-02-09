var BASE_URL = "https://api.ipma.pt/open-data/";

export default {
  async getRegions(options) {
    let result = await this._get("distrits-islands.json");
    return result.data;
  },

  async _get(url, options) {
    url = new URL(url, BASE_URL);
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
};
