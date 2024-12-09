import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { MDXProvider } from "@mdx-js/react";

const components = {
  Tabs,
  TabItem,
};

const MDXProviderWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
