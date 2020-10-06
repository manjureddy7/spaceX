import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Filters from '../components/LeftPane/Filters'
import Programms from '../components/RightPane/Programms'

export default function Home() {

  return (
    <div className={styles.rootContainer}>
      <Head>
        <title>SpaceX Launch Programs</title>
      </Head>
      <main>
        <h3 className={styles.mainHeader}>SpaceX Launch Programs</h3>
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <Filters />
          </div>
          <div className="col-md-9 col-sm-8">
            <Programms />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Developed by Manoj Kumar G.</p>
      </footer>
    </div>
  )
}
