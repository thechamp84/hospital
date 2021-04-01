export const dynamicRoutes = {
  path: '/',
  component: '../layouts/BlankLayout',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'login',
          icon: 'smile',
          path: '/user/login',
          component: './login',
        },
        {
          path: '/user/set-password/:email/:joinId',
          component: './login/components/AcceptInvitation',
        },
        {
          path: '/user/admin/set-password/:email/:joinId',
          component: './login/components/AcceptInvitationAdmin',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: './user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          name: 'forgotPassword',
          icon: 'smile',
          path: '/user/forgotPassword',
          component: './login/components/ForgotPassword',
        },
        {
          name: 'resetPassword',
          icon: 'smile',
          path: '/user/resetPassword/:type/:email/:forgetPasswordId',
          component: './login/components/ResetPassword',
        },
        {
          component: '404',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        
        {
          path: '/home',
          name: 'Home',
          icon: 'AppstoreOutlined',
          routes: [
            {
              path: '/home',
              icon: 'AppstoreOutlined',
              component: './doc',
            },
        {
          path: '/home/add',
          name: 'Add Hospital',
          breadcrumbName: 'Add',
          //icon: 'AppstoreOutlined',
          component: './doc/components/FormSteps',
          hideInMenu: true,
          // authority: ['delivery', 'View-Dashboard'],
        },
      ]
    },
        {
          path: '/staff',
          name: 'Staff',
          icon: 'AppstoreOutlined',
          // authority: ['delivery', 'View-Dashboard'],
          routes: [
            {
              path: '/staff',
              name: 'Staff',
              icon: 'AppstoreOutlined',
              component: './staff',
              hideInMenu: true,
            },
            // {
            //   path: '/course/add',
            //   breadcrumbName: 'Add',
            //   name: 'Add Course',
            //   component: './course/components/AddCourse',
            //   hideInMenu: true,
            //   // authority: ['delivery', 'View-Dashboard'],
            // },
            // {
            //   name: 'Edit Course',
            //   breadcrumbName: 'Edit Course',
            //   hideInMenu: true,
            //   path: '/course/edit/:id',
            //   component: './course/components/EditCourse',
            //   // authority: ['delivery', 'Edit-Driver'],
            // },
          ],
        },
        {
          path: '/department',
          name: 'Department',
          icon: 'AppstoreOutlined',
          // authority: ['delivery', 'View-Dashboard'],
          routes: [
            {
              path: '/department',
              name: 'Department',
              icon: 'AppstoreOutlined',
              component: './department',
              hideInMenu: true,
            },
          ]
        },    
        {
          path: '/users',
          name: 'Users',
          icon: 'AppstoreOutlined',
          // authority: ['delivery', 'View-Dashboard'],
          routes: [
            {
              path: '/users',
              name: 'Users',
              icon: 'AppstoreOutlined',
              component: './users/index',
              hideInMenu: true,
            },
            {
              path: '/users/view',
              breadcrumbName: 'View',
              name: 'View User',
              component: './users/components/ViewUser',
              hideInMenu: true,
              // authority: ['delivery', 'View-Dashboard'],
            },
          ],
        },
        {
          path: '/notifications',
          name: 'Notifications',
          icon: 'AppstoreOutlined',
          // authority: ['delivery', 'View-Dashboard'],
          routes: [
            {
              path: '/notifications',
              name: 'Notifications',
              icon: 'AppstoreOutlined',
              component: './notification/index',
              hideInMenu: true,
            },
            {
              path: '/notifications/add',
              breadcrumbName: 'Add',
              name: 'Add Notification',
              component: './notification/components/AddNotification',
              hideInMenu: true,
              // authority: ['delivery', 'View-Dashboard'],
            },
          ],
        },
        {
          path: '/settings',
          name: 'Settings',
          breadcrumbName: 'Settings',
          icon: 'AppstoreOutlined',
          component: './settings',
        },
        {
          component: '404',
        },
      ],
    },
  ],
};
