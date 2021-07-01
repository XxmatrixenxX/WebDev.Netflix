============================
Hinzufügen eines Datensatzes
============================

Ein neuer Datensatz kann im File >> index.js << hinzugefügt werden.

Dort gibt es die function >> NetflixViewModel() << , welche die folgenden drei Listen enthält:
	self.newMovies 	   = Neue Filme
	self.popularMovies = Derzeit beliebt
	self.watchedMovies = Nochmal ansehen

Im jeweiligen Array kann der Datensatz mit der folgenden Syntax eingefügt werden:
	new Movie("Titel", "Regisseur", Jahr, ["Darsteller 1", "Darsteller 2", "Darsteller 3"], "Beschreibung", "URL")

Die Datentypen sind wie folgt:
	new Movie(Filmtitel 		<string>,
		  Regisseur 		<string>,
		  Erscheinungsjahr	<number>,
		  Darsteller		<string[]>,
		  Kurzbeschreibung	<string>,
		  Bild-URL		<string>
		 )

Die Stelle, an der ein Datensatz eingefügt werden kann, ist im jeweiligen Array mit dem folgenden Kommentar markiert:
	// >>> Datensatz hier einfügen
Diese Stellen befinden sich in den folgenden Zeilen:
	Neue Filme	: Zeile 46
	Derzeit beliebt	: Zeile 58
	Nochmal ansehen	: Zeile 70

!!! Wenn der Datensatz zwischen den anderen Datensätzen im Array eingefügt wird, muss am Ende
!!! des Datensatzes ein Komma angefügt werden.
!!! Wenn der Datensatz am Ende des Arrays eingefügt wird, muss dem vorherigen
!!! Datensatz ein Komma angefügt werden

============================
Funktion der Website
============================

Die Website besteht aus den Files
	css/index.css
	js/index.js
	index.html
Außerdem sind die Files für Bootstrap und Knockout.js enthalten.
Im Ordner >> img << sind die jeweiligen Bilder der Filme enthalten.

- Website wird über index.html gestartet
- Listen werden über die Pfeil-Buttons durchgescrollt
- Beim Hovern mit der Maus über ein Film-Bild in der Liste, wird eine Vorschau
  im oberen Banner auf der Seite angezeigt.
- Beim Anklicken des Film-Bildes in der Liste gelangt man zur Detailansicht
  mit allen Informationen
- Über den "Zurück"-Button oder durch klicken außerhalbs der Detailansicht
  gelangt man zurück zur Startseite
