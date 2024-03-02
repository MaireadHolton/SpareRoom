<script>
    import TitleBar from "../lib/TitleBar.svelte";
    import MainNavigator from "../lib/MainNavigator.svelte";
    import AdvertMap from "../lib/ReportMap.svelte";
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of Visit Locations"} title={"SpareRoom"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>

<AdvertMap />