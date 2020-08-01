
## Jetsetter

Aplikacja ułatwiająca pakowanie niezbędnych rzeczy na wyjazd. Projekt stworzony w ramach utrwalenia wiadomości pozyskanych w trakcie kursu na platformie *frontendmasters.com* dotyczącego zarządzania stanem aplikacji w React.JS.

## DEMO

*https://jetsetter.netlify.app/*

#### Aplikacja składa się z jednego kontenera, kilku komponentów oraz prostego API

* odpowiada on za przydzielanie stanu odpowiednim komponentom w aplikacji,
* dodatkowo dane są przechowywane w pamięci lokalnej *localForage*, dzięki czemu istnieje możliwość uzyskania poprzedniego stanu po ponownym uruchomieniu aplikacji,

#### Możliwości

* dodanie nowego przedmiotu,
* przefiltrowanie spakowanych/niespakowanych przedmiotów po nazwie,
* zaznaczenie przedmiotu jako 'spakowany',
* odznaczenie przedmiotu,
* przyciski: zaznaczenie wszystkich jako spakowane, zaznaczenie wszystkich jako niespakowane, usunięcie spakowanych przedmiotów,
* przyciski 'redo' oraz 'undo' umożliwiające przeskakiwanie po stanie aplikacji.

#### Użyte technologie

* Javascript,
* React.JS:
  * class components, containers pattern,  react-redux, redux-thunk, redux-saga,
* HTML5,
* CSS3.

#### Uruchamienie:

1. npm install
2. npm run dev
