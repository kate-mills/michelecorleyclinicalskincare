import React from "react"
import { Helmet } from "react-helmet"

export default React.memo(() => {
    const openingHoursSpecification = [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "16:00",
      },
    ]
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.michelecorleyclinicalskincare.com",
        description: "Professional skin care products available through licensed estheticians. Clean, safe, efficacious formulas.",
        email: "customerservice@michelecorley.com",
        logo: "https://images.ctfassets.net/42crzdn8wqcc/15b5rAcZVFYSCm0R6w54N8/19d143ac45e5a29acaf9e9eaefeb56be/monogram.jpg?w=800&h=800&q=100",
        image:  "https://images.ctfassets.net/42crzdn8wqcc/1xvbz9U4f2VfdBUH29Sr9C/74044e69895398332f88569e2074b876/mcc-logo.jpg?w=800&h=587&q=100",
        name: "Michele Corley Clinical Skincare",
        openingHoursSpecification: openingHoursSpecification,
        priceRange: "$$",
        sameAs: [
          "https://www.instagram.com/michelecorleyskincare/",
          "https://www.michelecorleyclinicalskincare.com/",
          "https://vimeo.com/michelecorley",
        ],
        telephone: "(707) 287 - 0555",
        url: "michelecorleyclinicalskincare.com",
        paymentAccepted: [ "credit card" ],
      	address: {
		      "@type": "PostalAddress",
          addressCountry: "USA",
		      addressLocality: "Beaufort",
		      addressRegion: "SC",
          name: "Michele Corley Clinical Skincare",
		      postalCode: "29902",
		      streetAddress: "1400 Lafayette Street",
	      },
        geo: {
          "@type": "GeoCoordinates",
		      "latitude": "32.44588444063868",
		      "longitude": "-80.6779530598902"
        },
      },
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)

