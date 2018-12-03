<template>
    <div>
        <ul>
            <li v-for="item in params.data" :key="item">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "ImportOrderMessageComponent",
  props: {
    params: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      errorList: null
    };
  }
};
</script>

