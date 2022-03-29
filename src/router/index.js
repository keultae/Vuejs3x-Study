import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import DataBinding from '@/views/DataBinding.vue'
import DataBindingHtml from '../views/DataBindingHtml.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingTextarea from '../views/DataBindingTextarea.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadio from '../views/DataBindingRadio.vue'
import DataBindingAttribute from '../views/DataBindingAttribute.vue'
import DataBindingButton from '../views/DataBindingButton.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingInlineStyle from '../views/DataBindingInlineStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import DataBindingVif from '../views/DataBindingVif.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import EventKey from '../views/EventKey.vue'
import Computed from '../views/Computed.vue'
import Watch from '../views/Watch.vue'
import NestedComponent from '../views/NestedComponent'
import ParentComponent from '../views/ParentComponent'
import ParentComponent2 from '../views/ParentComponent2'
import ParentComponent3 from '../views/ParentComponent3'
import ParentComponent4 from '../views/ParentComponent4'
import ParentComponent5 from '../views/ParentComponent5'
import StoreAccess from '../views/StoreAccess'
import OrgNormal from '../views/OrgNormal'
import OrgStore from '../views/OrgStore'
import OrgStoreMap from '../views/OrgStoreMap'
import Html5Css from '../views/Html5Css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/dataBindingHtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/dataBindingInputText',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/dataBindingInputNumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/dataBindingTextarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/dataBindingSelect',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/dataBindingCheckbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/dataBindingCheckbox2',
    name: 'DataBindingCheckbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/dataBindingRadio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/dataBindingAttribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/dataBindingButton',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/dataBindingClass',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/dataBindingClass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  },
  {
    path: '/dataBindingInlineStyle',
    name: 'DataBindingInlineStyle',
    component: DataBindingInlineStyle
  },
  {
    path: '/dataBindingList',
    name: 'DataBindingList',
    component: DataBindingList
  },
  {
    path: '/dataBindingList2',
    name: 'DataBindingList2',
    component: DataBindingList2
  },
  {
    path: '/dataBindingVif',
    name: 'DataBindingVif',
    component: DataBindingVif
  },
  {
    path: '/eventClick',
    name: 'EventClick',
    component: EventClick
  },
  {
    path: '/eventChange',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/eventKey',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'Watch',
    component: Watch
  },
  {
    path: '/nestedComponent',
    name: 'NestedComponent',
    component: NestedComponent
  },
  {
    path: '/parentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
  {
    path: '/parentComponent2',
    name: 'ParentComponent2',
    component: ParentComponent2
  },
  {
    path: '/parentComponent3',
    name: 'ParentComponent3',
    component: ParentComponent3
  },
  {
    path: '/parentComponent4',
    name: 'ParentComponent4',
    component: ParentComponent4
  },
  {
    path: '/parentComponent5',
    name: 'ParentComponent5',
    component: ParentComponent5
  },
  {
    path: '/storeAccess',
    name: 'StoreAccess',
    component: StoreAccess
  },
  {
    path: '/orgStore',
    name: 'OrgStore',
    component: OrgStore
  },
  {
    path: '/orgStoreMap',
    name: 'OrgStoreMap',
    component: OrgStoreMap
  },
  {
    path: '/orgNormal',
    name: 'OrgNormal',
    component: OrgNormal
  },
  {
    path: '/html5Css',
    name: 'Html5Css',
    component: Html5Css
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
