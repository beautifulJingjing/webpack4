<script>
  export default {
    name: 'IsTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        event.stopPropagation();
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const classes = [ 'isc-tag', this.type ? `isc-tag--${this.type}` : '',
        this.tagSize ? `isc-tag--${this.tagSize}` : '',
        {'is-hit': this.hit}
      ];
      const tagEl = (<span class={classes} style={{backgroundColor: this.color}} on-click={this.handleClick}>
        { this.$slots.default }
        {
          this.closable && <i class="isc-tag__close isc-icon-close" on-click={this.handleClose}></i>
        }
      </span>);

      return this.disableTransitions ? tagEl : <transition name="isc-zoom-in-center">{ tagEl }</transition>;
    }
  };
</script>
