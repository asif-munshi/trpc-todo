export default function Loading() {
  return (
    <div className="flex h-[calc(100vh-3rem)] items-center justify-center">
      <div className="inline-flex items-center bg-background px-4 py-2 text-2xl font-semibold leading-6 text-white shadow transition duration-150 ease-in-out">
        <svg
          className="-ml-1 mr-3 h-12 w-12 animate-spin text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Loading...
      </div>
    </div>
  );
}
