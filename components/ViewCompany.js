import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";

const ViewCompany = ({ ...props }) => {
  const { companies, name } = props;

  return (
    <>
      <div className="py-20 md:py-24 flex justify-center">
        <div className="w-3/4">
          <div className="flex items-center">
            <h1 className="font-semibold text-3xl text-gray-600">
              หมวดหมู่: <span className="capitalize">{name}</span>
            </h1>
          </div>

          <div className="mt-4">
            <ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companies.map((elem, index) => (
                  <Link
                    href={`/company/${elem["company_id"]}`}
                    target="_blank"
                    key={index}
                  >
                    <li className="border border-gray-300 p-2 shadow-sm flex justify-between hover:shadow-lg hover:border-purple-400 rounded">
                      <div>
                        <h1>{elem.th_company_name}</h1>
                        <p className="text-gray-500 text-xs">
                          {elem.short_company}
                        </p>
                      </div>
                      <small className="text-gray-400 flex items-center">
                        <MapPinIcon className="w-3 inline mr-1" />{" "}
                        {elem.province_base}
                      </small>
                    </li>
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCompany;
