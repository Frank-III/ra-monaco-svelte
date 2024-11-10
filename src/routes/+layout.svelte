<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import rustAnalyzerLogo from '$lib/images/rust-analyzer.svg';
</script>

<nav class="bg-gray-800 shadow-lg">
	<div class="w-full mx-auto px-4">
		<div class="flex items-center justify-between h-16">
			<div class="flex items-center">
				<div class="flex-shrink-0 bg-white">
					<img class="h-8 w-16" src={rustAnalyzerLogo} alt="Rust Analyzer Logo" />
				</div>
				<div class="ml-4">
					<span class="text-white text-lg font-semibold">Rust Playground</span>
					<span class="text-gray-400 text-sm ml-2">(Unofficial)</span>
				</div>
			</div>
			<div class="flex items-center">
				<a
					href="https://github.com/rust-lang/rust-analyzer"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
				>
					GitHub
				</a>
				<a
					href="https://rust-analyzer.github.io/"
					target="_blank"
					rel="noopener noreferrer"
					class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
				>
					Docs
				</a>
			</div>
		</div>
	</div>
</nav>

<main class="h-[calc(100vh-4rem)]">
	{@render children()}
</main>
