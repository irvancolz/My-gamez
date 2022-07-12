import "../styles/globals.css";
import Components from '../components'


function MyApp({ Component, pageProps }) {
  const {Layout} = Components();

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
}

export default MyApp
