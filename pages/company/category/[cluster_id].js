import Head from "next/head"

// Components
import ViewCompany from "../../../components/ViewCompany"
const clusters = [
	"Data",
	"Other",
	"Online marketing",
	"Software",
	"Hardware",
	"Network",
	"IT",
]

export async function getServerSideProps(context) {
	const { cluster_id } = context.query
	const res = await fetch(
		`https://intern-assistant.vercel.app/api/getcompany?cluster=${cluster_id}`
	)
	const data = await res.json()
	return { props: { companies: data.data, cluster_id } }
}

const CompanyDetail = ({ companies, cluster_id }) => {
	return (
		<>
			<Head>
				<title>สถานประกอบการหมวดหมู่ | {clusters[cluster_id]}</title>
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

			<ViewCompany name={clusters[cluster_id]} companies={companies} />
		</>
	)
}

export default CompanyDetail
