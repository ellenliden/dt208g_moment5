# Kurser & Ramschema - Angular Applikation

## Projektbeskrivning

Denna webbapplikation är skapad för ett lärosäte där studenter kan söka bland kurser och skapa ett personligt ramschema. Applikationen är byggd med Angular och TypeScript och fokuserar på användarvänlighet och responsiv design.

## Uppgift

Skapa en webbplats för ett fiktivt lärosäte där studenter kan:

- Söka och bläddra bland kurser
- Filtrera och sortera kurser
- Se antal kurser i aktuell sökning
- Skapa ett personligt ramschema
- Se antal valda kurser i ramschemat
- Se totala högskolepoäng för de valda kurserna i ramschemat

## Grundkrav - Uppfyllda

### Tekniska krav:

- **Angular och TypeScript**: Applikationen är byggd med Angular och TypeScript
- **Minst två undersidor**: Implementerat sidorna courses och schedule
- **Komponenter och routing**: Använder Angular routing för navigation
- **Minst två services**:
  - `CourseService` - Hanterar kursdata
  - `ScheduleService` - Hanterar ramschema-funktionalitet
- **Ramschema utan dubletter**: Förhindrar att samma kurs läggs till flera gånger
- **Uppdatering utan sidomladdning**: Reaktiva uppdateringar med RxJS
- **localStorage**: Sparar ramschema lokalt och laddar vid sidomladdning
- **Responsiv design**: Fungerar på både stora och små skärmar

### Kurskrav:

- **Sortering**: På kurskod, kursnamn, poäng, ämne
- **Filtrering**: På kurskod, kursnamn, ämne, nivå
- **Välja ut kurser från ämne**: Dropdown för ämnesfilter
- **Lägga till kurser**: "Spara kurs" knapp
- **Antal kurser**: Visar antal i aktuell sökning

### Ramschema-krav:

- **Tydlig presentation**: Kurskort med all information
- **Antal kurser**: Beräknas och visas automatiskt
- **Antal sammanlagda poäng**: Beräknas och visas automatiskt
- **Ta bort kurser**: "Ta bort från ramschema" knapp
- **localStorage**: Sparar och laddar automatiskt

## Extra Funktionalitet

Jag har skapat en välutgormad webbplats när det kommer till användargränssnitt och responsivitet. Webbplatsen har en tydlig presentation av kurserna samrt antal kurser och högskolepoäng. Webbplatsen har dessutom två extra sidor - en startsida och en kontaktsida. Ett konsistent färgschema används. Hover-effekter såsom interaktiva element med smooth transitions samt FontAwesome-ikoner används för bättre visuell feedback.

Jag har skapat en responsiv navigation med routing. Länkar och knappar ändrar utseende vid interaktion. Informativa meddelanden visas när inga kurser finns eller när sidan laddas.

Jag använder Error handling för hantering av fel vid laddning av kurser (skrivs ut till console-loggen). Loading states används för en laddningsindikator.

## Teknisk Stack

- **Framework**: Angular 20
- **Språk**: TypeScript
- **Styling**: CSS3 med Grid och Flexbox
- **Ikoner**: FontAwesome
- **State Management**: RxJS BehaviorSubject
- **Data Storage**: localStorage
- **HTTP**: Angular HttpClient

## Installation och Körning

1. **Installera dependencies**:

   ```
   npm install
   ```

2. **Starta utvecklingsserver**:

   ```
   npm start
   ```

3. **Öppna applikationen**:
   Navigera till `http://localhost:4200`

## Slutsats

Denna applikation uppfyller alla grundkrav och innehåller flera extra funktioner som visar på fördjupad förståelse för Angular och TypeScript. Koden är väl strukturerad, användarvänlig och redo för produktionsanvändning.
