export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-slate-800 text-slate-400 font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row md:justify-between gap-8 md:gap-4 items-start">
        
        {/* LOGO (À gauche) */}
        <div className="flex items-center cursor-pointer text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="20 22 465 150"
            fill="none"
            className="h-10 w-auto text-current object-contain"
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
              stroke="currentColor"
              strokeWidth="18"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M425.127 101.205L474.505 101.205"
              stroke="currentColor"
              strokeWidth="18"
              strokeMiterlimit="10"
          />
            <path
              d="M422.7 113.213C429.659 113.213 435.3 107.566 435.3 100.601C435.3 93.6348 429.659 87.988 422.7 87.988C415.741 87.988 410.1 93.6348 410.1 100.601C410.1 107.566 415.741 113.213 422.7 113.213Z"
              fill="black"
              stroke="currentColor"
              strokeWidth="9"
              strokeMiterlimit="10"
            />
            <path
              d="M138.6 139.039C145.559 139.039 151.2 133.392 151.2 126.426C151.2 119.461 145.559 113.814 138.6 113.814C131.641 113.814 126 119.461 126 126.426C126 133.392 131.641 139.039 138.6 139.039Z"
              fill="black"
              stroke="currentColor"
              strokeWidth="9"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* COLONNES DE LIENS (Centre) */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 md:gap-x-16">
          {/* Products */}
          <div className="space-y-2">
            <h4 className="font-bold text-white tracking-wide">Projects</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Project 1</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project 3</a></li>
            </ul>
          </div>

          {/* Solutions */}
          {/* <div className="space-y-2">
            <h4 className="font-bold text-white tracking-wide">Solutions</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white transition-colors">Solution 1</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solution 2</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Solution 3</a></li>
            </ul>
          </div> */}

          {/* Blog */}
          {/* <div>
            <a href="#" className="font-bold text-white tracking-wide hover:text-slate-200 transition-colors">
              Blog
            </a>
          </div> */}

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="font-bold text-white tracking-wide">Contact</h4>
            <ul className="space-y-1 text-slate-400 font-mono">
              <li>
                <a href="mailto:outerspacetech@gmail.com" className="hover:text-white transition-colors">
                  outerspacetech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+33660554359" className="hover:text-white transition-colors">
                  +33 660554359
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* RÉSEAUX SOCIAUX (À droite) */}

      </div>
    </footer>
  );
}