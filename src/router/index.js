import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from "@/components/home"
import about from "@/components/about"
import document from "@/components/document"

import study from "@/views/study"
import work from "@/views/work"
import hobby from "@/views/hobby"

import "@/assets/css/app"

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/home',
      component:home
    },
    {
      path:"/document",
      component:document
    },{
      path:"/about",
      component:about
    },
    {
      path:"/study",
      component:study
    },
    {
      path:"/work",
      component:work
    },
    {
      path:"/hobby",
      component:hobby
    }
  ]
})
