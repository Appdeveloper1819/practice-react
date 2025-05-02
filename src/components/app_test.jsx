import { useState } from "react";
import Sidebar from "./home";
import Popup from "./popup";


const AppTest = () => {
  const [options, setOptions] = useState([
    "iPhone 15",
    "iPhone 14",
    "iPhone 13",
    "iPhone 12",
    "iPhone 11",
  ]);
  const [title, setTitle] = useState("");
  const [fieldUsage, setFieldUsage] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const addOption = () => setOptions(prev => [...prev, ""]);
  const removeOption = index => setOptions(prev => prev.filter((_, i) => i !== index));
  const updateOption = (value, index) =>
    setOptions(prev => prev.map((opt, i) => (i === index ? value : opt)));

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

const handlePopupClose = () => {
  setIsPopup(false);
  setIsSidebarOpen(false);
};

  return (
    <>
      <div className="flex items-center justify-center mt-6">
        <button className="px-4 py-2 rounded border" onClick={toggleSidebar}>
          Open Sidebar
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      {isSidebarOpen &&(
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        options={options}
        addOption={addOption}
        removeOption={removeOption}
        updateOption={updateOption}
        setTitle={setTitle}
        fieldUsage={fieldUsage}
        setFieldUsage={setFieldUsage}
        onCreate={() => {
          setIsPopup(true);
        }}
      />
    )}

      {isPopup && 
      <Popup onClose={() => handlePopupClose(false)} 
      />}
      
    </>
  );
};

export default AppTest;
