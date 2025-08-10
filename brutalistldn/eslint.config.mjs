import nextConfig from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [
  ...nextConfig,
  prettier,
  {
    rules: {
      "@next/next/no-img-element": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-key": "error",
    },
  },
];
