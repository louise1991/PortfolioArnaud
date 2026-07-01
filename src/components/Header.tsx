import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Header() {
  const baseStyle =
    "transition-all duration-200 px-4 py-2 rounded-md text-sm font-epilogue font-medium tracking-tight";

  const activeStyle = "bg-[#9054D2] text-black font-bold shadow-md";
  const inactiveStyle =
    "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50";
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-600 bg-black">
      <div className="container mx-auto flex h-22 max-w-7xl items-center justify-between px-4 md:px-8">
        {/* LOGO (À gauche) */}
        {/* CONTENEUR DU LOGO (À gauche) */}
        <div className="flex items-center h-full cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            /* 
      CORRECTION CHIRURGICALE :
      - Nouvelle viewBox resserrée au plus près des tracés pour supprimer le vide interne.
      - h-14 : Maintenant qu'il n'y a plus de marge interne, h-14 (56px) offrira un rendu 
        réellement massif et imposant, sans déborder du header.
    */
            viewBox="20 22 465 150"
            fill="none"
            className="h-14 w-auto my-auto text-foreground object-contain"
          >
            <path
              d="M145.8 126.426H366.3L392.4 101.802H423.9"
              stroke="#D5D3D3"
              strokeOpacity="0.6"
              strokeWidth="18"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M137.7 125.826V76.5766C137.7 57.3574 122.1 41.7418 102.9 41.7418H64.8C45.6 41.7418 29.7 56.7568 29.7 75.976V126.426C29.7 145.646 45.6 160.661 64.8 160.661H102.9H243.6C254.1 160.661 262.5 152.252 262.5 141.742V120.12C262.5 109.61 254.1 101.201 243.6 101.201H187.5C177 101.201 168.6 92.7928 168.6 82.2823V60.961C168.6 50.4505 177 42.0421 187.5 42.0421H302.7C304.5 42.0421 306 43.5436 306 45.3454V151.351C306 156.456 310.2 160.961 315.6 160.961H324.6C329.7 160.961 334.2 156.757 334.2 151.351V45.0451C334.2 43.2433 335.7 41.7418 337.5 41.7418H430.2H476.7"
              stroke="white"
              strokeWidth="18"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M425.127 101.205L474.505 101.205"
              stroke="white"
              strokeWidth="18"
              strokeMiterlimit="10"
            />
            <path
              d="M422.7 113.213C429.659 113.213 435.3 107.566 435.3 100.601C435.3 93.6348 429.659 87.988 422.7 87.988C415.741 87.988 410.1 93.6348 410.1 100.601C410.1 107.566 415.741 113.213 422.7 113.213Z"
              fill="black"
              stroke="#FDFDFD"
              strokeWidth="9"
              strokeMiterlimit="10"
            />
            <path
              d="M138.6 139.039C145.559 139.039 151.2 133.392 151.2 126.426C151.2 119.461 145.559 113.814 138.6 113.814C131.641 113.814 126 119.461 126 126.426C126 133.392 131.641 139.039 138.6 139.039Z"
              fill="black"
              stroke="white"
              strokeWidth="9"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* NAVIGATION TABS (À droite) */}
        <nav className="flex items-center gap-1 text-md font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Projects
          </NavLink>
          {/* <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Contact
          </NavLink> */}

          {/* <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
            }
          >
            Blog
          </NavLink> */}
        </nav>
      </div>
    </header>
  );
}
