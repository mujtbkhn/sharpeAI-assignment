import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
          <div className="flex justify-center gap-10 px-10 pt-3 pb-3 mx-auto text-xl font-semibold bg-gray-100 w-[450px] text-black rounded-3xl">
        <Link to={"/"}>
          {" "}
          <h3 className="px-5 py-2 rounded-xl hover:bg-gray-200">Home</h3>
        </Link>
        <Link to={"/transaction"}>
          {" "}
          <h3 className="px-5 py-2 rounded-xl hover:bg-gray-200">Transaction</h3>
        </Link>
        <Link to={"/data"}>
          {" "}
          <h3 className="px-5 py-2 rounded-xl hover:bg-gray-200">Data</h3>
        </Link>
      </div>
        </>
    )
}
export default Navbar