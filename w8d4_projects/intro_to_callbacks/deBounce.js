Function.prototype.myDebounce = function(interval) {
    let timer = setTimeout(this, interval);
    return () => {
        clearTimeout(timer);
        timer = setTimeout(this, interval);
        // return this();
    }
}

class SearchBar {
    constructor() {
      this.query = "";
  
      this.type = this.type.bind(this);
      this.search = this.search.bind(this);
    }
  
    type(letter) {
      this.query += letter;
      this.search();
    }
  
    search() {
      console.log(`searching for ${this.query}`);
    }
  }

  const searchBar = new SearchBar();

// Assign searchBar.search to the returned debounced version
searchBar.search = searchBar.search.myDebounce(5000);

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

queryForHelloWorld();

