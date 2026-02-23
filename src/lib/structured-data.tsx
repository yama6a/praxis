import {
  SITE_URL,
  SITE_NAME,
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  BUSINESS_PHONE,
  BUSINESS_GEO,
} from "./constants";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#business` },
    inLanguage: "de-DE",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebPageJsonLd({
  name,
  url,
  description,
  mainEntityId,
}: {
  name: string;
  url: string;
  description: string;
  mainEntityId?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url: `${SITE_URL}${url}`,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    inLanguage: "de-DE",
  };

  if (mainEntityId) {
    data.mainEntity = { "@id": mainEntityId };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "Organization"],
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: `${SITE_NAME} – ${BUSINESS_NAME}`,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    image: `${SITE_URL}/images/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_ADDRESS.street,
      addressLocality: BUSINESS_ADDRESS.city,
      addressRegion: BUSINESS_ADDRESS.district,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.lat,
      longitude: BUSINESS_GEO.lng,
    },
    founder: {
      "@type": "Person",
      name: BUSINESS_NAME,
      jobTitle: "Heilpraktikerin und Yogalehrerin",
    },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
    priceRange: "€€",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yoga-Kurse" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yoga-Therapie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shiatsu-Behandlung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shiatsu in Betrieben" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bach-Blütentherapie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fußreflexzonenmassage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Schröpfen" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  additionalType,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  additionalType?: string;
  serviceType?: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${url}#service`,
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: "Berlin",
    },
  };

  if (additionalType) {
    data.additionalType = additionalType;
  }
  if (serviceType) {
    data.serviceType = serviceType;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
