import { createRouter, createWebHashHistory } from 'vue-router';
import ProductList from '../views/ProductList.vue';
import StoreList from '../views/StoreList.vue';

const router = createRouter({
  history: createWebHashHistory(), // Use hash mode
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductList,
      meta: {
        title: 'Desktop - Product List',
      },
    },
    {
      path: '/stores',
      name: 'stores',
      component: StoreList,
      meta: {
        title: 'Desktop - Store List',
      },
    },
  ],
});

router.beforeEach(to => {
  if (to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'Cold Banana Assessment';
  }
});

export default router;
