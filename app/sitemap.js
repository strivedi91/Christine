export default function sitemap() {
  const base = 'https://christinesautomotive.ca'
  const routes = ['/', '/theme/a', '/theme/b', '/theme/c', '/services', '/about', '/reviews', '/contact', '/privacy']
  const serviceSlugs = ['brakes','oil-change','diagnostics','ac-heating','tires','batteries','exhaust']
  return [
    ...routes.map(r => ({ url: base + r, lastModified: new Date() })),
    ...serviceSlugs.map(s => ({ url: base + '/services/' + s, lastModified: new Date() })),
  ]
}
