<template>
  <div class="row todo-item mb-4">
    <div class="col">
      <div class="card shadow" :class="statusClass">
        <div class="card-body">
          <h5>
            {{task}}
            <button class="btn btn-danger btn-sm float-right" @click="markForDelete">delete</button>
          </h5>
          <p>{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "task", "description", "status"],
  computed: {
    statusClass() {
      return {
        "alert-danger": this.marked,
        hold: this.status === "hold",
        complete: this.status == "complete"
      };
    },
    marked() {
      return this.$store.state.toDelete.indexOf(this.id) > -1;
    }
  },
  /* data() {
    return {
      marked: false
    };
  }, */
  methods: {
    markForDelete() {
      //this.marked = !this.marked;
      this.$store.commit("toggleDelete", this.id);
    }
  }
};
</script>
<style>
.todo-item .card {
  border-left: 0.25rem solid #4e73df;
}
.todo-item .card.complete {
  border-left: 0.25rem solid #1cc88a;
}
.todo-item .card.hold {
  border-left: 0.25rem solid #e74a3b;
}
.todo-item .card .card-body h5 {
  color: #5a5c69;
}
.todo-item .card .card-body h5 button {
  visibility: hidden;
}
.todo-item:hover .card .card-body h5 button {
  visibility: visible;
}
.todo-item .card .card-body p {
  margin-bottom: 0;
}
</style>