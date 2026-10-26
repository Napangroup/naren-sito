# Naren Immobiliare — sito su GitHub Pages

Sito di Naren Immobiliare, pubblicato gratis con GitHub Pages su www.narenimmobiliare.it, sullo stesso account GitHub del sito Napan.

## Gestione dal pannello (app.pagescms.org)
- **Immobili**: ogni scheda è un immobile di qualsiasi tipo (bilocale, ufficio, negozio, box, ecc.), in affitto o in vendita.
  - "Visibile sul sito" acceso: la scheda compare in vetrina. Spento: sparisce dal sito ma resta nel pannello, pronta per quando l'immobile si libera.
  - La prima foto è la copertina. Senza foto il sito mostra un'illustrazione.
  - "Ordine in vetrina": 1 = primo.
- **Dati del sito**: testi dell'apertura, video di apertura, servizi di ristrutturazione, foto prima/dopo, dati societari, contatti, WhatsApp, impostazioni dei moduli.

## Moduli (preventivo e prenotazione visite)
- Senza configurazione: al clic su "Invia" si apre l'app di posta di chi compila, con l'email già pronta verso il tuo indirizzo.
- Con un servizio di invio (es. Formspree, piano gratuito): incolla l'indirizzo del modulo in "Moduli: indirizzo del servizio di invio" e il nome del fornitore nel campo sotto (serve alla privacy policy). Le richieste ti arrivano per email senza che il visitatore apra la posta.

## Struttura
- `_immobili/` — una scheda per file
- `_data/impostazioni.yml` — dati del sito
- `.pages.yml` — configurazione del pannello
- `_layouts/`, `_includes/` — impaginazione
- `assets/` — stile, script, caratteri, logo; `assets/uploads/` foto e video caricati dal pannello
- `CNAME` — dominio (www.narenimmobiliare.it)

## Cookie
Il sito non usa cookie né strumenti di tracciamento, quindi non serve il banner. Foto e video sono ospitati sul sito stesso (niente YouTube).
