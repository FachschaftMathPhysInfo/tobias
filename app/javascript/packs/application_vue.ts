/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.
//TODO use alias instead
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import store from '../store/index'
import App from '../views/application'
import Empty from '../views/empty'
import WelcomeView from '../views/welcome'
import SettingsIndexView from '../views/settings/index'
import SettingsAccountView from '../views/settings/account'
import SettingsDesignView from '../views/settings/design'
import InmailsView from '../views/inmails/index'
import OrganizationView from '../views/organizations/index'
import OrganizationShowView from '../views/organizations/show'
import OrganizationEditView from '../views/organizations/edit'
import OrganizationNewView from '../views/organizations/new'
import TopShowView from '../views/tops/show'
import TopNewView from '../views/tops/new'
import MeetingShowView from '../views/meetings/show'
import MeetingNewView from '../views/meetings/new'
import MeetingEditView from '../views/meetings/edit'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// Material design:, TODO: only components
//colors
const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: 'organizations',
        component: Empty,
        children: [
          {
            path: 'new',
            component: OrganizationNewView,
            name:"new_org"
          },
          {
            path: ':org_id',
            component: Empty,
            children: [
              {
                path: '',
                component: OrganizationShowView,
                name: "organization"
              },
              {
                path: 'edit',
                component: OrganizationEditView,
                name: "edit_org"
              },
              {
                path: 'tops',
                component: Empty,
                children:[
                  {
                    path:'new',
                    component:TopNewView,
                    name: 'new_org_top'
                  }
                  ,{
                    path:':top_id',
                    component:Empty,
                    children:[
                      {
                        path:'',
                        component: TopShowView,
                        name: 'top'
                      }
                    ]
                  }
                ]
              },
              {
                path: 'meetings',
                component: Empty,
                children:[
                  {
                    path:'new',
                    component:MeetingNewView,
                    name: 'new_org_meeting'
                  }
                  ,{
                    path:':meeting_id',
                    component:Empty,
                    children:[
                      {
                        path:'tops',
                        component: Empty,
                        children:[
                          {
                            path:'new',
                            component:TopNewView,
                            name: 'new_org_meeting_top'
                          }
                        ]
                      }
                      ,
                      {
                        path:'edit',
                        component: MeetingEditView,
                        name: 'edit_org_meeting'
                      },
                      {
                        path:'',
                        component: MeetingShowView,
                        name: 'meeting'
                      }
                    ]
                  }
                ]
              }
            ]
          }, {
            path: '',
            component: OrganizationView,
            name:'organizations'
          }
        ]
      },
      {
        path:'inmails',
        children:[
          {
            path:'',
            component:InmailsView
          }
        ],
        component: Empty
      },
      {
        path:'settings',
        children:[
          {
            path:'account',
            component:SettingsAccountView
          },
          {
            path:'design',
            component:SettingsDesignView
          },
          {
            path:'',
            component:SettingsIndexView
          }
        ],
        component: Empty
      },
      {
        path:'',
        component: WelcomeView
      }
    ]
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: "history", routes // short for `routes: routes`
})

// Helpers
import colors from 'vuetify/es5/util/colors'
Vue.use(Vuetify, {
  theme: {
    primary: '#990000', // #E53935
    secondary: colors.deepPurple.base, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
import VueRouter from 'vue-router'

Vue.use(VueRouter)
document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
  console.log(app)
})
