import Head from 'next/head'
import Layout from '../components/layout'

export default function Farm() {
  return (
    <Layout page={'farm'}>
      <Head>
        <title>{'Farm'}</title>
      </Head>
      <section className="max-w-md border-2 border-gray-200 border-dashed rounded font-light text-gray-500 text-center mt-4 mx-auto py-32">
        <h1 className="max-w-sm mx-auto">
          {'You can edit and decorate this page on the file: '}
          <span className="font-bold text-gray-800">{'/pages/farm.js'}</span>
        </h1>
      </section>
    </Layout>
  )
}