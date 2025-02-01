"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FirstPageProps, ForAllProps } from "@/types";
import MainStyle from '../styles/MainPage.module.scss';
import "../styles/global.scss"; 
// import FirstStyle from '../styles/FirstPage.module.scss';
import useVirtualization from "./hooks/useVirtual";
import { Loader2 } from "lucide-react";
// import { CountryProps } from "@/types";

const FirstPage: React.FC<FirstPageProps> = ({ setCountryData, jsonData }) => {
  const router = useRouter();
  const { items, loading, hasMore, loadingRef } = useVirtualization(
    jsonData as ForAllProps[]
  );

  const handleCountryClick = (country: ForAllProps) => {
    setCountryData(country);

    const mainShows = new URLSearchParams({
      name: country.name,
      capital: country.capital || "N/A",
      nativeName: country.nativeName || "N/A",
      borders: country.borders?.join(",") || "None",
      flag: encodeURIComponent(country.flags.png),
      region: country.region || "Unknown",
      population: country.population?.toString() || "Unknown",
      topLevelDomain: country.topLevelDomain?.[0] || "Unknown",
      currency: country.currencies?.[0]?.name || "Unknown",
      languages:
        country.languages?.map((lang: any) => lang.name).join(", ") ||
        "Unknown",
    }).toString();

    router.push(`/Details?${mainShows}`);
  };

  return (
    <div id="countryBody" className={MainStyle.bodyRule1}>
      {items.map((item) => (
        <div
          className={MainStyle.firstPage}
          key={item.name}
          onClick={() => handleCountryClick(item)}
        >
          <img src={item.flags.png} alt={`Flag of ${item.name}`} />
          <div className={MainStyle.firstDetails}>
            <h1>{item.name}</h1>
            <p>
              Population: <span>{item.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{item.region}</span>
            </p>
            <p>
              Capital: <span>{item.capital}</span>
            </p>
          </div>
        </div>
      ))}
      <div ref={loadingRef}>
        {loading && (
          <div>
            <Loader2 />
            <p>Loading more Country....</p>
          </div>
        )}
        {!hasMore && items.length > 0 && (
          <p>You've reached the end of the list</p>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
