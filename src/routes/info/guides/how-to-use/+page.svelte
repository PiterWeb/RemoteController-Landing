<script>
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
</script>

<InfoTemplate title="How to use" description="Learn how to use Remote Controller">
	<div class="p-6">
		<p>
			Remote Controller is easy to use. Just follow the next steps and you will be ready to play
			your favorite games with your friends.
		</p>

		<ol class="list-decimal list-inside">
			<li>
				<h2 class="font-bold text-2xl">Download the desktop app</h2>
				<p>
					Download the latest Remote Controller executable for your platform and run it. You will be
					asked to install ViGEm Bus. If you want to stream your game just click on the install
					button and follow the steps. In the case you don't want to stream your game just click on
					the cancel button. You can <strong>install ViGEm Bus later</strong> by going to the settings
					menu on the APP.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-2xl">Open the desktop app</h2>
				<p>Open the desktop app and you will see a screen like this:</p>
				<img src="/img/guides/how-to-use/1.png" alt="Desktop app screen" class="my-6" />
			</li>
			<li>
				<h2 class="font-bold text-2xl">Open the browser version</h2>
				<p>
					Open the browser version of Remote Controller by going to <a class="link" href="/client"
						>remote-controller-client.vercel.app</a
					>.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-2xl">Connect the desktop app with the browser version</h2>
				<p>In the browser version you will see a screen like this:</p>
				<img src="/img/guides/how-to-use/2.png" alt="Browser version screen" class="my-6" />
				<p>In the desktop app you will see a screen like this:</p>
				<img src="/img/guides/how-to-use/3.png" alt="Desktop app screen" class="my-6" />
				<p>
					In the desktop app you will see a code. Copy that code and paste it in the browser
					version. Then click on the connect button.
				</p>
				<img src="/img/guides/how-to-use/4.png" alt="Desktop app screen" class="my-6" />
				<p>If everything goes well you will see a screen like this:</p>
				<img src="/img/guides/how-to-use/5.png" alt="Desktop app screen" class="my-6" />
			</li>
		</ol>
	</div>
</InfoTemplate>
