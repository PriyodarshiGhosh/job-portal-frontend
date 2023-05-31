import "@/styles/globals.scss";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { DM_Sans } from "next/font/google";
import Head from "next/head";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

//replace this with the font being used for project
const DM_SANS = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  preload: true,
});
const client = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Head>
        <title>New Project</title>
        <meta name="description" content="New Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${DM_SANS.className} bg-background text-white  min-h-screen h-screen`}
      >
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
