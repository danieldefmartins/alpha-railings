export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://alpharailings.com',
    name: 'Alpha Railings',
    description: 'South Florida\'s premier provider of custom glass railings, cable railings, and staircase solutions.',
    url: 'https://alpharailings.com',
    telephone: '+1-954-953-0830',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.1224,
      longitude: -80.1373,
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
    serviceType: [
      'Glass Railings',
      'Cable Railings',
      'Custom Staircases',
      'Shower Doors',
      'Railing Installation',
      'Staircase Design',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://github.com/danieldefmartins/alpha-railings',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
