import Link from "next/link"
import Image from "next/image"

const Footer = () => {
	return (
		<>
			<hr className="mt-5" />
			<div className="gap-y-5 w-full py-10 flex flex-col justify-center items-center md:flex-row md:justify-around md:py-20">
				<div className="">
					<div className="flex items-center">
						<Image
							src="/icon/agreement.png"
							alt="favicono"
							width={48}
							height={48}
							className="mr-2"
						/>
						<h1 className="font-semibold">Intern assistant</h1>
					</div>
					<div className="text-gray-500">
						<small>
							icon by{" "}
							<Link target="_blank" href="https://icons8.com">
								Icons8
							</Link>
						</small>
					</div>
					<div className="text-gray-500">
						<small>2023 copyright @Computer Science RMUTL and AIAT</small>
					</div>
				</div>

				<div className="">
					<h1 className="font-semibold uppercase">Services</h1>
					<div className="flex gap-x-4 mt-3">
						<Link
							href="https://iamonze.tech/docs"
							target="_blank"
							className="hover:text-purple-500"
						>
							<p>API</p>
						</Link>
						<Link href="/about" className="hover:text-purple-500">
							<p>About</p>
						</Link>
						<Link href="#" target="_blank" className="hover:text-purple-500">
							<p>Article</p>
						</Link>
						<Link href="#" target="_blank" className="hover:text-purple-500">
							<p>Github</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
