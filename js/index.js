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
        new Movie("Pixels", "Chris Columbus", 2015, ["Adam Sandler", "Kevin James", "Josh Gad"], "Als Aliens im Stil alter Videospiele die Erde angreifen, treten der Präsident und seine Kindheitsfreunde (ehemalige Videospielfanatiker) in Aktion.", "img/Pixels.webp"),
        new Movie("Kingsman The Golden Circle","Matthew Vaughn", 2017, ["Colin Firth", "Julianne Moore", "Taron Egerton"], "In der Fortsetzung zu 'Kingsman: The Secret Service' bitten Eggsy und Merlin nach einem Agriff auf ihre Behörde ihre amerikanischen Kollegen um Hilfe.", "img/Kingsman the Godencircle.webp"),
        new Movie("Greatest Showman","Michael Gracey", 2017, ["Hugh Jackman", "Michelle Williams", "Zac Efron"], "Diese Filmbiografie erzählt die Geschichte des dreisten, doch geschäftstüchtigen P.T. Barnum, der die größte Show auf die Beine stellt, die die Welt je gesehen hat.", "img/Greates Showman.webp"),
        new Movie("Jurassic World","Colin Trevorrow", 2015, ["Chris Pratt", "Bryce Dallas Howard", "Ty Simpkins"], "Die Betreiber eines Dinosaurier-Parks wollen mit einem furchterregenden neuen Exemplar Besucher anlocken, doch als einer der tödlichen Riesen entkommt, bricht Panik aus.", "img/Jurassic World.webp"),
        new Movie("Mord im Orient Express","Kenneth Branagh", 2017, ["Kenneth Branagh", "Penélope Cruz", "Judi Dench"], "Der weltberühmte Detektiv Hercule Poirot übernimmt in dieser Verfilmung des Krimis von Agatha Christie einen Mordfall im legendären Orient Express.", "img/Mord in Orientexpress.webp"),
        new Movie("Tatortreiniger","Arne Feldhusen", 2017, ["Bjarne Mädel"], "Comedy-Serie über die Erlebnisse eines Tatortreinigers, der seine schmutzige Arbeit erst beginnen kann, wenn die Polizei die Tatortanalyse abgeschlossen hat.", "img/Tatortreiniger.webp"),
        new Movie("Fatherhood","Paul Weitz", 2021, ["Kevin Hart", "Alfre Woodard", "Lil Rel Howery"], "In diesem Drama nach einer wahren Begebenheit muss ein jüngst verwitweter Vater Zweifel, Ängste, Leid und schmutzige Windeln unverhofft ganz allein meistern.", "img/Fatherhood.jpg")
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
    self.clickedMovie = ko.observable();

    self.selectPreviewMovie = function(id) {
        var listAndMovieID = id.split('-');
        var list = self.lists[parseInt(listAndMovieID[0])].movies();
        var movie = list[parseInt(listAndMovieID[1])];
        self.previewMovie(movie);
    };

    self.selectClickedMovie = function(id) {
        var listAndMovieID = id.split('-');
        var list = self.lists[parseInt(listAndMovieID[0])].movies();
        var movie = list[parseInt(listAndMovieID[1])];
        self.clickedMovie(movie);
    };

    // Show first movie by default
    self.selectPreviewMovie("0-0");
    self.selectClickedMovie("0-1");
}

ko.applyBindings(new NetflixViewModel());