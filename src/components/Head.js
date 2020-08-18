import React from 'react';
import { Helmet } from 'react-helmet';

import useTheme from '@material-ui/core/styles/useTheme';

import config from '@src/config';

export default function Head(props) {
  // console.group('Head.js');
  // console.log({ props });
  // console.groupEnd();

  const theme = useTheme();

  return (
    <Helmet encodeSpecialCharacters={true} titleTemplate={`%s ⋅ ${config.title}`} defaultTitle={config.title}>
      <html lang="en" />

      {/* <link href="/assets/images/favicon.ico" type="image/png" rel="icon"> */}
      <link rel="canonical" href={config.url} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <meta name="author" content="Mogli Studio — https://moglistudio.com" />
      <meta name="charset" content="utf-8" />
      <meta name="coverage" content="Worldwide" />
      <meta name="description" content={config.description} />
      <meta name="designer" content="Mogli Studio — https://moglistudio.com" />
      <meta name="distribution" content="Global" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="keywords" content={config.keywords} />
      <meta name="language" content="en" />
      <meta name="rating" content="General" />
      <meta name="revist-after" content="after 1 days" />
      <meta name="robots" content="index,follow" />
      <meta name="title" content={config.title} />
      <meta
        name="viewport"
        content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 1.0, user-scalable=yes, shrink-to-fit=no"
      />

      {/* twitter metadata */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@biffud" />

      {/* og metadata */}
      <meta property="og:description" content={config.description} />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:title" content={config.title} />
      <meta property="og:url" content={config.url} />
      {/* <meta
        property="og:image"
        content="<?php echo thumb($site->coverimage()->toFile(), array('width' => 1200, 'height' => 630, 'crop' => true ))->url() ?>"
      />
      <meta
        property="og:image:secure_url"
        content="<?php echo thumb($site->coverimage()->toFile(), array('width' => 1200, 'height' => 630, 'crop' => true ))->url() ?>"
      /> */}

      <style>
        {`
          html, body { background: ${theme.palette.background.paper} !important }
          button:focus,
          a:focus {
            outline: none;
          }
        `}
      </style>
    </Helmet>
  );
}
