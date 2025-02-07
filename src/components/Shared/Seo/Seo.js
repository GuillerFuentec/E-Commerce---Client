import Head from "next/head";

export function Seo(props) {
  const {
    title = "Gaming | Lots games",
    description = "Your favorite steam's games, Playstation, Xbox, Nintendo Switch at bests prices",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

// import Head from "next/head";

// export function Seo({ title, description, image }) {
//   return (
//     <Head>
//       {/* Basic Meta Tags */}
//       <title>{title}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content="SEO, Best SEO Practices, Next.js SEO, Web Optimization, Ranking #1, AI SEO, Google Optimization" />
//       <meta name="robots" content="index, follow" />
//       <meta name="author" content="Your Brand or Name" />
//       <meta httpEquiv="Content-Language" content="en" />

//       {/* Canonical URL */}
//       <link rel="canonical" href={typeof window !== "undefined" ? window.location.href : ""} />

//       {/* Open Graph (Facebook, LinkedIn) */}
//       <meta property="og:type" content="website" />
//       <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       {image && <meta property="og:image" content={image} />}
//       <meta property="og:site_name" content="Your Site Name" />

//       {/* Twitter Cards */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       {image && <meta name="twitter:image" content={image} />}
//       <meta name="twitter:site" content="@YourTwitterHandle" />

//       {/* Google Verification (Para Search Console) */}
//       <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />

//       {/* Bing Verification */}
//       <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />

//       {/* Apple Touch Icons (Para iOS) */}
//       <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

//       {/* Favicon */}
//       <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
//       <link rel="manifest" href="/site.webmanifest" />

//       {/* Schema.org (Google Rich Snippets) */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "WebPage",
//           "name": title,
//           "description": description,
//           "url": typeof window !== "undefined" ? window.location.href : "",
//           "image": image || "",
//           "author": {
//             "@type": "Person",
//             "name": "Your Brand or Name"
//           },
//           "publisher": {
//             "@type": "Organization",
//             "name": "Your Company",
//             "logo": {
//               "@type": "ImageObject",
//               "url": "/logo.png"
//             }
//           }
//         })}
//       </script>
//     </Head>
//   );
// }
