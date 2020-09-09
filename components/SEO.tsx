import { NextSeo } from "next-seo"
import { CMS_NAME, DEFAULT_OGP, SITE_BASE_URL } from "../lib/constants"

export interface SEOProps {
  title?: string;
  ogImage?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title, ogImage, description
}) => {
  return (
    <NextSeo
      title={title ?? CMS_NAME}
      description={description ?? DEFAULT_OGP.description}
      openGraph={{
        url: SITE_BASE_URL,
        type: 'website',
        title: title ?? CMS_NAME,
        description: description ?? DEFAULT_OGP.description,
        images: [
          {
            url: ogImage ?? `${SITE_BASE_URL}/ogimages/default.jpg`,
            width: 800,
            height: 600,
            alt: 'Og Image Alt'
          }
        ],
        site_name: CMS_NAME,
      }}
      twitter={{
        handle: DEFAULT_OGP.twitterHandle,
        site: DEFAULT_OGP.twitterHandle,
        cardType: 'summary_large_image',
      }}
    />
  )
}