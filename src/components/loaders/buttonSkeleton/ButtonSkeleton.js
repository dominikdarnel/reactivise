import React from "react";
import ContentLoader from "react-content-loader";

function ButtonSkeleton() {
  return (
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="-150" y="62" rx="6" ry="6" width="300" height="50" />
    </ContentLoader>
  );
}

export default ButtonSkeleton;
