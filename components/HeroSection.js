import { useState } from "react"
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline"

import ResultCompany from "./ResultCompany"
import AdviceCompany from "./AdviceCompany"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

function displayAlert(title, icon, isError) {
	const MySwal = withReactContent(Swal)

	MySwal.fire({
		title: title,
		timer: 2000,
		icon: icon,
		timerProgressBar: true,
		showConfirmButton: false,
		showCancelButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
	}).then(() => isError && location.reload())
}

export default function Searchbox() {
	const [searchKeyword, setSearchKeyword] = useState("")
	const [searching, setSearching] = useState(false)
	const [resultClusterId, setResultClusterId] = useState(null)
	const [resultCompany, setResultCompany] = useState([])
	const [btnDisabled, setbtnDisabled] = useState(true)

	function handleKeyword(e) {
		setSearchKeyword(e.target.value)
		let temp_searchKeyword = searchKeyword.replaceAll(" ", "")
		if (temp_searchKeyword.length >= 20 && e.target.value != "") {
			setbtnDisabled(false)
		} else {
			setbtnDisabled(true)
		}
	}

	async function getCompanyWithCluster(cluster_id) {
		const api_url = `https://intern-assistant.vercel.app/api/getcompany?cluster=${cluster_id}`
		const res = await fetch(api_url)
		const data = await res.json()
		setResultCompany(data.data)
	}

	async function analyzeCluster(e) {
		e.preventDefault()
		setResultClusterId(null)
		const url = "https://iamonze.tech/search"
		setSearching(true)
		const res = await fetch(url, {
			method: "POST",
			body: JSON.stringify({ keyword: searchKeyword }),
			headers: {
				"Content-Type": "application/json",
			},
		})

		const data = await res.json()

		// Alert modal
		if (res.status == 200) {
			displayAlert("ค้นหาสำเร็จ", "success", false)
		} else {
			displayAlert("ผิดพลาด โปรดค้นหาอีกครั้ง", "error", true)
		}
		setSearching(false)
		setResultClusterId(data.cluster)
		// Get all companies in cluster
		getCompanyWithCluster(data.cluster)
		document.querySelector("#search").value = ""
		document.querySelector("#area_search").value = ""
	}

	return (
		<>
			<div className="py-24">
				<div className="mx-auto max-w-7xl px-6 lg:px-6">
					<div className="text-center">
						<h1 className="text-3xl md:text-5xl font-bold">
							ค้นหาสถานประกอบการ
						</h1>
						<p className="mt-2 text-gray-600">
							ระบุรายละเอียดความสนใจที่อยากฝึกงาน
						</p>
					</div>

					<div className="mt-10 flex w-full items-end justify-center">
						<div className="flex-col text-right w-3/4">
							<form action="#" onSubmit={analyzeCluster} method="post">
								<div className="grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-x-4">
									<textarea
										name="area_search"
										id="area_search"
										onChange={handleKeyword}
										disabled={searching}
										minLength={20}
										className="block lg:hidden w-full py-2 px-3 mb-2 rounded-md border border-zinc-500 border-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:bg-zinc-200"
										placeholder="ตัวอย่าง: อยากฝึกงานบริษัทที่ออกแบบและพัฒนาเว็บไซต์ และ แอปพลิเคชัน"
										rows={4}
										required={true}
									/>
									<input
										name="search"
										id="search"
										onChange={handleKeyword}
										disabled={searching}
										minLength={20}
										className="col-span-5 h-full hidden lg:block w-full py-2 px-3 mb-2 rounded-md border border-zinc-500 border-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm disabled:bg-zinc-200"
										placeholder="ตัวอย่าง: อยากฝึกงานบริษัทที่ออกแบบและพัฒนาเว็บไซต์ และ แอปพลิเคชัน"
										autoComplete="off"
										required={true}
									/>

									<button
										className={
											searching
												? "px-4 py-2 w-full md:w-auto rounded-lg text-white bg-purple-400"
												: btnDisabled
												? "px-4 py-2 w-full md:w-auto rounded-lg text-white bg-purple-400"
												: "px-4 py-2 w-full md:w-auto rounded-lg text-white bg-purple-500 hover:bg-purple-600"
										}
										type="submit"
										disabled={btnDisabled}
										onClick={analyzeCluster}
									>
										{searching ? (
											<ArrowPathIcon className="w-5 inline animate-spin" />
										) : (
											<MagnifyingGlassIcon className="w-5 inline" />
										)}

										{searching ? "กำลังค้นหา" : "ค้นหา"}
									</button>
								</div>
							</form>
						</div>
					</div>
					{/* Hint */}
					<div className="w-full flex justify-center">
						<div className="w-3/4">
							<small className=" text-red-400">
								กรุณาระบุความสนใจให้มากกว่า 20
								ตัวอักษรเพื่อให้ได้ข้อมูลที่ตรงที่สุด
							</small>
						</div>
					</div>
				</div>
			</div>

			{/* Result search company */}
			{resultClusterId ? (
				<ResultCompany cluster={resultClusterId} companies={resultCompany} />
			) : (
				<AdviceCompany />
			)}
		</>
	)
}
