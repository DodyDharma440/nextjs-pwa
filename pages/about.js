import React from "react";
import Link from "next/link";
import Head from "../components/Head";

const About = () => {
  return (
    <>
      <Head title="About Page" />
      <Link href="/">
        <a>Go to Home</a>
      </Link>
    </>
  );
};

export default About;
