# Next.js-Covalent Starter Framework
This project is a wrapper of Covalent APIs that tend to assist the front-end developers in creating their Next.js based application with Covalent more easily.

The framework provides an ability to automate retrieving chain & address data from the caller’s wallets on active browser extensions. Firstly, the framework automatically retrieves the developer's chain & address information by using the [Web3Modal](https://github.com/Web3Modal/web3modal) library. Then, these data will be automatically parsed and used as parameters to call Covalents APIs.

So that, by using this framework, developers don’t need to configure their chain & address data manually in each call! Developers can quickly start their Next.js project natively built with Covalent API. They do not need to mess up on these pieces of stuff. All they have to do is to work on the front-end side of their application.

All in all, the framework acts as the starter kit that wraps sets of Covalent API calls into more easy-to-use functions.

<br>

## Data provider / APIs
All routes of Covalent API are supported and can be called through the framework. Please use the [Covalent API's official document](https://www.covalenthq.com/docs/api) as the reference.

<br>

## Technology stacks
This project is built as a serverless system, getting inspiration from the [Covalent AWS Serverless](https://github.com/AlchemistsLab/covalent-aws-serverless) project.
<br>

The technologies used include
- [Next.js](https://nextjs.org/) is used as the base technology framework of the project.
- [Web3Modal](https://github.com/Web3Modal/web3modal) library is used for adding support for multiple providers in their apps with a simple customizable configuration.
- [Covalent AWS Serverless](https://github.com/AlchemistsLab/covalent-aws-serverless) is used as a bridge of requesting data from Covalent's endpoints with our serverless setup.

<br>

## Serverless Setup 
Kindly follow the setup instruction from the [README.md](https://github.com/AlchemistsLab/covalent-aws-serverless#aws-lambda) of the Covalent AWS Serverless project.

<br>

## Local Run
- Install dependencies
  ```
  npm install
  ```

- Set the value of the `NEXT_PUBLIC_COVALENT_API_URL` variable, that you got in the serverless setup step, in the [.env](/.env) file.

- Run on [localhost:3000](http://localhost:3000)
  ```
  npm run dev
  ```

<br>

## Example API call
```javascript
import { useState, useEffect } from 'react'
import { getTokenBalancesData } from '../lib/class-a' // class-a | class-b | pricing
import { actionTypes } from '../store'

export default function() {
  const wallet = useSelector(state => state[actionTypes.WALLET])
  const [balancesData, setBalancesData] = useState([])

  useEffect(() => {
    const response = await getTokenBalancesData(wallet) // GET /v1/{chain_id}/address/{address}/balances_v2/
    setBalancesData(response ? response.items : [])
  }, [wallet])
}
```
