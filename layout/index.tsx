import { Box } from "@mantine/core";
import Head from "next/head";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <title>{"Nemu's Waifu Generator"}</title>
        <meta name="description" content="UwU" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cute.gif" />
      </Head>
      <Box sx={{ width: 600 }} mx="auto" my="lg">
        <main>{children}</main>
      </Box>
    </>
  );
}
