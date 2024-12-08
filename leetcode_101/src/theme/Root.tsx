import React from "react";
import MDXProviderWrapper from "../components/MDXProviderWrapper";

function Root({ children }: { children: React.ReactNode }) {
  return <MDXProviderWrapper>{children}</MDXProviderWrapper>;
}

export default Root;
