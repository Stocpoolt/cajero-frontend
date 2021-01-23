import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHome,
        faMoneyBill,
        faCreditCard,
        faDoorOpen,
        faMoneyCheck,
        faBuilding,
        faImages,
        faAt,
        faMouse,
        } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome,
            faMoneyBill,
            faCreditCard,
            faDoorOpen,
            faMoneyCheck,
            faBuilding,
            faImages,
            faAt,
            faMouse)
Vue.component('font-awesome-icon', FontAwesomeIcon)