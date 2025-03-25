"use client";
import { HomePage, ConstTop } from "@/components";
import Data from "@/data.json";
import { ForAllProps } from "@/types";
import { useState } from "react";
import MainStyle from "../styles/MainPage.module.scss";
import "../styles/global.scss"; 
const jsonData: ForAllProps[] = Data as ForAllProps[];

export default function Home() {
  const [countryData, setCountryData] = useState<ForAllProps | null>(null);
  const [txtVal, setTxtVal] = useState("");
  const [region, setRegion] = useState("");
  const filteredData = jsonData.filter((country) => {
    const matchesText = country.name
      .toLowerCase()
      .includes(txtVal.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesText && matchesRegion;
  });

  return (
    <>
      <div
        className={MainStyle.bodyWrap}
        style={{
          backgroundColor: "var(--bg-color)",
          color: "var(--text-color)",
        }}
      >
        <div>
          <HomePage
            txtVal={txtVal}
            setTxtVal={setTxtVal}
            setCountryData={setCountryData}
            jsonData={filteredData}
            region={region}
            setRegion={setRegion}
            countryData={countryData}
          />
        </div>
      </div>
    </>
  );
}
