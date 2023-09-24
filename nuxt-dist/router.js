import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d78b8f6 = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _0a9a0d04 = () => interopDefault(import('..\\pages\\log-in.vue' /* webpackChunkName: "pages/log-in" */))
const _6abc1d59 = () => interopDefault(import('..\\pages\\public-letters.vue' /* webpackChunkName: "pages/public-letters" */))
const _844389aa = () => interopDefault(import('..\\pages\\sign-up.vue' /* webpackChunkName: "pages/sign-up" */))
const _17c78604 = () => interopDefault(import('..\\pages\\write-letter.vue' /* webpackChunkName: "pages/write-letter" */))
const _005ae45c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/forgot-password",
    component: _0d78b8f6,
    name: "forgot-password"
  }, {
    path: "/log-in",
    component: _0a9a0d04,
    name: "log-in"
  }, {
    path: "/public-letters",
    component: _6abc1d59,
    name: "public-letters"
  }, {
    path: "/sign-up",
    component: _844389aa,
    name: "sign-up"
  }, {
    path: "/write-letter",
    component: _17c78604,
    name: "write-letter"
  }, {
    path: "/",
    component: _005ae45c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
