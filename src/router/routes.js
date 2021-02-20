const routes = [
  { path: "/", component: () => import("pages/login.vue") },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "main", component: () => import("pages/main.vue") },
      { path: "learn1", component: () => import("pages/learn1.vue") },
      { path: "learn2", component: () => import("pages/learn2.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
