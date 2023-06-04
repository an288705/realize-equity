import { useState } from 'react';
import { Box, TextField, FormControl, InputLabel, MenuItem, Select, Button} from '@mui/material'; 


export default function AddFundsPage() {
    const [funds, setFunds] = useState<number>(0);
    const [bank, setBank] = useState<string>('chase');
    const banks: any[] = [<MenuItem value={'chase'}>Chase</MenuItem>,<MenuItem value={'wellsFargo'}>Wells Fargo</MenuItem>]
    
    function handleFundsChange(e: any){
        setFunds(e.target.value);
    }

    function handleSelectChange(e: any){
        setBank(e.target.value);
    }

    function submit(){
        if(isNaN(funds)) {
            alert("input must be a number");
            return;
        }
        
        if(window.confirm("Are you sure you want to add funds to your account?")) {
            console.log(funds)
            console.log(bank)
            alert("Added funds");
        }
    }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined"
          label="Add Funds"
          onChange={handleFundsChange}
        />
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Bank</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                defaultValue={'chase'}
                id="demo-simple-select"
                label="Bank"
                onChange={handleSelectChange}
            >
                {
                    banks
                }
            </Select>
        </FormControl>
        <Button variant="contained" onClick={submit}>Submit</Button>
      </div>
    </Box>
  );
}