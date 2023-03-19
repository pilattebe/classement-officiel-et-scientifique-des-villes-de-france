export function Footer() {
	// This is the iframe to embed
	const pad = 20;
	const totW = 127.14 + pad * 2;
	return (
		<div class="m-1 flex flex-row flex-wrap items-center justify-end p-1 text-lg font-bold leading-normal text-amber-500 shadow-2xl">
			<a
				href="https://github.com/sponsors/pilattebe"
				target="_blank"
				rel="noreferrer"
				class=""
			>
				<svg
					class="ml-1 inline-block"
					width="32"
					height="32"
					viewBox="0 0 98 96"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
						fill="rgb(245 158 11)"
					/>
				</svg>
			</a>
			<a
				href="https://discordapp.com/users/627170495929778226"
				target="_blank"
				rel="noreferrer"
				class=""
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox={`${-pad} ${-15.395 - pad} ${totW} ${totW}`}
					class="ml-1 inline-block"
				>
					<path
						fill="rgb(245 158 11)"
						class="cls-1"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d={`M ${totW / 2 - pad}, ${totW / 2 - pad - 15.395}
        m -${totW / 2}, 0
        a ${totW / 2},${totW / 2} 0 1,0 ${totW},0
        a ${totW / 2},${totW / 2} 0 1,0 -${totW},0
        
        M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z`}
					/>
				</svg>
			</a>
			<a href="https://twitter.com/pilattebe" target="_blank" rel="noreferrer" class="mr-1">
				<svg
					version="1.1"
					class="ml-1 inline-block"
					id="White"
					x="0px"
					y="0px"
					width="32"
					height="32"
					viewBox="0 0 400 400"
					style="enable-background:new 0 0 400 400;"
				>
					<path
						fill="rgb(245 158 11)"
						d="M400,200c0,110.5-89.5,200-200,200S0,310.5,0,200S89.5,0,200,0S400,89.5,400,200z M163.4,305.5
	c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6
	c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2
	c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6
	c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5
	c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"
					/>
				</svg>
				<span class="mx-2 hidden sm:inline-block">@pilattebe</span>
			</a>
			<a class="mx-1" href="mailto:contact@pilatte.be">
				<img
					src="https://avatars.githubusercontent.com/u/34147102?s=40&u=501359a7ec40a19eabab63fee7edf67bdedc8859&v=4"
					alt="Sponsor pilatte"
					height="32"
					width="32"
					class="inline-block rounded-full border-2 border-amber-500 align-middle"
				/>
				<span class="mx-2 hidden ssm:inline-block">contact@pilatte.be</span>
			</a>
			<iframe
				src="https://github.com/sponsors/pilattebe/button"
				title="Sponsor pilatte"
				height="32"
				width="114"
				class=" mx-1 inline-block rounded-lg border-0"
			></iframe>
		</div>
	);
}
