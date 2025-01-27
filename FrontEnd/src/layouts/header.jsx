import React, { useState, useEffect } from "react";

const Header = ({ children }) => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode or light mode to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-gray-800", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-gray-800", "text-white");
    }
  }, [isDarkMode]);

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-purple-600 text-white">
        <div className="text-xl font-semibold">Japan Railways</div>
        <div className="flex items-center space-x-4">
          {/* User Profile Button */}
          <button className="bg-white hover:bg-gray-300 p-2 rounded-full w-24">
            <span className="material-icons text-black font-mono">User</span>{" "}
            {/* Material icon for profile */}
          </button>
          {/* Dark/Light Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="bg-white hover:bg-gray-300 p-2 rounded-full text-black"
          >
            {isDarkMode ? (
              <span className="material-icons">light_mode</span>
            ) : (
              <span className="material-icons">dark_mode</span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Header;
