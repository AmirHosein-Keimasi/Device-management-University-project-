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

  const handelGetDate = (e) => {
    console.log(new Intl.DateTimeFormat("fa-IR").format(e));
  };

  
  return (
    <ThemeProvider theme={theme}  className="form-control">
      <div dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DatePicker
            label=""
            defaultValue={new Date(2023, 10, 1)}
            onChange={handelGetDate}  className="form-control"
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
}
