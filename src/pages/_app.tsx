import { store } from "@/redux/store";
import { queryClient } from "@/services/queryClient";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "@/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}

export default MyApp;
