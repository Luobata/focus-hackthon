import './orienter.js';
import { init, animate } from './main.js';

export default {
    data () {
        return {
        }
    },
    mounted () {
        init();
        animate();
    }
};
