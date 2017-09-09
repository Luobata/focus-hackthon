import './orienter.js';
import { init, animate, changeId } from './main.js';

export default {
    data () {
        return {
        }
    },
    mounted () {
        const detailId = this.$route.params.detailId;
        init();
        animate();
        changeId(detailId);
    },
    beforeMount () {
    },
    activated () {
        const detailId = this.$route.params.detailId;
        changeId(detailId);
    }
};
