import Header from './components/Header'
import PageContainer from './container/PageContainer'
import "./App.css";
//import ProductList from './components/ProductList'
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';

import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';






function App() {


  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket());
  }, [])

  return (
    <>
      <PageContainer>

        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer}>

          {
            products && products.map((product) => {




              return (
                <div key={product.id}>










                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />



                    <p style={{ width: '350px' }}>{product.title}---{product.count} tane ürün </p>







                    <p style={{ color: 'blue' }}>{product.price} $</p>



                    <button style={{ marginLeft: '10px', backgroundColor: 'rgb(135, 169, 210)', width: '60px', height: '30px', border: 'none' }}>SİL</button>
                  </div>



                </div>





              )
            })
          }
          <div>
            <p> Toplam Tutar: {totalAmount} $ </p>
          </div>


        </Drawer>


      </PageContainer>

    </>
  )
}

export default App










