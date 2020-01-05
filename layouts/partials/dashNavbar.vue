    <template>
    <div>

      <AppDrawer />
      <AppToolbar />

    </div>
    </template>

    <script>
import AppDrawer from '@/components/AppDrawer'
import AppToolbar from '@/components/AppToolbar'
export default {
  components: {
  AppDrawer,
  AppToolbar
  },

  data () {
    return {
      showDrawer: true
    }
  },

}
</script>
