/* eslint-disable prefer-const */
import { BigInt, BigDecimal, Address } from '@graphprotocol/graph-ts'
import { Factory as FactoryContract } from '../types/templates/Pool/Factory'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'
export const FACTORY_ADDRESS = '0x5b5371b273a09a3abb9a8565c763118fbd512cc4'

export const WETH_ADDRESS = '0xae13d989dac2f0debff460ac112a837c89baa7cd'
export const USDC_WETH_03_POOL = '0x76610541a0721c566c45cf26a34c3b280ea6f894'

export const STABLE_COINS_STR = '0x50a8c32cca7edcb2104bfc6bd7b50fa4dc6b6673|0x102e969a101d0f5a7defb29b4090c08f8def0f42|0x74c21a9e797ef95066c33ba0cc295ca67a7f6d18'
export const WHITELIST_TOKENS_STR = '0x51e8d106c646ca58caf32a47812e95887c071a62'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)

export let factoryContract = FactoryContract.bind(Address.fromString(FACTORY_ADDRESS))
