import Paraf from "../component/Paraf";
import Button from "../component/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='flex flex-col items-center justify-center bg-[#FFF7F6] h-screen w-full gap-4'>
      <Paraf />
      <Link to='/new-page'>
        <Button />
      </Link>
    </div>
  );
}

export default Home;
