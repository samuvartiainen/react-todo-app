# react-todo-app

## Käytetyt teknologiat

React, Express.js, Node.js ja Material UI -kirjasto

## Toiminnallisuus

Sovelluksella voi:
- Lisätä taskin
- Poistaa taskin
- Merkata taskin tehdyksi checkbox:illa, jolloin
  - Yliviivataan teksti
  - Taskin taustaväri vaihtuu vaaleanharmaaksi
- Merkata taskin uudestaan tekemättömäksi checkbox:illa, jolloin
  - Teksti palautuu normaaliksi
  - Taskin taustaväri vaihtuu takaisin oranssiksi

Sovelluksen responsiivisuus on otettu huomioon mm. määrittelemällä css:än puolella leveyttä vw:n ja max width:in avulla.

## Ohjeet ajamiseen

Koneella tulee olla ladattuna ja asennettuna Node.js. https://nodejs.org/en/download/

Projektin voi kloonata Github:ista omalle koneelle. Mene komentorivillä projektin kansioon ja käynnistä se komennolla

### `npm start`

Sovellus käynnistyy paikallisena, avaa selaimella http://localhost:3000 mikäli se ei automaattisesti käynnisty. 

Sovellusta voi testata myös helposti osoitteessa https://react-todo-app-samu.herokuapp.com/, jonne lisäsin sovelluksen. 

## Kehitysideat

- Tehdyt taskit menisivät alimmaiseksi
- Mahdollisuus editoida jo lisättyä taskia
  - Klikkaamalla aukeaa laajeneva osa, jossa lisää tietoa kuten tarkempi kuvaus tai deadline 
- Mahdollisuus siirtää taskeja eri järjestykseen vetämällä
- Mahdollisuus lisätä prioriteetti taskille
- Taskien tallentaminen tietokantaan, jotta ne säilyvät käyttäjälle 
  - Voitaisi käyttää myös eri laitteilta, jos tietokanta on pilvipalveluna (esim. AWS tai MongoDB Atlas)
  - Tunnustenluonti, kirjautuminen, tunnistautuminen
