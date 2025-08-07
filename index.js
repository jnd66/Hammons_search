
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const listings = [
  { artist: "David Hammons", title: "Bliz-aard Ball Sale Poster", price: "$750", source: "Biblio" },
  { artist: "Pope.L", title: "The Friendliest Black Artist in America", price: "$300", source: "eBay" },
  { artist: "Jack Whitten", title: "Notes from the Woodshed", price: "$45", source: "AbeBooks" },
  { artist: "David Hammons", title: "Body Prints Exhibition Catalog", price: "$1200", source: "Biblio" }
]

export default function Home() {
  const [filter, setFilter] = useState("all")

  const filtered = filter === "all" ? listings : listings.filter(item => item.artist === filter)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hammons + Artist Search</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Artist Book & Ephemera Search</h1>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Artists</option>
          <option value="David Hammons">David Hammons</option>
          <option value="Pope.L">Pope.L</option>
          <option value="Jack Whitten">Jack Whitten</option>
        </select>

        <div className={styles.listings}>
          {filtered.map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.title}</h3>
              <p><strong>Artist:</strong> {item.artist}</p>
              <p><strong>Price:</strong> {item.price}</p>
              <p><strong>Source:</strong> {item.source}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
