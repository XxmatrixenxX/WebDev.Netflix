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

    self.getMovies = function(){
        var movies = self.movies;
        return movies;
    }

    self.addMovieToList = function(){
        self.movies.push(new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"));
    }
    //self.addMovieToList = function(movie){
    //    self.movies.push(movie);
    //}
}

function Page(name, lists){
    this.name = name;
    this.lists = lists;
    var self = this;
}


function NetflixViewModel() {
    this.newMovies = new MovieList("Neue Filme", [
        new Movie("Pixels", "Chris Columbus", 2015, ["Adam Sandler", "Kevin James", "Kevin James"], "Als Aliens im Stil alter Videospiele die Erde angreifen, treten der Präsident und seine Kindheitsfreunde (ehemalige Videospielfanatiker) in Aktion.", "img/Pixels.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Kingsman the Godencircle.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Greates Showman.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Jurassic World.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Mord in Orientexpress.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Tatortreiniger.webp"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/Fatherhood.jpg")
    ]);
    this.popularMovies = new MovieList("Derzeit beliebt", [
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);
    this.watchedMovies = new MovieList("Nochmal ansehen", [
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png"),
        new Movie("The Movie","Tom", 2012, ["Tim", "Jim", "Guy"], "Test text, um die Website zu testen. Diese Informationen haben nichts mit dem Film selbst zu tun, es handelt sich lediglich um einen Platzhalter.", "img/placeholder.png")
    ]);

    this.page = new Page("Netflix", [this.newMovies, this.popularMovies, this.watchedMovies]);
}

ko.applyBindings(new NetflixViewModel());