<template>
  <div>
    <div class="chooser-component">
      <ul class="chooser-list">
        <li
          v-for="(item,index) in selections"
          @click="toggleSelection(index)"
          :class="{active:checkActive (index) }"
        >{{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    data() {
      return {
        nowIndexes: [0]
      }
    },
    methods: {
      toggleSelection(index) {
        if (this.nowIndexes.indexOf(index) === -1) {
          this.nowIndexes.push(index)
        } else {
          for (var i = 0; i < this.nowIndexes.length; i++) {
            if (this.nowIndexes[i] == index) {
              this.nowIndexes.splice(i, 1);
              break;
            }
          }
        }
        let nowObjArray = _.map(this.nowIndexes, (idx) => {
          return this.selections[idx]
        });
        this.$emit('on-change', nowObjArray)

      },
      checkActive(index) {
        return this.nowIndexes.indexOf(index) !== -1
      }
    },
    props: {
      selections: {
        type: Array,
        default: [{
          label: 'test',
          value: 0
        }]
      }
    },
    computed: {},
    watch: {},
    components: {},
    beforeCreate() {
    },
    created() {
    },
    beforeMount() {
    },
    mounted() {
    },
    beforeUpdate() {
    },
    updated() {
    },
    beforeDestroy() {
    },
    destroyed() {
    }
  }
</script>

<style scoped>
  .chooser-component {
    position: relative;
    display: inline-block;
  }

  .chooser-list li {
    display: inline-block;
    border: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    padding: 0 8px;
    margin-right: 5px;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }

  .chooser-list .active {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
  }
</style>
