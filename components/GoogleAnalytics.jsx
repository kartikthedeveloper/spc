"use client";

import Script from "next/script";

// Replace with your real GA4 Measurement ID from Google Analytics → Admin → Data Streams
const GA_MEASUREMENT_ID = "G-0TKJYZNBTL";

export default function GoogleAnalytics() {
  return (
    <>  
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}