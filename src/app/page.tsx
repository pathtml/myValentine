import YesNoButtons from "./components/yesnobutton";
export default function Home() {

  return (
    <main className="flex items-center justify-center min-h-screen">
      {/* <div className="grid grid-flow-row">
        <div>
          <h1 className="text-6xl font-bold mb-4">Will You be My Valentine ?</h1>
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button id="yes-button" className="py-2 px-4 rounded-full bg-blue-500 text-white font-bold hover:bg-blue-700 focus:outline-none transition duration-300">Yes</button>
          <button id="no-button" className="py-2 px-4 rounded-full bg-gray-500 text-white font-bold hover:bg-gray-700 focus:outline-none transition duration-300">No</button>
        </div>
      </div> */}
      <YesNoButtons></YesNoButtons>
    </main>
  );
}
