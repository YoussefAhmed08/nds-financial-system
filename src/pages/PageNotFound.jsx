import { useMoveBack } from "../hooks/useMoveBack";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-gray-50 flex items-center justify-center p-16 font-montserrat">
      <div className="bg-gray-0 border border-gray-200 rounded-md p-16 text-center flex flex-col items-center">
        <h1>The page you are looking for could not be found 😢</h1>
        <button
          className="h-10 w-32 text-white bg-[#1E2C5F]"
          onClick={moveBack}
          size="large"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
