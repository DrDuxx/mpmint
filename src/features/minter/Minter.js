import React from 'react'
import { connect } from 'react-redux'

export const Minter = ({
  amount,
  setAmount,
  MAX_AMOUNT,
  supply,
  MAX_SUPPLY,
  connected,
  contract,
  accountSelected,
  BASE_PRICE,
}) => {
  return (
    <div
      style={{
        background: 'white',
        color: 'black',
        borderRadius: 14,
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign:'center'
      }}
    >
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>
        MINT COMPANION
      </div>
      <div style={{ fontSize: '14px', marginBottom: '40px' }}>
        PLEASE CONNECt YOUR WALLEt TO MINT
      </div>
      <div
        style={{ fontSize: '16px', marginBottom: '40px', color:'#101671' }}
      >{`${supply}/${MAX_SUPPLY} MINTED`}</div>
      <div
      className='p100'
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '70%',
          justifyContent: 'space-between',
          columnGap: '20px',
          marginBottom: '40px',
        }}
      >
        <div
          onClick={() => {
            setAmount((amount) => {
              if (amount <= 1) return amount
              return amount - 1
            })
          }}
          style={{
            minWidth: '38px',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #101671',
            borderRadius: '8px',
            fontSize: '24px',
            color:'#101671'
          }}
        >
          -
        </div>
        <div
          style={{
            width: '100%',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #101671',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        >
          {amount + ' ' + (amount === 1 ? 'MINT' : 'MINTS')}
        </div>
        <div
          onClick={() => {
            setAmount((amount) => {
              if (amount >= MAX_AMOUNT) return amount
              return amount + 1
            })
          }}
          style={{
            minWidth: '38px',
            height: '38px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #101671',
            borderRadius: '8px',
            fontSize: '24px',
            color:'#101671'
          }}
        >
          +
        </div>
      </div>
      <div style={{ fontSize: '12px', marginBottom: '40px' }}>
        ONLY {MAX_AMOUNT} MINTS PER WALLET
      </div>
      {true?<div
        onClick={async () => {
          if (connected) {
            const res = await contract.methods.mint(amount).send({
              from: accountSelected,
              value: amount * 2 + BASE_PRICE.slice(1),
            })
            console.table(res)
          } else {
            return
          }
        }}
        className='p100'
        style={{
          background: connected ? '#101671' : 'grey',
          color: 'white',
          padding: '10px 0',
          borderRadius: 14,
          width: '70%',
          textAlign: 'center',
          fontSize: '14px',
        }}
      >
        MINT NOW
      </div>:<div>COMING SOON</div>}
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Minter)
