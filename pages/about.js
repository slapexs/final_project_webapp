import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

const About = () => {
	return (
		<>
			<Head>
				<title>
					เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ
					ด้วยเทคโนโลยีปัญญาประดิษฐ์
				</title>
				<meta
					name="title"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					name="description"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>

				{/* Image thumbnail */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://intern-assistant.vercel.app/"
				/>
				<meta
					property="og:title"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					property="og:description"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>
				<meta property="og:image" content="/metaimage.png" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://intern-assistant.vercel.app/"
				/>
				<meta
					property="twitter:title"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์"
				/>
				<meta
					property="twitter:description"
					content="เกี่ยวกับ | ระบบแนะนำบริษัทสำหรับฝึกงานตามความสนใจ ด้วยเทคโนโลยีปัญญาประดิษฐ์ | Recommended System of Internship's Company"
				/>
				<meta property="twitter:image" content="/metaimage.png" />
				{/* End thumbnail */}

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/handshake.png" />
			</Head>
			<div className="w-full flex justify-center py-24 sm:py-20">
				<div className="w-3/4">
					<h1 className="text-4xl font-bold">เกี่ยวกับ</h1>
					<div className="my-5">
						<p>
							Concept
							ของตัวโครงงานนี้คือการนำเอาข้อมูลรูปแบบธุรกิจของบริษัทต่างๆ
							ที่มีอยู่ในฐานข้อมูลตอนนี้ประมาณ 1600+ บริษัทมาทำการจัดกลุ่มโดยใช้
							AI (K-Means clustering)
							จากนั้นนำเอาความสนใจรูปแบบของธุรกิจของบริษัทที่อยากฝึกงาน
							ของนักศึกษามาประมวลผลเพื่อหาว่าความสนใจที่นักศึกษาระบุมานั้นตรงกับบริษัทในหมวดหมู่ไหนในฐานข้อมูลของเรา
							จากนั้นก็แสดงผลรายชื่อบริษัทแก่นักศึกษา
						</p>

						<p className="mt-2">
							<h1 className="font-bold">ยกตัวอย่างเช่น</h1>
							<span className="text-orange-700">ความสนใจ</span> :
							อยากฝึกงานในบริษัทที่พัฒนาโปรแกรมบนคอมพิวเตอร์
							หรือทำเกี่ยวกับการทำแอปพลิเคชันบนมือถือ
							<br />
							<span className="text-green-700">ผลลัพธ์</span> :
							รายชื่อบริษัทในกลุ่มของ Software
						</p>
					</div>

					<div className="my-5">
						<h1 className="text-2xl font-bold">รูปแบบการทำงาน</h1>
						<div className="my-5">
							<p>กระบวนการการจัดกลุ่มข้อมูล</p>
							<Image
								src={"/clustering_flow.jpeg"}
								alt="clustering flow"
								width={4163}
								height={867}
							/>
						</div>

						<div className="my-5">
							<p>กระบวนการการค้นหา</p>
							<Image
								src={"/searching_flow.png"}
								alt="searching flow"
								width={1920}
								height={1080}
							/>
						</div>
					</div>

					<div className="my-5">
						<h1 className="text-2xl font-bold">แบบประเมินความพึงพอใจ</h1>
						<Link
							href="https://forms.gle/YUU8GgvP4VfDLFyL6"
							target="_blank"
							className="text-sky-400"
						>
							ทำแบบประเมิน (Google form)
						</Link>
					</div>

					<div className="my-5">
						<h1 className="text-2xl font-bold">Github</h1>
						<ul className="list-disc">
							<li>
								<Link
									href={"https://github.com/slapexs/final_project"}
									target="_blank"
									className="text-sky-400"
								>
									Source code การจัดกลุ่มข้อมูลและ Web API
								</Link>
							</li>
							<li>
								<Link
									href={"https://github.com/slapexs/final_project_webapp"}
									target="_blank"
									className="text-sky-400"
								>
									Web application
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
