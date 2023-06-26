import React from "react";
import AssetCard from "../components/AssetCard";

export default function InvestPage() {
  const data: any[] = [1, 2];

  return (
    <>
      {data.map((key) => (
        <AssetCard key={key} />
      ))}
    </>
  );
}
