"use client"
import React, { FC } from "react";
import Head from "next/head";
import { ISeo } from "./mate.interface";
import { useRouter } from "next/router";
import { siteName, titleMerge } from "../seo.config";
import { onlyText } from "../string/clearText";
import logoImage from "../../../public/LOGO.svg";

export const Meta: FC<ISeo> = ({ title, description, image, children }) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.NEXT_PUBLIC_APP_URL}${asPath}`;

  return (
    <>
      {description ? (
        <Head>
          <title itemProp="headline">{titleMerge(title)}</title>
          <meta
            itemProp="description"
            name="description"
            content={onlyText(description, 152)}
          />
          <link rel="canonical" href={currentUrl} />
          <meta property="og:locale" content="ru" />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content={image || logoImage} />
          <meta property="og:site_name" content={siteName} />
          <meta
            property="og:description"
            content={onlyText(description, 197)}
          />
        </Head>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}

      {children}
    </>
  );
};
