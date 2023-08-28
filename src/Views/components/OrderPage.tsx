import React from "react";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export default function OrderPage() {
  const [amount, setAmount] = React.useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const title = searchParams.get("asset");
  function handleFundsChange(e: any) {
    setAmount(e.target.value);
  }

  function submit() {
    if (window.confirm("Are you sure you want to add funds to your account?")) {
      alert("Added funds");
    }
  }

  return (
    <Grid item xs={12} md={4}>
      <Box sx={item}>
        <Typography variant="h6">{title}</Typography>
        <TextField id="outlined" label="Amount" onChange={handleFundsChange} />
      </Box>
      <Button variant="contained" onClick={submit}>
        Buy
      </Button>
      <Button variant="contained" onClick={submit}>
        Sell
      </Button>
    </Grid>
  );
}

const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
