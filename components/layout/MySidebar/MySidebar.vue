<template>
  <div class="sidebarWrapper">
    <div class="sidebarSection">
      <nuxt-link :to="{ name: 'index' }">
        <el-avatar
          class="bg-white sidebarAvatar"
          :size="45"
          :src="currentUser.avatar"
        />
      </nuxt-link>
    </div>
    <div class="sidebarSection">
      <nuxt-link
        v-for="(item, index) in sidebarItems"
        :key="'sidebar-item-' + index"
        :to="item.route"
        :class="[
          { sidebarItem: true },
          { active: $route.name === item.route.name },
        ]"
      >
        <i :class="item.icon" />
      </nuxt-link>
    </div>
    <div class="sidebarSection">
      <div class="hover:bg-blu sidebarItem">
        <i class="icon-settings" />
      </div>
      <div class="hover:bg-danger sidebarItem">
        <i class="icon-power-off" />
      </div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, reactive, toRefs} from "vue";
import { useAuthStore } from '@/store/auth';

export default {
  name: 'MySidebar',
  props: {},
  setup() {
    const store = useAuthStore();

    onMounted(() => {
      try {
        store.getAuth();
      } catch (e) {}
    });

    const data = reactive({
      sidebarItems: [
        {
          icon: 'icon-star-o',
          route: { name: 'index' },
        },
        {
          icon: 'icon-user',
          route: { name: 'users' },
        },
        {
          icon: 'icon-archive',
          route: { name: 'projects' },
        },
      ],
    });

    const currentUser = computed(() => store.currentUser || {});

    return {
      ...toRefs(data),
      currentUser,
    };
  },
};
</script>
