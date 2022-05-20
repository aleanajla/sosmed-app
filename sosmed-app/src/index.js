import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Main from './main'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './redux/reducer'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// render
ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <Main/>
        </ChakraProvider>
    </Provider>
    ,document.getElementById("root")
)