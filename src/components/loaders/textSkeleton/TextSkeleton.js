import React from "react";
import ContentLoader from "react-content-loader";

function TextSkeleton() {
  return (
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      data-testid="text-skeleton"
    >
      <rect x="68" y="77" rx="4" ry="4" width="270" height="30" />
      <rect x="69" y="130" rx="3" ry="3" width="170" height="30" />
    </ContentLoader>
  );
}

export default TextSkeleton;
