import Searchbar from 'components/html/searchbar'
import React from 'react'
import { FiFilter } from 'react-icons/fi'

const FilterCard = () => {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0 ">
          <Searchbar />
        </div>

        <details className="overflow-hidden border border-gray-200 rounded">
          <summary className="flex items-center px-5 py-3 bg-gray-100">
            <FiFilter className="mr-4" />
            <span className="text-sm font-medium">Filters</span>
          </summary>

          <form action="" className="border-t border-gray-200 lg:border-t-0">
            <fieldset>
              <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Type
              </legend>

              <div className="px-5 py-6 space-y-2">
                <div className="flex items-center">
                  <input
                    id="toy"
                    type="checkbox"
                    name="type[toy]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label htmlFor="toy" className="ml-3 text-sm font-medium">
                    Toy
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="game"
                    type="checkbox"
                    name="type[game]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label htmlFor="game" className="ml-3 text-sm font-medium">
                    Game
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    id="outdoor"
                    type="checkbox"
                    name="type[outdoor]"
                    className="w-5 h-5 border-gray-300 rounded"
                  />

                  <label htmlFor="outdoor" className="ml-3 text-sm font-medium">
                    Outdoor
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    className="text-xs text-gray-500 underline"
                  >
                    Reset Type
                  </button>
                </div>
              </div>
            </fieldset>

            <div>
              <fieldset>
                <legend className="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                  Age
                </legend>

                <div className="px-5 py-6 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="3+"
                      type="checkbox"
                      name="age[3+]"
                      className="w-5 h-5 border-gray-300 rounded"
                    />

                    <label htmlFor="3+" className="ml-3 text-sm font-medium">
                      3+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="8+"
                      type="checkbox"
                      name="age[8+]"
                      className="w-5 h-5 border-gray-300 rounded"
                    />

                    <label htmlFor="8+" className="ml-3 text-sm font-medium">
                      8+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="12+"
                      type="checkbox"
                      name="age[12+]"
                      className="w-5 h-5 border-gray-300 rounded"
                    />

                    <label htmlFor="12+" className="ml-3 text-sm font-medium">
                      12+
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="16+"
                      type="checkbox"
                      name="age[16+]"
                      className="w-5 h-5 border-gray-300 rounded"
                    />

                    <label htmlFor="16+" className="ml-3 text-sm font-medium">
                      16+
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      className="text-xs text-gray-500 underline"
                    >
                      Reset Age
                    </button>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="flex justify-between px-5 py-3 border-t border-gray-200">
              <button
                name="reset"
                type="button"
                className="text-xs font-medium text-gray-600 underline rounded"
              >
                Reset All
              </button>

              <button
                name="commit"
                type="button"
                className="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
              >
                Apply Filters
              </button>
            </div>
          </form>
        </details>
      </div>
    </>
  )
}

export default FilterCard
