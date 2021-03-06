import React from "react"
import { Helmet } from "react-helmet"

export default React.memo(({image, seoImg, defaultImg, description, url}) => {
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
        description: description,
        email: "customerservice@michelecorley.com",
        image,
        logo: defaultImg,
        name: "Michele Corley Clinical Skincare",
        openingHoursSpecification: openingHoursSpecification,
        priceRange: "$$",
        sameAs: [
          "https://www.instagram.com/michelecorleyskincare/",
          "https://www.michelecorleyclinicalskincare.com/",
          "https://vimeo.com/michelecorley",
        ],
        telephone: "(707) 287 - 0555",
        url,
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

