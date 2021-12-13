import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import './App.css';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
    const getMyNfts = async() => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xab3900116Fbae6Fb8A3A1DF3c45CC74F96ED30f8&order_direction=asc');
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets)
    }

    return getMyNfts();
  },[])

  return (
    <div className="App">
      <Header />
      {/* <CollectionCard
        id={0}
        name='Bandana Punk'
        traits={[{value: 7}]}
        image='https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu'
      /> */}
      {
        punkListData.length > 0 &&
        (
          <>
            <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }
    </div>
  )
}

export default App;
