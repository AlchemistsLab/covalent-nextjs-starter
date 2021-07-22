import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Wallet from './wallet'
import { getAllChainsData } from '../lib/class-a'
import menus from '../lib/menus'
import { ellipseAddress } from '../lib/utils'
import { actionTypes } from '../store'

export default function Layout({ children, page }) {
  const allChainsData = useSelector(state => state[actionTypes.ALL_CHAINS_DATA])
  const wallet = useSelector(state => state[actionTypes.WALLET])
  const dispatch = useDispatch()

  useEffect(() => {
    const run = async () => {
      const response = await getAllChainsData()
      if (response) {
        dispatch({ type: actionTypes.ALL_CHAINS_DATA, payload: response.items })
      }
    }

    run()
  }, [])

  const chain = allChainsData && allChainsData[allChainsData.findIndex(chain => Number(chain.chain_id) === Number(wallet.chain_id) )]

  return (
    <div className="mx-4">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={`${chain && chain.label} wallet`}
        />
        {chain && chain.logo_url && (
          <meta
            property="og:image"
            content={chain.logo_url}
          />
        )}
        <meta name="og:title" content={chain && chain.label} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{chain && chain.label}</title>
      </Head>
      <header className="flex items-center">
        <div className="ml-auto">
          <Wallet />
        </div>
      </header>
      <div className="flex flex-col items-center mt-8">
        <Image
          priority
          src={(chain && chain.logo_url) || '/chain-default.png'}
          height={128}
          width={128}
          alt=""
        />
        <h1 className="text-3xl font-bold mt-4">{chain && chain.label}</h1>
        <p className="text-base font-bold mt-3">{'Address: '}<span className="font-normal text-gray-400">{ellipseAddress(wallet.address, 6) || 'Not connected'}</span></p>
      </div>
      <nav className="max-w-md flex items-center mt-4 mx-auto p-3">
        {menus.map(menu => (
          <Link href={menu.path} key={menu.page}>
            <a className={`${menu.page === page ? 'font-extrabold text-blue-700 border-b-2 border-blue-700' : 'font-normal text-gray-500'} mx-auto`}>{menu.title}</a>
          </Link>
        ))}
      </nav>
      <main>{children}</main>
    </div>
  )
}