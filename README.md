# Students-TypeScript
Schritt 1: Schreibt eine Funktion die einen Studenten mit seinen Noten ausgibt, dabei soll ein Student mit Vorname, Nachname, Alter und einer Liste von Noten ausgegeben werden.


Highlightet die Ausgabe der Vor- und Nachnamen, des Alters und der Noten durch eine Zeile mit 30x "=".
Beispiel:


Anton Meier (17)
==============================
Noten: 1,4,3,1,3,2,1,2


Schritt 2: Erlaubt auch Strings und number als Benotung
Aufgabenstellung:


stellt sicher, dass neben den Noten als Zahlen (deutsches System) auch Werte A bis F (amerikanisches System) in den Noten unterstützt werden. Die Funktion soll die Noten des Studenten ausgeben.


Beispiel:


Anton Meier (17) 
==============================
 Noten: A,2,F,3,1,B,2,5


Schritt 3: Erlaubt auch undefined als Wert (in der Ausgabe als *)
Aufgabenstellung:


stellt sicher, dass nun auch "undefined" als Wert in den Noten unterstützt wird. Die Funktion soll die Noten des Studenten ausgeben und "undefined" als "*" darstellen. (Z.B. weil der Student verhindert war und nicht benotet wurde).


Beispiel:


Anton Meier (17) 
===========================
 Noten: A,2,*,3,1,B,*,5


Schritt 4: Gibt eine Liste mit allen Studenten in der Konsole aus
Aufgabenstellung:


schreibt eine Funktion, die eine Liste mit allen Studenten in der Konsole ausgibt.


Beispiel


Anton Meier (16)
===========================
 Noten: 1,4,3,1,A,*,1,2

Berta Müller (17)
===========================
Noten: A,*,1

 Cäsar Schmidt (17)
==========================
 Noten: A,1,*, 3,2,4,5


### Bonus Aufgabe
schreibt eine Funktion, die die Namen der Studenten mit "=====" hervorhebt. Dabei soll für jeden Character im Eintrag genau so viele "="-Zeichen verwendet werden wie für den Namen und das Alter des Studenten benötigt werden.
Beispiel


Anton Meier (16) 
===================
 Noten: 1,4,3,1,A,*,1,2 

Berta Müller (17) 
==================
 Noten: A,*,1

 Cäsar Schmidt (17)
 =============== 
 Noten: A,1,* , 3,2,4,5


Bonus:
Aufgabenstellung:


strukturiert den Studenten und das Zeugnis so um, dass Noten bestimmten Fächern zugeordnet werden können. Anschließend soll der Student mit den entsprechenden Noten pro Fach formatiert ausgegeben werden.


Florian Weber (14)
 ==============

Noten: 
Sport: A,1,* 
Kunst: 3,2,4,5
Mathe: 1,2,A


Bonus Notenschnitt:
Berechne pro Schülerin und später auch für die gesamte Liste von Schülerinnen den Notendurchschnitt. Diskutiert gemeinsam auch, wie Ihr die Berechnung genau gestalten wollt (inkl. Umgang mit undefined, Gewichtungen wenn ein*e mehr Noten als andere hat, usw)
