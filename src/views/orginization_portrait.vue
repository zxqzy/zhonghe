<template>
  <div class="orginization_portrait">
    <img ref="background" src="/zhwllz/images/Bg-Party organization.png" :style="{position: 'absolute', top: '0px', left: '0px'}" />
    <h1 :style="{color: '#fff', fontSize: '32px', fontWeight: '500', textAlign: 'center', position: 'absolute', top: '24px', left: '768px'}">
      综合街道办事处党组织画像
    </h1>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'

export const orginization_portrait = {
  mixins: [BuiltInMixin],

  components: {
  },

  data () {
    return {
      craneStates: {
        department: {},
      },
    }
  },
}
export default orginization_portrait
</script>