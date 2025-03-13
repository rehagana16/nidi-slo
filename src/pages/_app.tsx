import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import './global.css';
import { Montserrat } from 'next/font/google'
import Script from 'next/script';
 
const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

 
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
 
  return (
    <>
      <Script src="https://kit.fontawesome.com/3efa7fb350.js" crossOrigin="anonymous"></Script>
      <main className={montserrat.className}>
        {getLayout(<Component {...pageProps} />)}
      </main>
    </>
  )
}