<template>
  <div :class="$style.abc">
    <transition name="slide-fade" mode="out-in">
      <el-button
        v-if="locale === 'en'"
        key="en-button"
        size="large"
        type="primary"
        @click="$i18n.setLocale('vi')"
      >
        {{ $t('Change language') }}
      </el-button>
      <el-button
        v-else
        key="vi-button"
        size="large"
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
    <Head>
      <Title>{{ $t('Home page') }}</Title>
    </Head>
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
};
</script>

<style lang="scss" module>
.abc {
  color: $--color-red;
}
</style>
