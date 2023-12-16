<script>
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';

	import { page } from '$app/stores';

</script>

<InfoTemplate title="Installation" description="How to install the RemoteController desktop app">
	<div class="p-6">
		<p>
			Remote Controller is easy to install. Just download the latest version for your platform and
			you are ready to use it.
		</p>


		<a class="link" href={$page.url.origin + '/download'}>
			Download the latest Remote Controller executable</a
		>

	</div>
</InfoTemplate>
