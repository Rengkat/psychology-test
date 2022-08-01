import { useSelector, useDispatch } from "react-redux";
import { toggleShowMore } from "../components/app/features/testSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs, showMore } = useSelector((store) => store.question);
  console.log(blogs);
  return (
    <div className="w-[90%] md:w-[60%] mx-auto md:pt-20 md:mb-32">
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className="my-3">
            <h1 className="text-xl font-bold capitalize pt-2 md:text-5xl">
              {blog.title}
            </h1>
            <p className="pb-4">{blog.date}</p>
            <img
              src={blog.image}
              alt="image"
              className="md:w-full mx-auto md:h-[32rem] object-cover"
            />
            <p className=" text-justify md:text-xl py-5 ">
              {blog.togle ? blog.words.substring(0, 200) : blog.words}
              <button
                className="text-blue-700 font-semibold pl-2"
                onClick={() => dispatch(toggleShowMore(blog))}>
                {blog.togle ? "Read more" : "Read less"}
              </button>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
