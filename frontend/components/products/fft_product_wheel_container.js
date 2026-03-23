import {connect} from 'react-redux';
import FFTProductWheel from './fft_product_wheel';

const mSTP = (state) => ({
    products: Object.values(state.entities.products)
})

export default connect(mSTP)(FFTProductWheel);
