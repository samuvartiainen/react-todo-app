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

Projektin voi kloonata Github:issa omalle koneelle. Mene komentorivillä samaan kansioon ja käynnistä se komennolla

### `npm start`

Sovellus käynnistyy paikallisena, avaa selaimella http://localhost:3000 mikäli se ei automaattisesti käynnisty. 

Sovellusta voi testata myös helposti osoitteessa https://react-todo-app-samu.herokuapp.com/, jonne lisäsin sovelluksen. 

### Kehitysideat

- Tehdyt taskit menevät alimmaiseksi
- Mahdollisuus siirtää taskeja eri järjestykseen vetämällä
- Mahdollisuus lisätä prioriteetti taskille
- Taskien tallentaminen tietokantaan, jotta ne säilyvät käyttäjälle
  - Tarvitaan myös tunnustenluonti/kirjautuminen