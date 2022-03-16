const APP_DEFAULT_SEO = {
  title: 'Mwizz',
  titleTemplate: '%s | Mwizz',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'banner.jpeg',
        height: 1440,
        width: 2560,
        alt: 'banneer',
      },
    ],
  },
  twitter: {
    handle: '@qlaffont',
    site: '@qlaffont',
    cardType: 'summary_large_image',
  },
};

export const ogTitle = (title: string, description = undefined) => ({
  title: APP_DEFAULT_SEO.titleTemplate.replace('%s', title),
  description,
});
export default APP_DEFAULT_SEO;
