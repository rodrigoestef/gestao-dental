declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement & { title?: string }>
  >;
  export default String;
}
