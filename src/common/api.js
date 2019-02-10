var BASE_URL = "https://api.ipma.pt/open-data/";

export default {
  async getRegions() {
    let result = await this._get("distrits-islands.json");
    return result.data;
  },

  async getForecasts(globalIdLocal) {
    let url = `forecast/meteorology/cities/daily/${globalIdLocal}.json`;
    let result = await this._get(url);
    return result.data;
  },

  async _get(url, options) {
    options = Object.assign({ mode: "cors" }, options);
    url = new URL(url, BASE_URL);
    try {
      let response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
      return { error };
    }
  }
};
