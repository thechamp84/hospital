// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/Users/welcome/Desktop/hospital/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'C:/Users/welcome/Desktop/hospital/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'C:/Users/welcome/Desktop/hospital/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "login",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'C:/Users/welcome/Desktop/hospital/src/pages/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user/set-password/:email/:joinId",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__components__AcceptInvitation' */'C:/Users/welcome/Desktop/hospital/src/pages/login/components/AcceptInvitation'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user/admin/set-password/:email/:joinId",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__components__AcceptInvitationAdmin' */'C:/Users/welcome/Desktop/hospital/src/pages/login/components/AcceptInvitationAdmin'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'C:/Users/welcome/Desktop/hospital/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'C:/Users/welcome/Desktop/hospital/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "forgotPassword",
            "icon": "smile",
            "path": "/user/forgotPassword",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__components__ForgotPassword' */'C:/Users/welcome/Desktop/hospital/src/pages/login/components/ForgotPassword'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "resetPassword",
            "icon": "smile",
            "path": "/user/resetPassword/:type/:email/:forgetPasswordId",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__components__ResetPassword' */'C:/Users/welcome/Desktop/hospital/src/pages/login/components/ResetPassword'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/welcome/Desktop/hospital/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'C:/Users/welcome/Desktop/hospital/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/home",
            "name": "Home",
            "icon": "AppstoreOutlined",
            "routes": [
              {
                "path": "/home",
                "icon": "AppstoreOutlined",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__doc' */'C:/Users/welcome/Desktop/hospital/src/pages/doc'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "path": "/home/add",
                "name": "Add Hospital",
                "breadcrumbName": "Add",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__doc__components__FormSteps' */'C:/Users/welcome/Desktop/hospital/src/pages/doc/components/FormSteps'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "path": "/staff",
            "name": "Staff",
            "icon": "AppstoreOutlined",
            "routes": [
              {
                "path": "/staff",
                "name": "Staff",
                "icon": "AppstoreOutlined",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__staff' */'C:/Users/welcome/Desktop/hospital/src/pages/staff'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "path": "/department",
            "name": "Department",
            "icon": "AppstoreOutlined",
            "routes": [
              {
                "path": "/department",
                "name": "Department",
                "icon": "AppstoreOutlined",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__department' */'C:/Users/welcome/Desktop/hospital/src/pages/department'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "path": "/users",
            "name": "Users",
            "icon": "AppstoreOutlined",
            "routes": [
              {
                "path": "/users",
                "name": "Users",
                "icon": "AppstoreOutlined",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__users__index' */'C:/Users/welcome/Desktop/hospital/src/pages/users/index'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              },
              {
                "path": "/users/view",
                "breadcrumbName": "View",
                "name": "View User",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__users__components__ViewUser' */'C:/Users/welcome/Desktop/hospital/src/pages/users/components/ViewUser'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "path": "/notifications",
            "name": "Notifications",
            "icon": "AppstoreOutlined",
            "routes": [
              {
                "path": "/notifications",
                "name": "Notifications",
                "icon": "AppstoreOutlined",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__notification__index' */'C:/Users/welcome/Desktop/hospital/src/pages/notification/index'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              },
              {
                "path": "/notifications/add",
                "breadcrumbName": "Add",
                "name": "Add Notification",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__notification__components__AddNotification' */'C:/Users/welcome/Desktop/hospital/src/pages/notification/components/AddNotification'), loading: LoadingComponent}),
                "hideInMenu": true,
                "exact": true
              }
            ]
          },
          {
            "path": "/settings",
            "name": "Settings",
            "breadcrumbName": "Settings",
            "icon": "AppstoreOutlined",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__settings' */'C:/Users/welcome/Desktop/hospital/src/pages/settings'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/welcome/Desktop/hospital/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
