<script>
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';


</script>

<InfoTemplate title="Installation" description="How to install the RemoteController desktop app">
	<section class="p-6">
		<p>
			Remote Controller is easy to install. Just download the latest version for your platform and
			you are ready to use it.
		</p>


		<a class="link" href="/download">
			Download the latest Remote Controller executable</a
		>

	</section>

	<section class="p-6">
		<h2 class="font-bold text-2xl">Windows</h2>
		<p>
			Download the latest Remote Controller executable and run it. You will be asked to install
			ViGEm Bus. If you want to stream your game just click on the install button and follow the steps.
			In the case you don't want to stream your game just click on the cancel button. You can <strong>install
			ViGEm Bus later</strong> by going to the settings menu on the APP.
		</p>
	</section>

	<section class="p-6">
		<h2 class="font-bold text-2xl">Linux</h2>
		<p>
			Comming soon...
		</p>
	</section>

	<div class="divider"></div>

	<section class="p-6">
		<h2 class="font-bold text-2xl">Browser</h2>
		<p>
			In case you want to use the browser version of Remote Controller you can do it by going to
			<a class="link" href="/client">remote-controller-client.vercel.app</a>.
		</p>
	</section>
</InfoTemplate>
