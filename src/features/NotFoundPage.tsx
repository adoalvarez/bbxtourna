import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="justify-center items-center w-full flex flex-col mt-20">
      <label className="uppercase text-9xl text-red-500 font-extrabold">Page not found</label>   
      <Link to={'/'} className=""> Return to home </Link>
    </div>
  )
}

export default NotFoundPage;