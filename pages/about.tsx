import Image from "next/image";
import Script from "next/script";
import React from "react";
import TestSvg from '../public/next.svg';

function About() {
    return (
    <div>
        <Script strategy="lazyOnload" src="test.js" />
        <Image src={TestSvg} alt="test" />
    </div>
    )
}

export default About;
