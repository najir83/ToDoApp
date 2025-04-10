import { useRef, useState, useEffect } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setArr] = useState([]);
  const inputRef = useRef(null);

  const handleDelete = (i) => {
    const newArr = [...todoArr];
    newArr.splice(i, 1);
    setArr(newArr);
    localStorage.setItem("item", JSON.stringify(newArr));
    toast.success("Task deleted.", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  useEffect(() => {
    let item = localStorage.getItem("item");
    if (item) {
      setArr(JSON.parse(item));
    }
  }, []);
  const handleEdit = (i) => {
    const p = todoArr[i];

    const newArr = [...todoArr];

    newArr.splice(i, 1);
    setArr(newArr);
    localStorage.setItem("item", JSON.stringify(newArr));
    setTodo(p);
    inputRef.current?.focus();
  };
  const handleAdd = () => {
    if (todo.length > 3) {
      setArr([...todoArr, todo]);
      localStorage.setItem("item", JSON.stringify([...todoArr, todo]));
      setTodo(() => "");
      toast.success("Task Added..", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.error("Invalid input..", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const handleChange = (e) => {
    setTodo(() => e.target.value);
  };
  return (
    <>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className=" container mx-auto">
        <div className="bg-violet-100 rounded-2xl h-[80vh] p-4 flex flex-col items-center">
          <h1 className="text-center font-bold text-2xl">
            iTask - Your Task Planner
          </h1>
          <div className="todo-add mt-10 mb-10 relative flex flex-row w-[30vw] items-center">
            <input spellCheck={false}
              ref={inputRef}
              value={todo}
              onChange={handleChange}
              placeholder="Enter your todos"
              type="text"
              className="outline-0 bg-white p-3 rounded-2xl mx-4 w-full"
            />
            <button
              onClick={handleAdd}
              className="absolute bg-gray-700 hover:bg-black text-white w-20 hover:font-bold right-0  h-full rounded-2xl"
            >
              Add
            </button>
          </div>
          <h2 className="font-bold">Your Todos</h2>
          <div>
            {todoArr.length == 0 && <div>There is No todos</div>}
            {todoArr.length != 0 && (
              <div className="relative overflow-x-auto w-[30vw]">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 w-2/3 rounded-s-lg">
                        Task ( {todoArr.length} )
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {todoArr.map((e, index) => {
                      return (
                        <tr className="text-black bg-yellow-100">
                          <td className="p-4 text-lg">
                            {index + 1}. {e}
                          </td>
                          <td className="flex justify-center items-center gap-4 p-4">
                            <button
                              onClick={() => handleEdit(index)}
                              className=" bg-gray-700 hover:bg-black text-white w-20 hover:font-bold h-8  rounded-2xl"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
                              className=" bg-gray-700 hover:bg-black text-white w-20 hover:font-bold  h-8 rounded-2xl"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
