import { BiFilterAlt } from "react-icons/bi";
import { CiExport } from "react-icons/ci";
import { InitialFocus } from "../Modal/modal";


export default function Products() {



  return (
    <div>
      <div className="flex justify-between items-center px-16 py-5 gap-5">
        <p className="font-semibold text-2xl">Products</p>
        <div className="flex gap-9 items-center justify-center">
          <label className="mt-1" htmlFor="number">
            Showing
          </label>
          <select
            className="bg-blue-100 h-8 px-2 rounded-md"
            name="number"
            id="number"
          >
            <option value="">10</option>
            <option value="">9</option>
            <option value="">8</option>
            <option value="">7</option>
            <option value="">6</option>
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
          </select>
          <button className="flex items-center px-5 h-8 rounded-md bg-white shadow-lg">
            <BiFilterAlt />
            Filter
          </button>
          <button className="flex items-center px-5 h-10 rounded-md bg-white shadow-lg">
            <CiExport />
            Export
          </button>
          <InitialFocus/>
        </div>
      </div>
      {/* tabel */}
      <div className="px-16">
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="w-full bg-white text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 text-sm font-semibold">
                  Product Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold">Product ID</th>
                <th className="py-3 px-4 text-sm font-semibold">Price</th>
                <th className="py-3 px-4 text-sm font-semibold">Stock</th>
                <th className="py-3 px-4 text-sm font-semibold">Type</th>
                <th className="py-3 px-4 text-sm font-semibold">Status</th>
                <th className="py-3 px-4 text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-yellow-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-green-400">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-red-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-yellow-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-green-400">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-red-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-yellow-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-green-400">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center gap-2">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">lorem</td>
                <td className="py-3 px-4">
                  <div className="px-3 py-1 w-14 text-xs font-semibold rounded-full text-white bg-red-300">
                    lorem
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 cursor-pointer">⋮</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4 text-gray-600">
          <button className="px-1 py-1 text-sm text-gray-400">Previous</button>
          <div className="flex justify-center items-center gap-2">
            <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">
              1
            </button>
            <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 text-sm rounded bg-blue-500 text-white">
              3
            </button>
            <button className="px-3 py-1 text-sm rounded hover:bg-gray-200">
              4
            </button>
          </div>
          <button className="px-1 py-1 text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
