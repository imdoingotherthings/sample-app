import "../styles/globals.css";
import { AdditionProvider, AdditionStore } from "../src/store";
import type { AppProps } from "next/app";
// instantiate the store
const store = new AdditionStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdditionProvider store={store}>
      <Component {...pageProps} />
    </AdditionProvider>
  );
}

export default MyApp;
