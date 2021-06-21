function Movie(director, year, actors, description, url) {
    this.director = director;
    this.year = year;
    this.actors = actors;
    this.description = description;
    this.url = url;
}

function MovieList(name, movies){
    this.name = name;
    this. movies = movies;
}

function Page(name, lists){
    this.name = name;
    this.lists = lists;
}


function NetflixViewModel() {
    this.newMovies = ko.observableArray([
        new Movie("John", 2003, ["Luke", "Sam", "Sarah"], "Luke, Sam und Sarah gehen auf die gleiche Schule. Nach 20 Jahren treffen sie sich wieder bei einem Klassentreffen.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    this.popularMovies = ko.observableArray([
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    this.watchedMovies = ko.observableArray([
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
}

ko.applyBindings(new NetflixViewModel());