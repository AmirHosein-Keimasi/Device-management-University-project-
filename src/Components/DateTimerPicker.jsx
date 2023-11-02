import * as React from "react";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import useTheme from "@mui/system/useTheme";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AdapterJalali() {
  const existingTheme = useTheme();
  const theme = React.useMemo(
    () => createTheme({ direction: "rtl" }, existingTheme),
    [existingTheme]
  );

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DatePicker
            label="Date Picker"
            defaultValue={new Date(2023, 10, 1)}
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
