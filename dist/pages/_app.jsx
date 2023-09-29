import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { darkTheme } from '../styles/theme/themeOptions';
import createEmotionCache from '../utility/createEmotionCache';
// Client-side cache, shared for the whole session of the user in the browser.
var clientSideEmotionCache = createEmotionCache();
export default function MyApp(props) {
    var Component = props.Component, _a = props.emotionCache, emotionCache = _a === void 0 ? clientSideEmotionCache : _a, pageProps = props.pageProps;
    return (<CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width"/>
      </Head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
        <Component {...pageProps}/>
      </ThemeProvider>
    </CacheProvider>);
}
//# sourceMappingURL=_app.jsx.map