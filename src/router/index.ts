import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Service from '../pages/Service.vue'
import Contact from '../pages/Contact.vue'
import Agency from '../pages/Agency.vue'
import Project from '../pages/CaseStudy.vue'
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
    path: '/project',
    name: 'Project',
    component: Project,
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
