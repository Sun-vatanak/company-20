import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Service from '../pages/Service.vue'
import Contact from '../pages/Contact.vue'
import Agency from '../pages/Agency.vue'
import CaseStudy from '../pages/CaseStudy.vue'
import Resources from '../pages/Resources.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/agency',
    name: 'Agency',
    component: Agency,
  },
  {
    path: '/case-study',
    name: 'CaseStudy',
    component: CaseStudy,
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
