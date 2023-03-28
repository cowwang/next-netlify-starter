import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
   <div class="iframebox">
    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRTpCiSsjQW1yjLvHZzfJ7RnUD_f6RArjMwLEdANWynM-pdjvWJtEMzx-3a_TfC4Obpd9i67z3ly4RB/pubhtml?gid=696319208&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
    </div>
        <p className="description">
    
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
