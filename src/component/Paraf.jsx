import logo from "../assets/imagelogo.png";

export default function Paraf() {
  return (
    <>
      <div className='py-4'>
        <img src={logo} alt='' className='size-40 rounded-full' />
      </div>
      <div className='px-5 text-center'>
        <h1 className='py-3 text-xl font-bold'>Book Scanner</h1>
        <p className='px-10'>
          A simple way to access detailed information about a book is by
          scanning its QR Code.
        </p>
      </div>
    </>
  );
}
