import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from "react";
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const GeorgiaCentralBankGrid: React.FC = () => {
    const [date, setDate] = useState(Date.now());
    
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={darkTheme}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker label="Basic date picker" 
                                
                            />
                        </LocalizationProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </div>  
    )
} 

export default GeorgiaCentralBankGrid;