<template>
  <div>
    <div class="row mb-4">
      <div class="col">
        <button
          class="btn btn-danger float-right"
          v-show="$store.state.toDelete.length > 0"
          @click.prevent="deleteItems"
        >Delete {{$store.state.toDelete.length}}</button>
      </div>
    </div>
    <todo-item v-for="todo in todos" :key="todo.id" v-bind="todo" />
  </div>
</template>
<script>
import TodoItem from "./TodoListItem.vue";
export default {
  components: {
    TodoItem
  },
  props: ["todos"],
  methods: {
    deleteItems() {
      this.$store.dispatch("deleteSelectedTodos").then(() => {
        alert("Items deleted");
      });
    }
  }
};
</script>