/** @type {import('next').NextConfig} */
const isPages = process.env.DEPLOY_TARGET === "pages";
const basePath = isPages ? "/samadhan-india" : "";

const legacy = [
  ["/home", "/"],
  ["/about-us", "/about"],
  ["/our-founder", "/about/founder"],
  ["/notes-from-our-founder", "/about/founder"],
  ["/three-qualities-of-leadership", "/about/founder"],
  ["/milestones", "/about/history"],
  ["/organisation-details", "/accountability"],
  ["/the-executive-board", "/about/people"],
  ["/samadhan-brochure", "/about"],
  ["/programmes", "/our-work"],
  ["/special-education", "/our-work/special-education"],
  ["/rehabilitation-services", "/our-work/therapy"],
  ["/dramatherapy", "/our-work/therapy"],
  ["/community-outreach", "/our-work/community"],
  ["/communication-network-on-disability", "/our-work/community"],
  ["/women-empowerment", "/our-work/mothers"],
  ["/early-intervention", "/our-work/early-intervention"],
  ["/activities", "/moments"],
  ["/participating-events", "/moments"],
  ["/conferences", "/moments"],
  ["/cultural-programmes", "/moments"],
  ["/events", "/moments"],
  ["/training-workshops", "/our-work/community"],
  ["/gallery", "/moments"],
  ["/get-involved", "/donate"],
  ["/international-donations", "/donate"],
  ["/volunteer", "/get-involved/volunteer"],
  ["/internship", "/get-involved/internships"],
  ["/reports", "/accountability"],
  ["/document-library", "/accountability"],
  ["/statistics-2008", "/about/history"],
  ["/success-stories", "/stories"],
  ["/category/success-stories", "/stories"],
  ["/collaborations", "/get-involved/partner"],
  ["/able-x-course", "/about/history"],
  ["/contact-us", "/contact"],
  ["/privacy-policy", "/privacy"],
  ["/payal", "/stories"],
  ["/ranjeet", "/stories"],
  ["/farman", "/stories"],
  ["/manu", "/stories"],
  ["/ishan", "/stories"],
  ["/roopali", "/stories"],
  ["/shubhan", "/stories"],
  ["/sneha", "/stories"],
  ["/danielle", "/get-involved/volunteer"],
];

const nextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages
    ? { output: "export", basePath, trailingSlash: true, images: { unoptimized: true } }
    : {
        images: { formats: ["image/avif", "image/webp"] },
        async redirects() {
          return [
            ...legacy.flatMap(([from, to]) => [
              { source: from, destination: to, permanent: true },
              { source: `${from}/`, destination: to, permanent: true },
            ]),
            { source: "/application-form-:slug", destination: "/get-involved/internships", permanent: true },
            { source: "/statistics-:slug", destination: "/about/history", permanent: true },
            { source: "/www/:path*", destination: "/", permanent: true },
            { source: "/:file(index|home|about|contact|donate)\\.html", destination: "/", permanent: true },
          ];
        },
      }),
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default nextConfig;
