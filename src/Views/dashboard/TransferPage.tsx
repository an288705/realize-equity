import React from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
} from "@mui/material";
import { UserContext } from "../../controllers/contexts";

export default function TransferPage() {
  const [funds, setFunds] = React.useState<number>(0);
  const [fromForm, setFromForm] = React.useState<string>("chase");
  const [toForm, setToForm] = React.useState<string>("account");
  const user = React.useContext(UserContext);
  const accounts: any[] = [
    <MenuItem value={"account"}>{`Account ${user.totalBalance}`}</MenuItem>,
    <MenuItem value={"chase"}>Chase</MenuItem>,
    <MenuItem value={"wellsFargo"}>Wells Fargo</MenuItem>,
  ];

  function handleFundsChange(e: any) {
    setFunds(e.target.value);
  }

  function handleFromChange(e: any) {
    setFromForm(e.target.value);
  }

  function handleToChange(e: any) {
    setToForm(e.target.value);
  }

  function submit() {
    if (isNaN(funds)) {
      alert("input must be a number");
      return;
    }

    if (window.confirm("Are you sure you want to add funds to your account?")) {
      console.log(funds);
      console.log(fromForm);
      alert("Added funds");
    }
  }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined"
          label="Transfer"
          onChange={handleFundsChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            defaultValue={"chase"}
            id="demo-simple-select"
            label="Bank"
            onChange={handleFromChange}
          >
            {accounts.filter((account) => account.props.value != toForm)}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">To</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            defaultValue={"account"}
            id="demo-simple-select"
            label="Bank"
            onChange={handleToChange}
          >
            {accounts.filter((account) => account.props.value != fromForm)}
          </Select>
        </FormControl>
        <Button variant="contained" onClick={submit}>
          Submit
        </Button>
      </div>
    </Box>
  );
}
