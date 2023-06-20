require("../src/app/globals.css");
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { asPath } = useRouter();
  const pagesName = ["/staticnavigation"];
  const staticStyle = pagesName.includes(asPath);
  return (
    <>
      <div className={`${staticStyle ? "" : "sb-nav-fixed"}`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
