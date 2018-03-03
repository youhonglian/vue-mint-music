import router from '@/router'
import { Indicator } from 'mint-ui'
export default {
     comeBack () {
        router.go(-1)
    },
    comeBackSearch () {
        localStorage.removeItem('musicsearchdata')
        router.go(-1)
    },
    openIndicator () {
        Indicator.open({
            text: '加载中...',
            spinnerType: 'snake'
        })
    },
    closeIndicator () {
        Indicator.close()
    }
}