<template>
  <div>
    <h1>{{ $t('Project') }}</h1>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="body" label="Body" />
    </el-table>
  </div>
</template>

<script>
import {computed, onMounted, onUnmounted} from 'vue';
import { useProjectStore } from '@/store/project';

export default {
  name: "ProjectPage",
  setup() {
    const store = useProjectStore();

    onMounted(() => {
      try {
        store.getMany();
      } catch (e) {
        console.error(e);
      }
    });

    onUnmounted(() => store.$dispose());
    const count = computed(() => store.count);
    const tableData = computed(() => store.list);

    return {
      count,
      tableData,
    };
  }
};
</script>
