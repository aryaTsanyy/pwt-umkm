import { useRouter } from "next/router";
import React, { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
    }
  };
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-transparent w-full fixed top-0 left-0 z-50 font-geist-mono">
      <div className="mx-auto py-5 px-10 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className={"flex-shrink-0"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clipPath="url(#clip0_1_847)">
                <path
                  d="M24 22.4V9.6C24 8.71632 23.2837 8 22.4 8H22.3195C21.8952 8 21.4883 8.16872 21.1883 8.46872L8.46872 21.1883C8.16872 21.4883 8 21.8952 8 22.3195V32H0V22.3195C1.7225e-05 19.7734 1.01138 17.3316 2.81172 15.5313L15.5313 2.81172C17.3316 1.01138 19.7734 1.70984e-05 22.3195 0H22.4C27.7019 0 32 4.29806 32 9.6V22.4C32 27.7019 27.7019 32 22.4 32H11.2V24H22.4C23.2837 24 24 23.2837 24 22.4ZM0 0H13.6L5.6 8H0V0Z"
                  fill="#13569C"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_847">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          {/* Right Side - Combined Button Container */}
          <div className="relative">
            {/* Background Container - Always visible */}
            <div className="bg-white rounded-full shadow-lg px-2 py-2 flex items-center gap-2">
              {/* Search Bar - Slides from right */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  isSearchOpen ? "opacity-100 max-w-md" : "opacity-0 max-w-0"
                }`}
              >
                <div className="flex items-center gap-4 px-4">
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap text-sm"
                  >
                    BERANDA
                  </button>
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap text-sm"
                  >
                    UMKM
                  </button>
                  <button
                    type="button"
                    className="text-gray-700 hover:text-gray-900 font-medium whitespace-nowrap text-sm"
                  >
                    PETA
                  </button>
                </div>
              </div>

              {/* Menu Button */}
              <button
                onClick={handleSearchToggle}
                className="p-3 hover:bg-gray-50 rounded-lg transition-colors flex-shrink-0"
              >
                <div
                  className={`transition-transform duration-300 ${
                    isSearchOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {isSearchOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M14.781 13.7198C14.8507 13.7895 14.906 13.8722 14.9437 13.9632C14.9814 14.0543 15.0008 14.1519 15.0008 14.2504C15.0008 14.349 14.9814 14.4465 14.9437 14.5376C14.906 14.6286 14.8507 14.7114 14.781 14.781C14.7114 14.8507 14.6286 14.906 14.5376 14.9437C14.4465 14.9814 14.349 15.0008 14.2504 15.0008C14.1519 15.0008 14.0543 14.9814 13.9632 14.9437C13.8722 14.906 13.7895 14.8507 13.7198 14.781L7.50042 8.56073L1.28104 14.781C1.14031 14.9218 0.94944 15.0008 0.750417 15.0008C0.551394 15.0008 0.360523 14.9218 0.219792 14.781C0.0790615 14.6403 3.92322e-09 14.4494 0 14.2504C-3.92322e-09 14.0514 0.0790615 13.8605 0.219792 13.7198L6.4401 7.50042L0.219792 1.28104C0.0790615 1.14031 0 0.94944 0 0.750417C0 0.551394 0.0790615 0.360523 0.219792 0.219792C0.360523 0.0790615 0.551394 0 0.750417 0C0.94944 0 1.14031 0.0790615 1.28104 0.219792L7.50042 6.4401L13.7198 0.219792C13.8605 0.0790615 14.0514 -3.92322e-09 14.2504 0C14.4494 3.92322e-09 14.6403 0.0790615 14.781 0.219792C14.9218 0.360523 15.0008 0.551394 15.0008 0.750417C15.0008 0.94944 14.9218 1.14031 14.781 1.28104L8.56073 7.50042L14.781 13.7198Z"
                        fill="#081F36"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                    >
                      <path
                        d="M18 6.75C18 6.94891 17.921 7.13968 17.7803 7.28033C17.6397 7.42098 17.4489 7.5 17.25 7.5H0.75C0.551088 7.5 0.360322 7.42098 0.21967 7.28033C0.0790178 7.13968 0 6.94891 0 6.75C0 6.55109 0.0790178 6.36032 0.21967 6.21967C0.360322 6.07902 0.551088 6 0.75 6H17.25C17.4489 6 17.6397 6.07902 17.7803 6.21967C17.921 6.36032 18 6.55109 18 6.75ZM0.75 1.5H17.25C17.4489 1.5 17.6397 1.42098 17.7803 1.28033C17.921 1.13968 18 0.948912 18 0.75C18 0.551088 17.921 0.360322 17.7803 0.21967C17.6397 0.0790178 17.4489 0 17.25 0H0.75C0.551088 0 0.360322 0.0790178 0.21967 0.21967C0.0790178 0.360322 0 0.551088 0 0.75C0 0.948912 0.0790178 1.13968 0.21967 1.28033C0.360322 1.42098 0.551088 1.5 0.75 1.5ZM17.25 12H0.75C0.551088 12 0.360322 12.079 0.21967 12.2197C0.0790178 12.3603 0 12.5511 0 12.75C0 12.9489 0.0790178 13.1397 0.21967 13.2803C0.360322 13.421 0.551088 13.5 0.75 13.5H17.25C17.4489 13.5 17.6397 13.421 17.7803 13.2803C17.921 13.1397 18 12.9489 18 12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12Z"
                        fill="#19395F"
                      />
                    </svg>
                  )}
                </div>
              </button>

              {/* Search Form */}

              <div
                onClick={handleSearchToggle}
                className={`primary-button rounded-full w-auto transition-all duration-500 ease-in-out flex-shrink-0 hidden sm:flex items-center ${
                  isSearchOpen ? "px-8 py-3.5" : "px-8 py-3.5"
                } px-4 py-3 appearance-none focus:outline-none`}
              >
                {isSearchOpen ? (
                  <form
                    onSubmit={handleSearch}
                    className="w-full search-bar flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M16.3469 15.1531L13.0078 11.8125C14.009 10.5079 14.4764 8.87121 14.3153 7.23458C14.1541 5.59795 13.3765 4.08389 12.14 2.99955C10.9036 1.9152 9.30104 1.34177 7.65738 1.39556C6.01372 1.44935 4.45205 2.12635 3.28919 3.28922C2.12632 4.45209 1.44932 6.01375 1.39553 7.65741C1.34174 9.30107 1.91517 10.9037 2.99952 12.1401C4.08386 13.3765 5.59792 14.1541 7.23455 14.3153C8.87118 14.4764 10.5078 14.009 11.8125 13.0078L15.1544 16.3505C15.2329 16.429 15.3261 16.4912 15.4287 16.5337C15.5312 16.5762 15.6411 16.5981 15.7521 16.5981C15.8631 16.5981 15.973 16.5762 16.0756 16.5337C16.1781 16.4912 16.2713 16.429 16.3498 16.3505C16.4282 16.272 16.4905 16.1788 16.533 16.0763C16.5755 15.9737 16.5973 15.8638 16.5973 15.7528C16.5973 15.6418 16.5755 15.5319 16.533 15.4294C16.4905 15.3268 16.4282 15.2337 16.3498 15.1552L16.3469 15.1531ZM3.09375 7.87503C3.09375 6.92938 3.37416 6.00498 3.89953 5.21871C4.4249 4.43243 5.17163 3.81961 6.04529 3.45773C6.91895 3.09585 7.8803 3.00116 8.80777 3.18565C9.73524 3.37013 10.5872 3.8255 11.2558 4.49417C11.9245 5.16284 12.3799 6.01478 12.5644 6.94225C12.7489 7.86972 12.6542 8.83107 12.2923 9.70473C11.9304 10.5784 11.3176 11.3251 10.5313 11.8505C9.74504 12.3759 8.82064 12.6563 7.875 12.6563C6.60733 12.655 5.39196 12.1508 4.49558 11.2544C3.5992 10.3581 3.09505 9.14269 3.09375 7.87503Z"
                        fill="white"
                      />
                    </svg>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Cari UMKM...."
                      className="bg-transparent text-white placeholder-white/70 focus:outline-none w-full"
                      autoFocus
                    />
                  </form>
                ) : (
                  <div className="flex">
                    <span
                      className={`font-bold text-white tracking-wide transition-opacity duration-300 ease-in-out ${
                        isSearchOpen ? "opacity-100" : "opacity-100"
                      }`}
                    >
                      SEARCH
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
