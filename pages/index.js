import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p className={utilStyles.textCenter}>Hello I'm Ami, welcome to my Next.js Blog</p>
        <p className={utilStyles.textCenter}>
        I am a student at a programming school called CICCC.
        </p>
        
        <p className={utilStyles.textCenter}>I created a simple blog site using Next.js in the final project assignment.</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding4em}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.underLine}`}>Topics</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.copyright} ${utilStyles.padding4em}`}>
      <p className={utilStyles.textCenter}>Copyright&copy;AmiYamanouchi. All Rights Reserved.</p>
      </section>
    </Layout>
  )
}