import React from "react";

export interface ISvgProps {
	color?: string;
	size?: number;
	type:
		| "Bookmark"
		| "Magic"
		| "Star"
		| "DashCircle"
		| "Search"
		| "Person"
		| "Bell"
		| "Google"
		| "AppleLogo"
		| "VK"
		| "OK"
		| "Twitter"
		| "Viber"
		| "Linkedin"
		| "Telegram";
}

export function SvgIcon({ type, color = "#fff", size }: ISvgProps) {
	switch (type) {
		case "Bookmark":
			return (
				<svg
					width={size}
					height={size}
					xmlns='http://www.w3.org/2000/svg'
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z' />
				</svg>
			);
		case "Magic":
			return (
				<svg
					width={size}
					height={size}
					xmlns='http://www.w3.org/2000/svg'
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z' />
				</svg>
			);
		case "Star":
			return (
				<svg
					width={size}
					height={size}
					xmlns='http://www.w3.org/2000/svg'
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z' />
				</svg>
			);
		case "DashCircle":
			return (
				<svg
					width={size}
					height={size}
					fill={color}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
				>
					<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
					<path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
				</svg>
			);
		case "Search":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
				</svg>
			);
		case "Person":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
				</svg>
			);
		case "Bell":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 16 16'
				>
					<path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z' />
				</svg>
			);

		case "Google":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M15.3099 12.7188L14.0282 11.386L9.78055 15.9436L15.3099 12.7188Z M16.958 11.7576L17.0071 11.729C18.3303 10.9572 18.3303 9.04538 17.0071 8.27366L16.9564 8.2441L15.3199 10L16.958 11.7576Z M15.3082 7.28288L9.78589 4.06215L14.0282 8.61402L15.3082 7.28288Z M4.04121 1.00037L12.6954 10L4.03865 19.0023C2.98068 19.0214 2 18.1809 2 16.9996V3.00301C2 1.82076 2.98226 0.979819 4.04121 1.00037Z' />
				</svg>
			);

		case "AppleLogo":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M18.472 6.564c-1.491 1.071-2.237 2.36-2.237 3.867 0 1.805.922 3.19 2.765 4.155-.495 1.454-1.211 2.72-2.15 3.798C15.914 19.46 15.057 20 14.282 20c-.365 0-.863-.122-1.495-.367l-.303-.119c-.618-.244-1.166-.367-1.641-.367-.45 0-.941.096-1.475.288l-.381.139-.48.198c-.377.152-.758.228-1.142.228-.906 0-1.905-.757-3-2.27C2.788 15.56 2 13.197 2 10.64c0-1.818.492-3.283 1.475-4.393.984-1.11 2.286-1.666 3.908-1.666.606 0 1.173.112 1.7.337l.362.149.38.159c.34.145.613.218.822.218.267 0 .563-.063.889-.189l.498-.198.371-.139c.593-.218 1.247-.327 1.964-.327 1.7 0 3.068.658 4.103 1.973zM14.447 0c.02.231.03.41.03.535 0 1.144-.41 2.147-1.232 3.01-.82.863-1.774 1.294-2.862 1.294-.033-.258-.05-.443-.05-.555 0-.972.382-1.884 1.144-2.737C12.239.694 13.122.195 14.125.05c.071-.014.179-.03.322-.05z' />
				</svg>
			);
		case "VK":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M11.0164 16.5C4.25986 16.5 0.159415 11.8038 0 4H3.42203C3.52871 9.73247 6.13209 12.1652 8.12777 12.6611V4H11.4084V8.94597C13.3333 8.73223 15.347 6.48199 16.0254 4H19.2509C18.7343 7.05355 16.542 9.3038 14.991 10.232C16.542 10.9825 19.0375 12.9469 20 16.5H16.4533C15.7042 14.1249 13.8679 12.2853 11.4084 12.0355V16.5H11.0164Z' />
				</svg>
			);

		case "OK":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='m10,10.12277c-1.39655,0 -2.58881,-0.49478 -3.57681,-1.48438c-0.98798,-0.98959 -1.48196,-2.18005 -1.48196,-3.57144c0,-1.3988 0.49399,-2.59299 1.48196,-3.58258c0.98801,-0.98959 2.18027,-1.48438 3.57681,-1.48438c1.39655,0 2.58881,0.49478 3.57681,1.48438c0.98798,0.98959 1.48196,2.18378 1.48196,3.58258c0,1.39139 -0.49399,2.58185 -1.48196,3.57144c-0.98801,0.98959 -2.18027,1.48438 -3.57681,1.48438zm0,-7.55582c-0.68341,0 -1.2684,0.24368 -1.75497,0.73105c-0.48657,0.48734 -0.72986,1.077 -0.72986,1.76895c0,0.68454 0.24329,1.27048 0.72986,1.75781c0.48657,0.48737 1.07156,0.73102 1.75497,0.73102c0.68341,0 1.2684,-0.24365 1.75497,-0.73102c0.48657,-0.48734 0.72986,-1.07327 0.72986,-1.75781c0,-0.69196 -0.24329,-1.28162 -0.72986,-1.76895c-0.48657,-0.48737 -1.07156,-0.73105 -1.75497,-0.73105zm5.82761,8.16965c0.09659,0.2009 0.15228,0.38504 0.16714,0.55246c0.01486,0.16742 -0.00186,0.31808 -0.05014,0.452c-0.04828,0.13394 -0.1467,0.27716 -0.29529,0.42969c-0.14856,0.15256 -0.30643,0.29019 -0.47354,0.41296c-0.16714,0.12277 -0.39557,0.27716 -0.68527,0.46317c-0.85428,0.54315 -2.02426,0.89285 -3.50995,1.0491l0.81342,0.80356l2.9751,2.97992c0.22284,0.23065 0.33426,0.50595 0.33426,0.8259c0,0.31995 -0.11142,0.59152 -0.33426,0.81473l-0.13373,0.14511c-0.23029,0.22321 -0.50513,0.33481 -0.82455,0.33481c-0.31943,0 -0.59427,-0.1116 -0.82455,-0.33481c-0.49771,-0.50598 -1.48941,-1.50299 -2.9751,-2.99109l-2.9751,2.99109c-0.23029,0.22321 -0.50513,0.33481 -0.82455,0.33481c-0.31943,0 -0.59055,-0.1116 -0.81342,-0.33481l-0.1337,-0.14511c-0.23029,-0.22321 -0.34543,-0.49478 -0.34543,-0.81473c0,-0.31995 0.11514,-0.59525 0.34543,-0.8259l3.77734,-3.78348c-1.50797,-0.15625 -2.68536,-0.50595 -3.53223,-1.0491c-0.2897,-0.186 -0.51813,-0.34039 -0.68527,-0.46317c-0.16711,-0.12277 -0.32498,-0.26041 -0.47354,-0.41296c-0.14859,-0.15253 -0.24701,-0.29575 -0.29529,-0.42969c-0.04828,-0.13391 -0.065,-0.28458 -0.05014,-0.452c0.01486,-0.16742 0.07056,-0.35156 0.16714,-0.55246c0.07428,-0.1488 0.17828,-0.27902 0.31198,-0.39063c0.13373,-0.1116 0.2897,-0.19345 0.46799,-0.24551c0.17828,-0.05209 0.38629,-0.04468 0.62399,0.02231c0.2377,0.06696 0.47913,0.19717 0.72427,0.39063c0.03714,0.02975 0.09286,0.07068 0.16714,0.12277c0.07428,0.05206 0.23401,0.14322 0.47913,0.27344c0.24515,0.13019 0.50143,0.24365 0.76886,0.34039c0.26743,0.09674 0.60913,0.186 1.02512,0.26785c0.41599,0.08185 0.83569,0.12277 1.25912,0.12277c0.67599,0 1.32227,-0.09488 1.93881,-0.28461c0.61658,-0.18973 1.06229,-0.37759 1.33713,-0.5636l0.42343,-0.27902c0.24515,-0.19345 0.48657,-0.32367 0.72427,-0.39063c0.2377,-0.06699 0.44571,-0.0744 0.62399,-0.02231c0.17828,0.05206 0.33426,0.13391 0.46799,0.24551c0.1337,0.1116 0.2377,0.24182 0.31198,0.39063l0.00002,0.00001z' />
				</svg>
			);

		case "Twitter":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M18 5.148c-.328.092-.666.149-.999.221l-.017-.049a3.791 3.791 0 0 0 1.533-2.024c-.062.03-.093.042-.121.058a7.65 7.65 0 0 1-2.095.815c-.108.024-.167-.01-.24-.075-.181-.16-.359-.33-.558-.463-1.374-.92-3.154-.832-4.409.247-.936.805-1.386 1.85-1.327 3.109.01.214.042.428.066.668-3.095-.215-5.626-1.542-7.637-3.95a3.82 3.82 0 0 0-.405 2.724c.205.958.726 1.712 1.493 2.311a4.718 4.718 0 0 1-.829-.137c-.264-.075-.517-.192-.786-.295.002.896.27 1.686.81 2.38s1.245 1.127 2.085 1.363a5.42 5.42 0 0 1-.788.11c-.26.016-.521.004-.8.004.607 1.57 1.736 2.431 3.434 2.585C4.79 16.003 2.992 16.5 1 16.327c.192.131.374.263.574.357.536.252 1.07.512 1.621.725.847.326 1.73.5 2.633.561 1.209.083 2.403-.004 3.58-.315a10.058 10.058 0 0 0 2.33-.931c.521-.29 1.01-.626 1.474-1.004a8.86 8.86 0 0 0 1.516-1.549c.378-.506.729-1.036 1.05-1.581.459-.778.78-1.622 1.018-2.495.289-1.056.42-2.136.387-3.235-.002-.068.049-.156.101-.205.246-.227.507-.435.75-.666A6.66 6.66 0 0 0 19 4.81c-.346.118-.669.246-1 .339z' />
				</svg>
			);

		case "Viber":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M11.0653 2.45429C11.0076 2.44639 10.9391 2.44113 10.8652 2.43586C10.5624 2.4148 9.93241 2.37004 9.96936 1.73548C9.98558 1.46077 10.1118 1 10.7769 1C10.8506 1 10.9228 1.00489 10.9859 1.00917L10.9932 1.00965C10.998 1.00996 11.0028 1.01028 11.0076 1.01058C11.057 1.01376 11.1023 1.01668 11.141 1.01668C11.1575 1.01694 11.1741 1.01606 11.1905 1.01404C11.2067 1.01141 11.223 1.01141 11.241 1.01141C15.4191 1.14833 19.0403 4.84242 18.988 8.91479C18.988 8.96625 18.9903 9.0238 18.9928 9.08532L18.9934 9.0991C19.0069 9.36942 19.0213 9.70556 18.7996 9.93112C18.6716 10.061 18.4941 10.1268 18.2697 10.1268H18.2481C17.5347 10.1137 17.5235 9.46673 17.5181 9.15495C17.5172 9.06806 17.5154 8.985 17.5064 8.91742C16.99 4.93457 15.1235 3.06251 11.0653 2.45429Z M17.0521 13.8683C17.1375 13.9349 17.2237 14.0005 17.3108 14.0649C17.9633 14.5503 18.7762 15.155 18.331 16.3785C17.8236 17.7748 16.1698 19 14.7927 19H14.7693C14.7447 18.9999 14.7201 18.9966 14.6963 18.9904C14.6531 18.979 14.5936 18.9658 14.5251 18.9509C14.3223 18.907 14.0456 18.8464 13.7816 18.7359C10.8544 17.508 8.32731 15.8747 6.27161 13.8797C4.17084 11.8418 2.50536 9.37205 1.32024 6.53982C0.911082 5.56035 0.893057 4.61861 1.27157 3.81643C1.66361 2.98703 2.44588 2.35863 3.53727 2.00142C3.94419 1.85943 4.38931 1.86067 4.79539 2.00493C5.74529 2.34458 7.99927 5.3383 8.05514 6.3327C8.10291 7.20948 7.41166 7.66675 7.03945 7.91249C6.38516 8.34606 6.2644 8.87792 6.6366 9.6924C7.40626 11.3766 8.7527 12.6528 10.6363 13.4848C10.8347 13.5797 11.0516 13.6326 11.2725 13.6401C11.5907 13.6401 11.8493 13.4874 12.062 13.1732C12.5433 12.4649 13.1255 12.1051 13.7942 12.1051C14.2899 12.1051 14.8144 12.2991 15.3984 12.6984L15.7214 12.9181C16.1643 13.2196 16.6214 13.5307 17.0521 13.8683Z M10.5759 6.17559C10.748 5.68937 11.2392 5.67708 11.4744 5.67181C12.0999 5.65689 12.7866 5.97461 13.3562 6.53807C13.9249 7.09977 14.2583 7.80542 14.2511 8.4268C14.2709 9.02274 14.0483 9.35186 13.5887 9.40452C13.56 9.40799 13.5311 9.40975 13.5022 9.40979C13.121 9.40979 12.8227 9.10875 12.7785 8.67869C12.6839 7.75451 12.2089 7.25775 11.2852 7.11382C11.031 7.07344 10.7507 6.99972 10.6047 6.76275C10.5047 6.60038 10.4948 6.40379 10.5759 6.17559Z M11.6221 3.36701C14.3718 3.68912 16.5915 6.01581 16.5699 8.55401L16.569 8.55314C16.5692 8.56487 16.5686 8.5766 16.5672 8.58824C16.5601 8.63395 16.5626 8.7017 16.5652 8.77399L16.5654 8.77782C16.5744 9.03857 16.5931 9.58091 15.9841 9.67128C15.9228 9.68006 15.8633 9.68445 15.8092 9.68445C15.1555 9.68445 15.1181 9.09374 15.1001 8.80778L15.1 8.8059C15.0995 8.79942 15.099 8.79297 15.0986 8.78655C15.0937 8.71743 15.0892 8.65266 15.0801 8.59965C14.6737 6.21328 13.8418 5.36809 11.3707 4.83008C11.3137 4.81783 11.2465 4.80863 11.1757 4.79892L11.1598 4.79673C10.8957 4.76162 10.5668 4.71774 10.3802 4.47112C10.2694 4.32455 10.2324 4.13585 10.2712 3.91204C10.3108 3.68297 10.4613 3.2968 11.0255 3.2968C11.1662 3.30024 11.3063 3.31492 11.4446 3.34068C11.5076 3.35122 11.5671 3.36087 11.6221 3.36701Z' />
				</svg>
			);

		case "Linkedin":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='m 7.22171,18 h 3.85859 v -6.7824 c 0,-0.363 0.025,-0.7256 0.1269,-0.9851 0.279,-0.72522 0.9139,-1.47635 1.9798,-1.47635 1.3962,0 1.9548,1.11375 1.9548,2.74645 V 18 H 19 v -6.9639 c 0,-3.73044 -1.9036,-5.46629 -4.4423,-5.46629 -2.0816,0 -2.9954,1.21725 -3.5031,2.04636 h 0.0258 V 5.85481 H 7.22181 C 7.27245,6.99443 7.22171,18 7.22171,18 Z M 5.08668,18 V 5.85481 H 1.2281 V 18 Z M 3.15737,4.19659 c 1.34557,0 2.18307,-0.93262 2.18307,-2.09812 C 5.31536,0.906738 4.50294,0 3.1829,0 1.86299,0 1,0.906738 1,2.09847 1,3.26397 1.83732,4.19659 3.13222,4.19659 Z' />
				</svg>
			);

		case "Telegram":
			return (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width={size}
					height={size}
					fill={color}
					viewBox='0 0 20 20'
				>
					<path d='M1.2249 8.96853C1.2249 8.96853 10.0712 5.45587 13.1399 4.2177C14.3149 3.72415 18.3024 2.14136 18.3024 2.14136C18.3024 2.14136 20.1437 1.44843 19.9899 3.13091C19.9399 3.82261 19.5312 6.24726 19.1212 8.86884C18.5087 12.5797 17.8437 16.6351 17.8437 16.6351C17.8437 16.6351 17.7412 17.7736 16.8724 17.9717C16.0024 18.1687 14.5712 17.2788 14.3149 17.0807C14.1112 16.933 10.4812 14.7065 9.1524 13.6184C8.79365 13.3218 8.38365 12.7274 9.2024 12.0357C11.0437 10.4024 13.2412 8.37406 14.5712 7.08789C15.1837 6.49465 15.7987 5.10879 13.2412 6.79127C9.61115 9.21592 6.0324 11.4904 6.0324 11.4904C6.0324 11.4904 5.21365 11.9852 3.6799 11.5396C2.14615 11.0953 0.357404 10.5033 0.357404 10.5033C0.357404 10.5033 -0.870096 9.76116 1.22615 8.96977L1.2249 8.96853Z' />
				</svg>
			);

		default:
			return null;
	}
}
