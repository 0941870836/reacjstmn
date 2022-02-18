import ProductFuture from 'features/Product';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import PageNotFound from 'features/Product/pages/PageNotFound';
import Footer from 'components/Footer';
import CartFeature from './features/Cart';
import Intro from 'components/Intro/Intro';
import StepBuyProduct from 'components/StepByProduct/StepBuyProduct';

function App() {

    return (
        <div className='app'>
            <Header />
            <Intro />
            <StepBuyProduct />
            <Switch>
                <Route path="/" exact />
                {/* <Route path="/" component={CounterFeature} exact />
                <Route path="/todos" component={TodoFeature} />
                <Route path="/album" component={AlbumFeature} /> */}
                <Route path="/products" component={ProductFuture} />
                <Route path="/cart" component={CartFeature} />

                <Route path='' exact={false} component={PageNotFound} />
            </Switch>

            {/* <Footer /> */}
        </div>
    );
}

export default App;