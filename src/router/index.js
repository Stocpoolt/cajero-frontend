import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import consultar from '@/components/consultar'
import reservar from '@/components/reservar'
import root from '@/components/root'
import actualizar_datos_usuario from '@/components/actualizarDatos'
import actualizar_datos_reserva from '@/components/actualizarReserva'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path:'/',
      name:'root',
      component: root
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/reservar',
      name: 'reservar',
      component: reservar
    },
    {
      path: '/consultar',
      name: 'consultar',
      component: consultar
    },
    {
      path: '/actualizar/datos_reserva',
      name: 'actualizarReserva',
      component: actualizar_datos_reserva
    },
    {
      path: '/actualizar/datos_usuario',
      name: 'actualizarDatos',
      component: actualizar_datos_usuario
    }
  ]
})