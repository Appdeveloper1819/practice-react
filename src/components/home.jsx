import React from "react";

const Sidebar = ({
  isOpen,
  toggleSidebar,
  options,
  addOption,
  removeOption,
  updateOption,
  title,
  setTitle,
  fieldUsage,
  setFieldUsage,
  onCreate,
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg overflow-y-auto z-50 space-y-4 py-4 px-2  transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Create Custom Field</h2>
          <p>Craft your own customised fields below</p>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-600 hover:text-gray-800 text-lg">
          <i className="material-symbols-rounded">close</i>
        </button>
      </div>
      <hr />

      <div>
        <label className="block text-sm font-medium">Field type</label>
        <select className="mt-1 block w-full border rounded p-2">
          <option>Checkbox Dropdown (Multi Choice)</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border rounded p-2"
          placeholder="Select your iPhone"/>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Set options below
        </label>
        {options.map((opt, idx) => (
          <div key={idx} className="mb-2">
            <div className="relative">
              <i className="material-symbols-rounded absolute left-2 top-1/2 -translate-y-1/2 text-gray-700 text-lg">
                drag_indicator
              </i>
              <input
                value={opt}
                onChange={(e) => updateOption(e.target.value, idx)}
                className="w-full pl-8 pr-8 border rounded p-2"/>
              <i className="material-symbols-rounded absolute right-2 top-1/2 -translate-y-1/2 text-red-500 cursor-pointer"
                onClick={() => removeOption(idx)}>
                close
              </i>
            </div>
          </div>
        ))}
        <button onClick={addOption} className="text-blue-500 text-sm mt-2">
          + Add Option
        </button>
      </div>
      <label className="block text-sm font-medium">Field Usage</label>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={fieldUsage}
          onChange={() => setFieldUsage(!fieldUsage)}
        />
        <label>Add custom field in appointment creation form</label>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Field visibility
        </label>
        <input
          type="text"
          placeholder="Offices"
          className="w-full pl-4 border rounded p-2 mb-2"
        />
        <input
          type="text"
          placeholder="Teams"
          className="w-full pl-4 border rounded p-2"
        />
      </div>

      <div className="flex justify-end gap-2">
        <button className="px-4 py-2 rounded border" onClick={toggleSidebar}>
          Cancel
        </button>
        <button
          className="px-4 py-2 rounded bg-blue-600 text-white"
          onClick={onCreate}>
          Create Field
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
