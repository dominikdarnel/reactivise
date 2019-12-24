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
    >
      <rect x="68" y="77" rx="4" ry="4" width="117" height="6" />
      <rect x="69" y="96" rx="3" ry="3" width="85" height="6" />
    </ContentLoader>
  );
}

export default TextSkeleton;
