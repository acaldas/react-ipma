var BASE_URL = "https://api.ipma.pt/open-data/";

export default {
  async getRegions() {
    const result = await this._get("distrits-islands.json");
    return result.data;
  },

  async getForecasts(globalIdLocal) {
    const url = `forecast/meteorology/cities/daily/${globalIdLocal}.json`;
    const result = await this._get(url);
    return result.data;
  },

  async _get(url, options) {
    options = Object.assign({ mode: "cors" }, options);
    url = new URL(url, BASE_URL);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return { error };
    }
  }
};
