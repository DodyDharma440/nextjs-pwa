import React from "react";
import NextHead from "next/head";

const Head = ({ title }) => {
  return (
    <NextHead>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title || ""}</title>
    </NextHead>
  );
};

export default Head;
