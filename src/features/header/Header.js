import React from 'react'
import { connect } from 'react-redux'

export const Header = ({
  connected,
  setConnected,
  accountSelected,
  setAccountSelected,
  setProvider,
}) => {
  const handleChangeConnected = (address) => {
    setConnected(true)
    setAccountSelected(address)
  }

  const handleConnect = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' }).then((res) => {
        console.log(res)
        handleChangeConnected(res[0])
        window.ethereum.on('accountsChanged', (res) =>
          setAccountSelected(res[0])
        )
      })
    } else {
      setConnected(false)
      alert('ERROR')
    }
  }

  return (
    <div
    className='flex'
      style={{
        background: 'white',
        color: 'black',
        borderRadius: 14,
        padding: 20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div className='flex' style={{ display: 'flex', flexBasis: '50%', alignItems: 'center' }}>
        <div style={{ flexBasis: '50%' }} id="brand">
          MUSLIMUS PRIME
        </div>
        <div style={{ flexBasis: '50%', fontSize: '14px' }}>Minting</div>
      </div>
      <div
        style={{
          flexBasis: '50%',
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        {true&&<div
        id='connect'
          onClick={handleConnect}
          style={{
            background: '#101671',
            color: 'white',
            padding: '15px 10px',
            borderRadius: '14px',
            fontSize: '14px',
          }}
        >
          {connected
            ? `${[...accountSelected].slice(0, 5).join('')}...${[
                ...accountSelected,
              ]
                .slice(-4)
                .join('')}`
            : 'CONNECT WALLET'}
        </div>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
