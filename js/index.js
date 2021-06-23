function Movie(name, director, year, actors, description, url) {
    this.name = name;
    this.director = director;
    this.year = year;
    this.actors = actors;
    this.description = description;
    this.url = url;
    var self = this;

    //Operation
    self.getMovie = function(){
        var director = self.director;
        var year = self.year;
        var actors = self.actors;
        var description = self.description;
        var name = self.name;
        return director, year, actors, description, name;
    }

    self.goToMovie = function(movie) { self.chosenMovie(movie);
        $.get('/movie', { movie: movie }, self.chosenMovieData); };

    self.goToPage = function(page) {
            self.Page(page);
            self.chosenMovieData(null); // Stop showing a Movie
            $.get("/Page", { page: üage }, self.page);
        };
}

function MovieList(name, movies){
    this.name = name;
    this.movies = ko.observableArray(movies);
    var self = this;

    self.getMovies = function(){
        var movies = self.movies;
        return movies;
    }

    self.addMovieToList = function(movie){
        self.movies.push(movie);
    }
}

function Page(name, lists){
    this.name = name;
    this.lists = lists;
    var self = this;
}


function NetflixViewModel() {
    this.newMovies = new MovieList("Neue Filme", [
        new Movie("John", 2003, ["Luke", "Sam", "Sarah"], "Luke, Sam und Sarah gehen auf die gleiche Schule. Nach 20 Jahren treffen sie sich wieder bei einem Klassentreffen.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    this.popularMovies = new MovieList("Derzeit beliebt", [
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    this.watchedMovies = new MovieList("Nochmal ansehen", [
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);

    this.page = new Page("Netflix", [this.newMovies, this.popularMovies, this.watchedMovies]);
}

ko.applyBindings(new NetflixViewModel());