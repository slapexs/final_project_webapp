import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
  const url = "https://intern-assistant.vercel.app/api/getallcompany";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: { companies: data.data },
  };
}

const AllCompanies = ({ companies }) => {
  return (
    <>
      <Head>
        <title>สถานประกอบการทั้งหมด</title>
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

      <div className="py-10 md:py-20 flex justify-center">
        <div className="w-3/4">
          <h1 className="text-3xl text-center font-semibold">
            สถานประกอบการทั้งหมด
          </h1>

          <ul>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companies.map((elem, index) => (
                <Link
                  href={`/company/${elem["company_id"]}`}
                  key={index}
                  target="_blank"
                >
                  <li className="rounded border border-gray-300 p-4 shadow-sm hover:shadow-lg hover:border-purple-400">
                    {elem.th_company_name}
                    <p className="text-gray-400">
                      <small>{elem.eng_company_name}</small>
                    </p>
                  </li>
                </Link>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllCompanies;
