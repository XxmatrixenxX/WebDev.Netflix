function Movie(name, director, year, actors, description, url) {
    var self = this;
    self.name = name;
    self.director = director;
    self.year = year;
    self.actors = actors;
    self.description = description;
    self.url = url;

}

function MovieList(name, movies){
    var self = this;
    
    self.name = name;
    self.movies = ko.observableArray(movies);
    
    self.movieSets = ko.computed(function() {
        var movieSetAmount = Math.ceil(self.movies().length / 3);
        var sets = [];
        for(var i = 0; i < movieSetAmount; i++) {
            var movieSet = [];
            for(var j = i * 3; j < i * 3 + 3; j++) {
                if(j < self.movies().length) {
                    movieSet.push(self.movies()[j]);
                }
                else {
                    movieSet.push(null);
                }
            }
            sets.push(movieSet);
        }
        return sets;
    });

}

function NetflixViewModel() {
    var self = this;
    self.newMovies = new MovieList("Neue Filme", [
        new Movie("Pixels", "Chris Columbus", 2015, ["Adam Sandler", "Kevin James", "Kevin James"], "Als Aliens im Stil alter Videospiele die Erde angreifen, treten der Präsident und seine Kindheitsfreunde (ehemalige Videospielfanatiker) in Aktion.", "img/Pixels.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Kingsman the Godencircle.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Greates Showman.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Jurassic World.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Mord in Orientexpress.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Tatortreiniger.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Fatherhood.jpg")
    ]);
    self.popularMovies = new MovieList("Derzeit beliebt", [
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    self.watchedMovies = new MovieList("Nochmal ansehen", [
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);

    self.lists = [self.newMovies, self.popularMovies, self.watchedMovies];

    self.previewMovie = ko.observable();

    self.selectPreviewMovie = function(id) {
        var listAndMovieID = id.split('-');
        var list = self.lists[parseInt(listAndMovieID[0])].movies();
        var movie = list[parseInt(listAndMovieID[1])];
        self.previewMovie(movie);
    };

    // Show first movie by default
    self.selectPreviewMovie("0-0");
}

ko.applyBindings(new NetflixViewModel());