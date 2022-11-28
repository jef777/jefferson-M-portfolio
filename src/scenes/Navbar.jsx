import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  menuToggled,
  className,
  isMenuToggled = false,
  activeClass,
}) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? `border-b-2 ${activeClass}` : ''
      } ${className} transition duration-500 `}
      href={`#${lowerCasePage}`}
      onClick={() => {
        setSelectedPage(lowerCasePage);
        if (isMenuToggled) {
          menuToggled(false);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const navbarBackground = isTopOfPage ? '' : 'bg-abbey';
  const navbarText = isTopOfPage ? 'text-abbey' : 'text-ebonyClay';
  const menuToggle = isTopOfPage ? 'bg-periwinkle' : 'bg-abbey';
  const desktopMenuActiveNavLink = isTopOfPage
    ? 'border-periwinkle'
    : 'border-ebonyClay';
  const desktopMenuNavLink = isTopOfPage
    ? 'hover:text-periwinkle un-light'
    : ' un-dark';

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className={`${navbarText} text-3xl font-bold font-Poppins`}>JM.</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div
            className={`${navbarText} flex justify-between gap-16 font-opensans text-sm font-semibold`}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className={desktopMenuNavLink}
              activeClass={desktopMenuActiveNavLink}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className={desktopMenuNavLink}
              activeClass={desktopMenuActiveNavLink}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className={desktopMenuNavLink}
              activeClass={desktopMenuActiveNavLink}
            />
            {/* <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className={desktopMenuNavLink}
              activeClass={desktopMenuActiveNavLink}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              className={desktopMenuNavLink}
              activeClass={desktopMenuActiveNavLink}
            />
          </div>
        ) : (
          <button
            className={`${menuToggle} rounded-full p-2`}
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-ebonyClay w-full">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div
              className={`flex flex-col justify-center items-center text-periwinkle gap-10 text-2xl`}
            >
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                menuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
                className={`un-light`}
                activeClass={'border-periwinkle'}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                menuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
                className={`un-light`}
                activeClass={'border-periwinkle'}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                menuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
                className={`un-light`}
                activeClass={'border-periwinkle'}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                menuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
                className={`un-light`}
                activeClass={'border-periwinkle'}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                isMenuToggled={isMenuToggled}
                menuToggled={setIsMenuToggled}
                className={`un-light`}
                activeClass={'border-periwinkle'}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
