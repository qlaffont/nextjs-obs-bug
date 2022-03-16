import { useMemo } from 'react';

/* eslint-disable @next/next/no-img-element */
export const Img = ({ src, ...props }) => {
  const webpSrc = useMemo(() => {
    if (!src || !(src.includes('http://') || src.includes('https://'))) {
      return;
    }

    const ext = src.substring(src.lastIndexOf('.') + 1, src.length) || src;

    return src.replace(ext, 'webp');
  }, [src]);

  return (
    <picture {...props}>
      <source srcSet={webpSrc} type="image/webp" />
      {/*eslint-disable-next-line jsx-a11y/alt-text*/}
      <img src={src} {...props} />
    </picture>
  );
};
