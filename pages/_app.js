import "../styles/globals.css";
import { useHydrate, ZustandProvider } from "../lib/store";

function MyApp({ Component, pageProps }) {
  const store = useHydrate(pageProps.initialZustandState);

  return (
    <ZustandProvider initialStore={store}>
      <Component {...pageProps} />
    </ZustandProvider>
  );
}

export default MyApp;
