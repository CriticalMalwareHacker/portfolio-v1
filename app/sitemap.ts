
export default async function sitemap() {
  const routes = [
    "",
    "/about",
    "/uses",
    "/work",
  ].map((route) => ({
    url: `https://beta.vimfn.in${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
