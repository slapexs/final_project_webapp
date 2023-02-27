import Link from "next/link"
import Head from "next/head"

const ServerError = () => {
	return (
		<>
			<Head>
				<title>
					500 | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ
					ด้วยเทคโนโลยีปัญญาประดิษฐ์
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
			<div className="w-full py-24 sm:py-20 flex justify-center h-screen">
				<div className="text-center h-full flex-col justify-between flex">
					<div>
						<h1 className="text-2xl text-gray-400">Internal server error.</h1>
					</div>
					<div>
						<h1 className="text-9xl font-bold">500</h1>
					</div>
					<div>
						<h1>
							<Link href={"/"} className="text-blue-400">
								กลับหน้าแรก
							</Link>
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default ServerError
