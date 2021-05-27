import React, { useEffect, useState } from 'react';

// Content 
import Header from './components/Contents/Header';
import Caption from './components/Contents/Caption';
import Statements from './components/Contents/Statements';

// Controls 
import QuantityRange from './components/Controls/QuantityRange';
import OrderButton from './components/Controls/OrderButton';

// Decorations 
import BeerFlow from './components/Decorations/BeerFlow';
import BeerFoam from './components/Decorations/BeerFoam';
import BeerBubbles from './components/Decorations/BeerBubbles';

import ContentWrapper from './components/Layouts/ContentWrapper';

import './_global.scss';

const closeComponentFuntion = value => alert(`Component closed`);
const orderFunction = value => alert(`Order delivered: ${value} beer(s)`);

const Main = ({ title, statements, caption }) => {
    const [isReady, setIsReady] = useState(true);
    const [qty, setQty] = useState(0);

    return (
        <>
            <ContentWrapper>
                <Header title={title} closeComponentFuntion={closeComponentFuntion} />
                <Caption caption={caption}  />
                <QuantityRange qty={qty} setQty={setQty} />
                <Statements qty={qty} statements={statements} />
                <OrderButton qty={qty} orderFunction={orderFunction} />

            </ContentWrapper>

            <BeerFlow qty={qty} />
            <BeerFoam qty={qty} />
            <BeerBubbles qty={qty} />

        </>
    );
}

export default Main;
