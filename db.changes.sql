DROP TABLE secundaireCollectorOffertes;

CREATE TABLE secundaireCollectorOffertes (
  ID SERIAL PRIMARY KEY,
  creationTime timestamp,
  omschrijving varchar,
  offerteId VARCHAR,
  afstandTussenCircuits decimal,
  debiet decimal,
  vermogen decimal,
  temperatuurVerschil decimal,
  watersnelheid decimal,
  diameter decimal
);

DROP TABLE contactaanvraag;

CREATE TABLE contactaanvraag (
  ID SERIAL PRIMARY KEY,
  contactId VARCHAR,
  naam VARCHAR,
  bedrijf VARCHAR,
  email VARCHAR,
  tel VARCHAR,
  bericht VARCHAR
);