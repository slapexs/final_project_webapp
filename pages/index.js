import Head from "next/head"

// Components
import HeroSection from "../components/HeroSection"

export default function Home() {
	return (
		<>
			<Head>
				<title>
					ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนวจ ด้วยเทตโนโลยีปัญญาประดิษฐ์
				</title>
				<meta
					name="description"
					content="ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนวจ ด้วยเทตโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/houseparty.png" />
			</Head>

			<main>
				<HeroSection />
			</main>
		</>
	)
}
