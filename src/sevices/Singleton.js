export default class Singleton {
  static myInstance = null;
  search = "";
  id=""
  static getInstance() {
    if (Singleton.myInstance == null) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  getID() {
    return this.id
  }

  setID(id) {
    this.id = id
  }

  getSearch() {
    return this.search;
  }

  setSearch(search) {
    this.search = search;
  }
}
