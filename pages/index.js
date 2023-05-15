import Head from "next/head"
import Image from "next/image"
import Maintain from "../components/Maintain"

// Components
import HeroSection from "../components/HeroSection"

export default function Home() {
	return (
		<>
			<Head>
				<title>
					ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์
				</title>
				<meta
					name="title"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					name="description"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>

				{/* Image thumbnail */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://intern-assistant.vercel.app/"
				/>
				<meta
					property="og:title"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					property="og:description"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>
				<meta property="og:image" content="/metaimage.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://intern-assistant.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					property="twitter:description"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>
				<meta property="twitter:image" content="/metaimage.png" />
				{/* End thumbnail */}

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon/agreement.png" />
			</Head>

			<main>
				<Maintain />
			</main>
		</>
	)
}
