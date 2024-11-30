import Logo from '/logo-arkavidia.webp';

const Nav = () => {
    return (
        <div className="nav fixed z-10 bg-white w-4/5 left-0 right-0 filter pl-12 pr-8 lg:px-16 mx-auto mt-4 py-4 h-20 lg:h-24 items-center border-solid border-2 border-black rounded-full flex">
            <div className="nav-left">
                <a href="/">
                    <img src={Logo} alt="Arkavidia" className="w-auto h-12"/>
                </a>
            </div>
            <div className="nav-right ml-auto flex flex-row gap-10">
                <a href="/" className="nav-link">Home</a>
                <a href="/events" className="nav-link">Event</a>
                <a href="/contact" className="nav-link">Contact</a>
                <a href="/login" className="nav-link">Competition</a>
            </div>
        </div>
    );
};

export default Nav;