import Link from "next/link";

function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Navbar() {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-y-1 px-2">
        <Link
          href={"/"}
          className="transition-all hover:text-neutral-800 flex align-middle relative"
        >
          <h1 className="text-2xl font-medium mr-5">Simão Bentes</h1>
        </Link>
        <ul className="flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
          <li>
            <a
              className="flex items-center transition-all hover:text-blue-500"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:sdgbentes@gmail.com"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">email</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-blue-500"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/sbentes/"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
