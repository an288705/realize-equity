import React from "react";
import AssetCard from "../components/AssetCard";
import { ButtonBase, Card } from "@mui/material";

export default function InvestPage() {
  const asset = {
    title: "The Centra NYC",
    location: "New York NY",
    description:
      "Privatize a pool, take a Japanese bath or wake up in 900m2 of garden… your Sundays will not be alike.",
  };
  const data: any[] = [asset, asset];

  return (
    <>
      {data.map((asset, idx) => (
        <Card>
          <ButtonBase
            onClick={() =>
              window.location.replace(
                `/dashboard/invest/order?asset=${asset.title}`
              )
            }
          >
            <AssetCard
              key={idx}
              title={asset.title}
              location={asset.location}
              description={asset.description}
            />
          </ButtonBase>
        </Card>
      ))}
    </>
  );
}
