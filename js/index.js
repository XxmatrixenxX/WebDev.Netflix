function Movie(director, year, actors, description, url) {
    this.director = director;
    this.year = year;
    this.actors = actors;
    this.description = description;
    this.url = url;
}

function MovieList(name, movies){
    this.name = name;
    this.movies = ko.observableArray(movies);
}

function Page(name, lists){
    this.name = name;
    this.lists = lists;
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