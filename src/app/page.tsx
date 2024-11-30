import Nav from '../component/nav';
import {CP} from "./competitive-programming/cp.tsx";

const Page = () => {
    return (
        <div className="bg-amber-400 min-h-screen">
            <header>
                <Nav/>
            </header>
            <CP/>
        </div>
    );
};

export default Page;