<template>
  <div :class="$style.abc">
    <transition name="slide-fade" mode="out-in">
      <el-button
        v-if="locale === 'en'"
        key="en-button"
        size="mini"
        type="primary"
        @click="$i18n.setLocale('vi')"
      >
        {{ $t('Change language') }}
      </el-button>
      <el-button
        v-else
        key="vi-button"
        size="mini"
        type="danger"
        @click="$i18n.setLocale('en')"
      >
        {{ $t('Change language') }}
      </el-button>
    </transition>
    <div>
      <span class="text-primary-300"> {{ $t('Hello world!') }}</span>
      <span class="text-warning-700">{{ $t('Hello world!') }}</span>
    </div>
    <ExampleBase />
  </div>
</template>

<script>
import {computed} from "vue";
import { useLocaleStore } from "@/store/locale";

export default {
  name: "IndexPage",
  setup() {
    const store = useLocaleStore();
    const locale = computed(() => store.getLocale);

    return {
      locale,
    };
  },
  __defaults: {
    head() {
      return {
        title: this.$t('Home page'),
      };
    }
  }
};
</script>

<style lang="scss" module>
.abc {
  color: $--color-red;
}
</style>

<i18n lang="yaml">
vi:
  Home page: Trang chủ
  Hello world!: Xin chào thế giới!
  Change language: Đổi ngôn ngữ
</i18n>
