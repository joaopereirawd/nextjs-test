import styles from '../styles/card.module.scss'
import Link from 'next/link'
import useSWR from 'swr'


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function LoremPicsum() {
  const { data, error } = useSWR('https://picsum.photos/v2/list', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className={styles.cwrapper}>
      {data.map((p, i) => (
        <div key={i} className={styles.cwrapper__card}>
          <div className={styles.cwrapper__cardimage}>
            <img src={data[i].download_url} />
            <small class={styles.cwrapper__author}>Photo by: {data[i].author}</small>
          </div>
        </div>
      ))}
    </div>
  )
}