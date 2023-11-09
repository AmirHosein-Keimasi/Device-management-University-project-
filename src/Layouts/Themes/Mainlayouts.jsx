import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lightTheme ,darktheme} from "./Theme";
import { CacheProvider } from "@emotion/react";


const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const Mainlayouts = ({ children, mode }) => {
  // const theme = mode ==="darktheme" ? darktheme :lightTheme

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={lightTheme}>
        <HelmetProvider>
          <Helmet>
            <title></title>
          </Helmet>
          {/* grid System */}
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Mainlayouts;
