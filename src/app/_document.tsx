
import createCache from '@emotion/cache'


import {
      DocumentHeadTags,
      documentGetInitialProps,
    } from '@mui/material-nextjs/v15-pagesRouter';
import { Html, Head, Main, NextScript } from 'next/document';
export const myCache = createCache({
    key: 'my-prefix-key',
    stylisPlugins: [
      /* your plugins here */
    ]
  })
     export default function MyDocument(props) {
       return (
         <Html lang="en">
           <Head>
            <DocumentHeadTags {...props} />
           </Head>
           <body>
             <Main />
             <NextScript />
           </body>
         </Html>
       );
     }
    
    MyDocument.getInitialProps = async (ctx) => {
      const finalProps = await documentGetInitialProps(ctx,{
        emotionCache: myCache,
      });
      return finalProps;
    };
    