DROP TABLE primaireCollectorOffertes;

CREATE TABLE primaireCollectorOffertes (
  ID SERIAL PRIMARY KEY,
  offerteId VARCHAR,
  afstandTussenUitgangen INTEGER
);

INSERT INTO primaireCollectorOffertes (offerteId, afstandTussenUitgangen)
  VALUES ('c01838f1-09d6-486e-a6bc-5dd41282c499', 20);

INSERT INTO primaireCollectorOffertes (offerteId, afstandTussenUitgangen)
  VALUES ('18f27d68-9ec3-46af-a26e-ee41879c6d0d', 8);


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