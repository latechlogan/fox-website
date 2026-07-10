export type Business = {
  name: string;
  legalName: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: {
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }[];
  areaServed: { type: "City" | "AdministrativeArea"; name: string }[];
  sameAs: string[];
};

export const business: Business = {
  name: "Fox Family Electric",
  legalName: "Fox Family Electric LLC",
  telephone: "+1-318-330-9966",
  email: "admin@foxfamilyelectric.com",
  address: {
    streetAddress: "212 Haynes St",
    addressLocality: "West Monroe",
    addressRegion: "LA",
    postalCode: "71291",
    addressCountry: "US",
  },
  geo: {
    latitude: 32.50708452815773,
    longitude: -92.13205830000001,
  },
  openingHours: [
    {
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "07:00",
      closes: "16:00",
    },
  ],
  areaServed: [
    { type: "City", name: "West Monroe" },
    { type: "City", name: "Monroe" },
    { type: "AdministrativeArea", name: "Northeast Louisiana" },
  ],
  sameAs: [
    "https://www.facebook.com/foxfamilyelectric/",
    "https://www.google.com/search?kgmid=/g/1th0n87l&hl=en-US&q=Fox+Family+Electric+LLC&shndl=30&source=sh/x/loc/osrp/m5/1&kgs=7a6c6d7c85bc01d6&utm_source=sh/x/loc/osrp/m5/1",
    "https://www.linkedin.com/company/fox-family-electric-llc/",
  ],
};
