import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Head from 'next/head'
import Layout from '../components/layout'
import ImageWithFallback from '../components/imageWithFallback'
import utilStyles from '../styles/utils.module.css'
import { getTokenBalancesData } from '../lib/class-a'
import _ from 'lodash'
import NumberFormat from 'react-number-format'

export default function Assets() {
  const wallet = useSelector(state => state.wallet)
  const [balancesData, setBalancesData] = useState([])

  useEffect(() => {
    const run = async () => {
      let response
      if (wallet.chain_id && wallet.address) {
        response = await getTokenBalancesData(wallet)
      }
      setBalancesData(response ? response.items : [])
    }

    run()
    const interval = setInterval(() => run(), 30 * 1000)
    return () => clearInterval(interval)
  }, [wallet])

  return (
    <Layout page={'assets'}>
      <Head>
        <title>{'Assets'}</title>
      </Head>
      <section className="max-w-md mt-4 mx-auto">
        <ul className={utilStyles.list}>
          {balancesData && balancesData.length > 0 ?
            _.orderBy(balancesData, ['quote'], ['desc']).map(item => (
              <li className={`${utilStyles.listItem} flex items-center`} key={item.contract_address}>
                <div className="flex items-center">
                  <ImageWithFallback
                    priority
                    src={item.logo_url || '/token-default.png'}
                    fallbackSrc={'/token-default.png'}
                    height={48}
                    width={48}
                    alt=""
                  />
                  <p className="max-w-xs text-base font-semibold overflow-ellipsis overflow-hidden ... ml-3">
                    {item.contract_name}
                  </p>
                </div>
                <div className="min-w-max text-right ml-auto">
                  <div className="text-base">
                    <NumberFormat
                      displayType={'text'}
                      thousandSeparator
                      value={Number(item.balance) / Math.pow(10, item.contract_decimals)}
                      decimalScale={5}
                    />
                    {' '}
                    {item.contract_ticker_symbol}
                  </div>
                  <p className="text-xs text-gray-400">
                    {typeof item.quote_rate === 'number' ?
                      <NumberFormat
                        displayType={'text'}
                        prefix={'$'}
                        thousandSeparator
                        value={item.quote}
                        decimalScale={5}
                      />
                      :
                      '-'
                    }
                  </p>
                </div>
              </li>
            ))
            :
            <div className="border-2 border-gray-200 border-dashed rounded font-light text-gray-400 text-center mt-4 mx-auto py-32">
              {!wallet.address ? 'Not connected' : 'No available data'}
            </div>
          }
        </ul>
      </section>
    </Layout>
  )
}