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
				<link rel="icon" href="/meeting.png" />
			</Head>
			<div className="w-full flex justify-center py-24 sm:py-20">
				<div className="w-3/4">
					<h1 className="text-4xl font-bold">เกี่ยวกับ</h1>
					<div className="my-5">
						<p>
							โครงงานการพัฒนาเว็บแอปพลิเคชันเพื่อแนะนำบริษัทสำหรับหาสถานประกอบการที่ฝึกงานที่เหมาะสมและเป็นสถานประกอบการที่นักศึกษามีความสนใจในรูปแบบธุรกิจของสถานประกอบการนั้น
							เพื่อช่วยอำนวยความสะดวกแก่นักศึกษามหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา
							น่าน ในการค้นหาสถานประกอบการสำหรับออกฝึกงาน
							โดยการใช้วิธีประมวลผลภาษาธรรมชาติเข้ามาช่วยจัดกลุ่มสถานประกอบการและเสนอรายชื่อสถานประกอบการที่เหมาะสมแก่นักศึกษาผ่านทางเว็บแอปพลิเคชัน
						</p>
					</div>

					<div className="my-5">
						<h1 className="text-2xl font-bold">แนวคิด</h1>
						<p>
							เนื่องจากมีข้อมูลสถานประกอบการณ์อยู่จำนวนนึง
							จึงนำข้อมูลเหล่านั้นมาประมวลผลเพื่อจัดกลุ่มข้อมูลโดยการทำ Text
							clustering
						</p>

						<Image
							src="/7_cluster.png"
							alt="clustering image"
							width={1200}
							height={600}
							draggable="false"
							className="my-2"
						/>

						<p>
							จากนั้นสร้าง API
							สำหรับการนำรายละเอียดความสนใจของนักศึกษาประมวลผลเพื่อที่จะเลือกว่าตวรจะแนะนำบริษัทที่อยู่ในกลุ่มไหนดี
							เมื่อได้รายละเอียดมาแล้วก็นำมาวิเคราะห์และหาความคล้ายคลึงกันด้วยเทคนิค
							Cosine similarity
						</p>
						<Image
							src={"/demoapi.png"}
							alt="demoapi"
							width={1919}
							height={616}
							draggable="false"
							className="my-2"
						/>

						<p>
							จากตัวอย่างจะเห็นว่ากลุ่มที่มีความคล้ายกับรายละเอียดที่ค้นหามากที่สุดคือกลุ่มที่
							5
							ก็จะนำข้อมูลบริษัทที่ได้ทำการจัดกลุ่มไว้และบันทึกอยู่ในฐานข้อมูลที่อยู่ในกลุ่มที่
							5 มาแสดงผลให้นักศึกษา
						</p>
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
