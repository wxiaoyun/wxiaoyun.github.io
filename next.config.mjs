import withExportImages from "next-export-optimize-images";

/** @type {import('next').NextConfig} */
const nextConfig = withExportImages({
  // output: "export",
  output: process.env.OUTPUT_MODE === "export" ? "export" : "standard",
  reactStrictMode: true,
});

export default nextConfig;
