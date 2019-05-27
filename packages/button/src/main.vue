<template>
  <button
    class="isc-button"
    type="button"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="buttonDisabled"
    :loading="loading"
    :class="[
      type ? 'isc-button--' + type : '',
      size ? 'isc-button--' + size : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-loading': loading
      }
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>

export default {
  name: 'IsButton',
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    plain: Boolean
  },
  computed: {
    buttonDisabled() {
      return this.disabled;
    }
  }
};
</script>
