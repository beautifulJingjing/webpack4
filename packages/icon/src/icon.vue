<template>
  <i :class="'isc-icon-' + name"></i>
</template>

<script>
  export default {
    name: 'IsIcon',

    props: {
      name: String
    }
  };
</script>
