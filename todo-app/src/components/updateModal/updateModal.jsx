import React, { useState } from 'react';

const UpdateModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl 2xl:max-w-screen-2xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 flex flex-col justify-center lg:h-screen">
        {/* Starts component */}
        <div className="flex justify-center">
          {/* Trigger */}
          <span onClick={() => setOpen(true)}>
            <button
              type="button"
              className="flex items-center 2xl:text-xl 2xl:h-12 justify-center h-10 px-4 py-2 text-base  text-white transition-all duration-200 rounded-full bg-gradient-to-b bg-green-500 hover:to-indigo-700 shadow-button shadow-blue-600/50 focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
            >
             Update
            </button>
          </span>
          {/* Modal */}
          {open && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 w-screen overflow-y-hidden"
            >
              {/* Overlay */}
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-50"
                onClick={() => setOpen(false)}
              ></div>
              {/* Panel */}
              <div className="relative flex min-h-screen items-center justify-center p-4">
                <div
                  className="relative w-full max-w-sm overflow-y-auto shadow-2xl bg-white ring-1 ring-gray-200 rounded-3xl p-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <div className="flex flex-col text-center">
                      <p className="text-lg font-medium text-gray-500 lg:text-xl">
                        Log in to your account
                      </p>
                    </div>
                    <form className="mt-12">
                      <input name="hidden" autoComplete="false" style={{ display: 'none' }} />
                      <input name="_redirect" type="hidden" value="#" />
                      <div className="space-y-3">
                        <div>
                          <label htmlFor="name" className="block mb-3 text-sm font-medium text-black sr-only">
                            First name
                          </label>
                          <input
                            id="name"
                            name="text"
                            type="text"
                            placeholder="Your name"
                            aria-placeholder="Your name"
                            className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset text-xs"
                          />
                        </div>
                        <div className="col-span-full">
                          <label htmlFor="password" className="block mb-3 text-sm font-medium text-black sr-only">
                            Password
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Type password here..."
                            aria-placeholder="Type password here..."
                            className="block w-full h-12 px-4 py-3 placeholder-gray-500 bg-gray-100 border-0 rounded-lg appearance-none text-blue-500 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 focus:ring-inset text-xs"
                          />
                        </div>
                        <div className="flex items-center justify-between py-4">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              type="checkbox"
                              name="remember-me"
                              className="w-4 h-4 text-indigo-600 bg-vulcan-900 rounded focus:ring-white focus:border-white"
                            />
                            <label
                              className="block ml-2 text-sm font-medium leading-tight text-gray-500"
                              htmlFor="remember-me"
                            >
                              Remember me
                            </label>
                          </div>
                          <div className="text-sm">
                            <a className="font-medium text-gray-500 hover:text-indigo-500" href="#">
                              Forgot your password?
                            </a>
                          </div>
                        </div>
                        <div className="col-span-full">
                          <a
                            className="flex items-center justify-center h-10 px-4 py-2 text-base font-semibold text-white transition-all duration-200 rounded-full bg-gradient-to-b from-blue-500 to-indigo-600 hover:to-indigo-700 shadow-button shadow-blue-600/50 focus:ring-2 focus:ring-blue-950 focus:ring-offset-2 ring-offset-gray-200 hover:shadow-none"
                            href="#"
                          >
                            Log in
                          </a>
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="mx-auto text-sm font-medium leading-tight text-center text-black">
                          Not a have a password yet?{' '}
                          <a className="ml-3 text-indigo-600 hover:text-black" href="/signup">
                            Sign up now
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ends component */}
        {/* Starts links to tutorial */}
        
        {/* Ends links to tutorial */}
      </div>
    </section>
  );
};

export default UpdateModal;
