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
			<li class="list-item">
				Download & Install it. You can follow this <a
					class="link link-primary"
					href="/info/guides/installation">guide</a
				>
			</li>

			<li class="list-item">
				Open the app and you will see the main menu. There you will see two options: Host and
				Client, you have to follow the instructions depending on your role.

				<p class="pt-4">
					<strong> Client </strong>: If you are going to join a game with your gamepad you will use
					the Client option in the main menu.
					<br />
					<strong> Host </strong>
					: If you are going to host the game you will use the Host option in the main menu.
				</p>

				<div class="grid grid-cols-1 md:grid-cols-2 w-full">
					<div>
						<h3 class="m-6 font-bold">Client Instructions</h3>
						<ol
							class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-12"
						>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-circle-user-round"
										><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle
											cx="12"
											cy="12"
											r="10"
										/></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Create Client</h3>
								<p class="text-sm">
									Use the button to create your client code, it will be copied to your clipboard
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-share-2"
										><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
											cx="18"
											cy="19"
											r="3"
										/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line
											x1="15.41"
											x2="8.59"
											y1="6.51"
											y2="10.49"
										/></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Share your client code</h3>
								<p class="text-sm">Now send your client code to your Host</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-timer"
										><line x1="10" x2="14" y1="2" y2="2" /><line
											x1="12"
											x2="15"
											y1="14"
											y2="11"
										/><circle cx="12" cy="14" r="8" /></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Wait for Host</h3>
								<p class="text-sm">
									Wait until your Host finished the host code generation proccess and send you the
									code
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-clipboard"
										><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path
											d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
										/></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Get the host code</h3>
								<p class="text-sm">
									When your Host send you the code, paste it in the text box and click on the
									Connect button.
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900"
								>
									<svg
										class="w-3.5 h-3.5 text-blue-500 dark:text-blue-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 16 12"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5.917 5.724 10.5 15 1.5"
										/>
									</svg>
								</span>
								<h3 class="font-medium leading-tight">Proccess finished</h3>
							</li>
						</ol>
					</div>

					<div>
						<h3 class="m-6 font-bold">Host Instructions</h3>
						<ol
							class="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-12"
						>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-timer"
										><line x1="10" x2="14" y1="2" y2="2" /><line
											x1="12"
											x2="15"
											y1="14"
											y2="11"
										/><circle cx="12" cy="14" r="8" /></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Wait for client</h3>
								<p class="text-sm">Wait until your client finished the creation proccess</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-clipboard"
										><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path
											d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
										/></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Get the client code</h3>
								<p class="text-sm">
									When your client finished the creation proccess you will get the client code
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-clipboard-type"
										><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path
											d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
										/><path d="M9 12v-1h6v1" /><path d="M11 17h2" /><path d="M12 11v6" /></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Generate Host code</h3>
								<p class="text-sm">
									Paste the client code in the text box and click on the Connect button, the host
									code will be copied to your clipboard.
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-share-2"
										><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle
											cx="18"
											cy="19"
											r="3"
										/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line
											x1="15.41"
											x2="8.59"
											y1="6.51"
											y2="10.49"
										/></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Share your host code</h3>
								<p class="text-sm">Now send your host code to your Client</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="#c7c7c7"
										stroke-width="1"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="lucide lucide-timer"
										><line x1="10" x2="14" y1="2" y2="2" /><line
											x1="12"
											x2="15"
											y1="14"
											y2="11"
										/><circle cx="12" cy="14" r="8" /></svg
									>
								</span>
								<h3 class="font-medium leading-tight">Wait for client</h3>
								<p class="text-sm">
									Wait until your client finished the connection proccess, when it's done you will
									see a message in the screen.
								</p>
							</li>
							<li class="mb-10 ms-6">
								<span
									class="absolute flex items-center justify-center w-8 h-8 bg-blue-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900"
								>
									<svg
										class="w-3.5 h-3.5 text-blue-500 dark:text-blue-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 16 12"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5.917 5.724 10.5 15 1.5"
										/>
									</svg>
								</span>
								<h3 class="font-medium leading-tight">Proccess finished</h3>
							</li>
						</ol>
					</div>
				</div>
			</li>
		</ol>
	</div>
</InfoTemplate>
