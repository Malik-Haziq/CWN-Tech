/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

export default function Seo({ title, description, keywords, image }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
      {title && <meta property="og:title" content={title} />}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
}
