<script>
	import InfoTemplate from '$lib/components/InfoTemplate.svelte';
</script>

<InfoTemplate title="FAQ" description="Things you may want to know about LibreRemotePlay">
	<div class="p-6">
		<ul class="[&>li]:mb-6">
			<li>
				<h2 class="font-bold text-xl">What is LibreRemotePlay?</h2>
				<p>
					LibreRemotePlay is a software that allows you to play pc videogames from other
					dispositives (Browsers, Windows). It is purpose is to allow you to play your favorite
					games with other people without having to be in the same room or using it like a gaming
					cloud service.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-xl">How does it work?</h2>
				<p>
					LibreRemotePlay uses a technology called WebRTC to stream the video and audio from your
					computer to the browser and also the gamepad input. It also uses ViGEm to emulate a
					gamepad on your computer if you are on Windows.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-xl">Is it free?</h2>
				<p>
					Yes, LibreRemotePlay is free and open source. You can check the source code on <a
						class="link link-primary"
						href="https://github.com/PiterWeb/LibreRemotePlay">Github</a
					>.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-xl">Can I use it to play with my friends?</h2>
				<p>
					Yes, you can. You can use the browser version to play with your friends or you can use the
					desktop version to play with your friends on the same network.
				</p>
			</li>
			<li>
				<h2 class="font-bold text-xl">It depends on any critical external service?</h2>
				<p>
					No, LibreRemotePlay doesn't depend on any critical external service. It only depends on
					a series of IP Discovery servers (STUN) that can be replaced on the config to create a peer to peer connection between
					devices.
				</p>
			</li>
            <li>
                <h2 class="font-bold text-xl">Is it safe?</h2>
                <p>
                    Theoricaly yes, but if you want to know more about this you can check the <a class="link link-primary" href="/info/resources/security">security guide</a>.
            </li>
            <li>
                <h2 class="font-bold text-xl">I need an acount?</h2>
                <p>
                    No, you don't need an account to use LibreRemotePlay. We desing the software to be as simple as possible and not to relay on external services that can be a problem in the future.
                    The only thing you need to do is to download the desktop app or go to the browser version and you are ready to use it.
                    The bad part of this is that you have to pass the connection codes to the other person manually.
                </p>
            </li>
		</ul>
	</div>
</InfoTemplate>
