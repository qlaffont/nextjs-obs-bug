import { NextSeo } from 'next-seo';
import React from 'react';

import { ogTitle } from '../../services/seo/next-seo.config';

export const SEO = ({ title, description = undefined }) => (
  <NextSeo title={title} openGraph={ogTitle(title)} description={description?.replace(/<\/?[^>]+(>|$)/gi, '')} />
);
