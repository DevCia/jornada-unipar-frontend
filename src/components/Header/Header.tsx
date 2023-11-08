import { Link } from 'react-router-dom';
import { HomeIcon, PlusIcon } from '@heroicons/react/20/solid';
function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-around p-6 lg:px-8"
        aria-label="Global"
      >
        <Link
          to="/"
          className=" flex justify-start items-center rounded-lg px-3 py-2  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          <HomeIcon className="pr-2 h-6 w-8 flex" aria-hidden="true" />
          <span className="flex-1">Home</span>
        </Link>
        <a
          href="/contact"
          className="flex justify-start items-center rounded-lg px-3 py-2  text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
        >
          <PlusIcon className="pr-2 h-6 w-8 flex" aria-hidden="true" />
          <span className="flex-1">Novo Contato</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;
