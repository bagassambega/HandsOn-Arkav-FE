import Logo from '/logo-arkavidia.webp';

const Nav = () => {
    return (
        <div className="nav flex flex-row justify-between align-middle mx-auto bg-white rounded-full">
            <div className="nav-left">
                <a href="/">
                    <img src={Logo} alt="Arkavidia" className="w-auto h-[35px]"/>
                </a>
            </div>
        </div>
    );
};

export default Nav;