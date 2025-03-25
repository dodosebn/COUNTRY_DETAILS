"use client";

import React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import FirstStyle from '../../styles/FirstPage.module.scss';
import { FaArrowLeftLong } from "react-icons/fa6";
import { SuspenseWrapper } from '@/components';
const Main: React.FC = () => {
  const searchParams = useSearchParams();
  const countryName = searchParams.get("name");
  const capital = searchParams.get("capital") || "N/A";
  const nativeName = searchParams.get('nativeName') || 'N/A';
  const borders = searchParams.get("borders")?.split(",") || [];
  const flag = searchParams.get("flag"); 
  const region = searchParams.get("region");
  const population = searchParams.get("population");
  const currency = searchParams.get("currency");
  const topLevelDomain = searchParams.get("topLevelDomain") || "Unknown";
  const languages = searchParams.get("languages")?.split(",") || ["Unknown"];

  if (!countryName) {
    return <p>Select a country to see details</p>;
  }

  return (
    <SuspenseWrapper>
      <div className={FirstStyle.buttonBoss}>
        <Link href="/" >
          <button className={FirstStyle.buttonCont}>
            <div>
              <FaArrowLeftLong />
            </div>
            <div> Back</div>
          </button>
        </Link>
      </div>

      <main className={FirstStyle.mainStyle}>
        <div className={FirstStyle.sectionHolders}>
          <section>
            <img 
              src={flag ? decodeURIComponent(flag) : ""} 
              alt={`Flag of ${countryName}`}  
              className={FirstStyle.countryImg}
            />
          </section>
          <section className={FirstStyle.section2}>
            <ul>
              <h1>{countryName}</h1>
              <li>Capital: <span>{capital}</span></li>
              <li>Population: <span>{population}</span></li>
              <li>Region: <span>{region}</span></li>
              <li>Native Name: <span>{nativeName}</span></li>
            </ul>
            <ul className={FirstStyle.ul2}>
              <li>Currency: <span>{currency}</span></li>
              <li>Top-Level Domain: <span>{topLevelDomain}</span></li>
              <li>Languages: <span>{languages.join(", ")}</span></li>
            </ul>
          </section>
        </div>

        <div className={FirstStyle.borderCont}>
          <h3>Border Countries:</h3>
          <section>
            {borders.length > 0 && borders[0] !== "" 
              ? borders.map((bord, index) => (
                  <button key={index}>{bord}</button>
                ))
              : "No borders"}
          </section>
        </div>
      </main>
    </SuspenseWrapper>
  );
};

export default Main;
