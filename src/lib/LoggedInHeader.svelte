<script>
    import TitleBar from './TitleBar.svelte';
    import MainNavigator from './MainNavigator.svelte';
</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={'spareRoom'} subTitle={'Find or post student accommodation'} />
    </div>
    <div class="column">
        <MainNavigator />
    </div>
</div>