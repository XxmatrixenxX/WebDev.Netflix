// Single Movie object which contains all the necessary data
function Movie(name, director, year, actors, description, url) {
    var self = this;
    self.name = name;
    self.director = director;
    self.year = year;
    self.actors = actors;
    self.description = description;
    self.url = url;

}

// Movie List object which holds all the movies in this list
function MovieList(name, movies) {
    var self = this;

    self.name = name;
    self.movies = ko.observableArray(movies);

    // Calculates the movie sets consisting of 3 movies each to display the sets in the carousel
    self.movieSets = ko.computed(function () {
        var movieSetAmount = Math.ceil(self.movies().length / 3);
        var sets = [];
        for (var i = 0; i < movieSetAmount; i++) {
            var movieSet = [];
            for (var j = i * 3; j < i * 3 + 3; j++) {
                if (j < self.movies().length) {
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

    // Contains all the new movies
    self.newMovies = new MovieList("Neue Filme", [
        // >>> Datensatz hier einfügen
        new Movie("Pixels", "Chris Columbus", 2015, ["Adam Sandler", "Kevin James", "Josh Gad"], "Als Aliens im Stil alter Videospiele die Erde angreifen, treten der Präsident und seine Kindheitsfreunde (ehemalige Videospielfanatiker) in Aktion.", "img/Pixels.webp"),
        new Movie("Kingsman The Golden Circle", "Matthew Vaughn", 2017, ["Colin Firth", "Julianne Moore", "Taron Egerton"], "In der Fortsetzung zu 'Kingsman: The Secret Service' bitten Eggsy und Merlin nach einem Agriff auf ihre Behörde ihre amerikanischen Kollegen um Hilfe.", "img/Kingsman the Godencircle.webp"),
        new Movie("Greatest Showman", "Michael Gracey", 2017, ["Hugh Jackman", "Michelle Williams", "Zac Efron"], "Diese Filmbiografie erzählt die Geschichte des dreisten, doch geschäftstüchtigen P.T. Barnum, der die größte Show auf die Beine stellt, die die Welt je gesehen hat.", "img/Greates Showman.webp"),
        new Movie("Jurassic World", "Colin Trevorrow", 2015, ["Chris Pratt", "Bryce Dallas Howard", "Ty Simpkins"], "Die Betreiber eines Dinosaurier-Parks wollen mit einem furchterregenden neuen Exemplar Besucher anlocken, doch als einer der tödlichen Riesen entkommt, bricht Panik aus.", "img/Jurassic World.webp"),
        new Movie("Mord im Orient Express", "Kenneth Branagh", 2017, ["Kenneth Branagh", "Penélope Cruz", "Judi Dench"], "Der weltberühmte Detektiv Hercule Poirot übernimmt in dieser Verfilmung des Krimis von Agatha Christie einen Mordfall im legendären Orient Express.", "img/Mord in Orientexpress.webp"),
        new Movie("Tatortreiniger", "Arne Feldhusen", 2017, ["Bjarne Mädel"], "Comedy-Serie über die Erlebnisse eines Tatortreinigers, der seine schmutzige Arbeit erst beginnen kann, wenn die Polizei die Tatortanalyse abgeschlossen hat.", "img/Tatortreiniger.webp"),
        new Movie("Fatherhood", "Paul Weitz", 2021, ["Kevin Hart", "Alfre Woodard", "Lil Rel Howery"], "In diesem Drama nach einer wahren Begebenheit muss ein jüngst verwitweter Vater Zweifel, Ängste, Leid und schmutzige Windeln unverhofft ganz allein meistern.", "img/Fatherhood.jpg")
    ]);

    // Contains all the popular movies
    self.popularMovies = new MovieList("Derzeit beliebt", [
        // >>> Datensatz hier einfügen
        new Movie("The Darkest Minds", "Jennifer Yuh Nelson", 2018, ["Amandla Stenberg", "Harris Dickinson", "Mandy Moore"], "Die Regierung sperrt Kinder mit übermenschlichen Fähigkeiten ein. Doch dann lehnen sich einige Jugendliche mit Superkräften im Freiheitskampf gegen ihre Unterdrücker auf.", "img/The Darkest Minds.webp"),
        new Movie("Joker", "Todd Phillips", 2019, ["Joaquin Ohoenix", "Robert De Niro", "Zazie Beetz"], "Ein psychisch kranker Komiker kämpft 1981 in Gotham City darum, gesehen zu werden. Als er sich gegen Angreifer zur Wehr setzen muss, wendet sich sein Leben zum Bösen.", "img/Joker.webp"),
        new Movie("Spiderman Far From Home", "Jon Watts", 2019, ["Tom Holland", "Zendaya", "Samuel L. Jackson"], "Auch Superhelden brauchen gelegentlich Urlaub. Doch aufgrund einer neuen Bedrohung muss Peter Parker sogar bei einer Klassenfahrt nach Europa den Helden spielen.", "img/Spiderman Far from Home.webp"),
        new Movie("Ruhet in Frieden", "Scott Frank", 2014, ["Adam David Thompson", "Mark Consuelos", "Liam Neeson"], "Ein Drogenbaron engagiert einen aufgewühlten Ex-Cop, um die Killer seiner Frau zu finden. Eine Jagd, die in New Yorks Unterwelt zu schockierenden Enthüllungen führt.", "img/Ruhet in Frieden.webp"),
        new Movie("Fack Ju Göhte", "Bora Dağtekin", 2013, ["Elyas M'Barek", "Karoline Herfurth", "Katja Riemanny"], "Die Beute aus seinem letzten Raubüberfall befindet sich nun unter der Turnhalle einer Schule. Also bewirbt sich ein Ex-Gauner als Lehrer, um an sein Diebesgut zu kommen.", "img/Fack ju Göhte.webp"),
        new Movie("Minions", "Kyle Balda", 2015, ["Sandra Bullock", "Jon Hamm", "Michael Keaton"], "Die bananengelben, unverständlichen Handlanger aus „Ich – Einfach unverbesserlich“ sind auch in diesem Vorläufer, in dem ihre Geschichte erzählt wird, die Stars.", "img/Minions.webp"),
        new Movie("It Chapter 2", "Andy Muschietti", 2019, ["Jessica Chastain", "James McAvoy", "Bill Ha"], "27 Jahre nach der Konfrontation mit Pennywise erhält der Club der Verlierer den gefürchteten Anruf: Sie sollen nach Derry zurückkehren und ihre Mission beenden.", "img/It Chapter 2.webp"),
    ]);

    // Contains all the watched movies
    self.watchedMovies = new MovieList("Nochmal ansehen", [
        // >>> Datensatz hier einfügen
        new Movie("Drachenzähmen Leicht Gemacht", "Chris Sanders", 2010, ["Jay Baruchel", "Gerad Butler", "Craig Ferguson"], "Als Sohn eines Wikinger-Anführers muss der schüchterne Hicks der Hüne der III. sich einem Initiationsritus zum Krieger stellen: Er muss einen Drachen töten.", "img/Drachenzähmen.webp"),
        new Movie("Penguins of Madagascar", "Eric Darnelle", 2014, ["Tom McGrath", "Chrisopher Knights", "Chris Miller"], "Die Pinguin-Spione Skipper, Kowalski, Rico und Private wollen zusammen mit den schnittigen Nordwind-Agenten das machthungrige Genie Octavius Brine besiegen.", "img/Pinguin aus Madagaskar.webp"),
        new Movie("Himmelskind", "Patricia Riggen", 2016, ["Jennifer Garner", "Kylie Rogers", "Queen Latifah"], "Die tödliche Krankheit ihrer kleinen Tochter stellt den Glauben von Mutter Christy auf eine harte Probe. Wird sie ihre Tochter und ihr Gottvertrauen retten können?", "img/Himmelskind.webp"),
        new Movie("365 Days", "Barbara Białowąs", 2020, ["Anna-Maria Sieklucka", "Michele Morrone", "Bronisław Wrocławski"], "Eine Frau fällt einem dominanten Mafiaboss zum Opfer, der sie einsperrt und ihr ein Jahr Zeit gibt, sich in ihn zu verlieben.", "img/365 Days.webp"),
        new Movie("The Hateful 8", "Quentin Tarantino", 2015, ["Samuel L. Jackson", "Kurt Russell", "Jennifer Jason Leigh"], "Jahre nach dem Sezessionskrieg sitzen ein Kopfgeldjäger und seine Gefangene während eines Schneesturms zusammen mit sechs bedrohlichen Fremden in einer Herberge fest.", "img/Hate.webp"),
        new Movie("Die Bestimmung Divergent", "Neil Burger", 2014, ["Shailene Woodley", "Miles Teller", "Ashley Judd"], "In einer zerrissenen, vom Krieg erschütterten Welt entdeckt Tris ihre besonderen Fähigkeiten und stellt sich mit Four einer finsteren Verschwörung entgegen.", "img/Die Bestimmung.webp"),
        new Movie("The Dark Knight", "Christopher Nolan", 2008, ["Christian Bale", "Heath Ledger", "Aaron Eckhart"], "Batman, Lieutenant Gordon und der Staatsanwalt bekämpfen die Unterwelt von Gotham City. Doch ein neuer Bösewicht droht ihre Bemühungen zunichtezumachen.", "img/The Dark Knight.webp")
    ]);

    // Contains all three lists
    self.lists = [self.newMovies, self.popularMovies, self.watchedMovies];

    // Holds the currently selected preview or clicked Movie object
    self.previewMovie = ko.observable();
    self.clickedMovie = ko.observable();

    // Sets the previe Movie object
    self.selectPreviewMovie = function (id) {
        var listAndMovieID = id.split('-');
        var list = self.lists[parseInt(listAndMovieID[0])].movies();
        var movie = list[parseInt(listAndMovieID[1])];
        self.previewMovie(movie);
    };

    // Sets the clicked Movie object
    self.selectClickedMovie = function (id) {
        var listAndMovieID = id.split('-');
        var list = self.lists[parseInt(listAndMovieID[0])].movies();
        var movie = list[parseInt(listAndMovieID[1])];
        self.clickedMovie(movie);
    };

    // Show first popular movie by default
    self.selectPreviewMovie("1-0");
    self.selectClickedMovie("0-1");
}

ko.applyBindings(new NetflixViewModel());
