import Image from "next/image"
import Link from "next/link"

const themeColor = "#6C63FF"

const Maintain = () => {
	return (
		<main className="h-screen w-full flex items-center justify-center">
			<div className="lg:w-5/12 w-9/12 flex items-center flex-col space-y-10">
				<Image
					src="/undraw_maintenance_re_59vn.svg"
					alt="Maintain image"
					width={945}
					height={583}
				/>
				<div className="text-center">
					<h1
						className="text-3xl font-semibold tracking-wider"
						style={{ color: themeColor }}
					>
						เว็บไซต์กำลังปรับปรุง
					</h1>
					<p className="font-thin text-sm">
						ติดตามความเคลื่อนไหวได้ที่{" "}
						<Link
							href={"https://github.com/slapexs/final_project_webapp"}
							style={{ color: themeColor }}
						>
							Github
						</Link>
					</p>
				</div>
			</div>
		</main>
	)
}

export default Maintain
