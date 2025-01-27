import React from "react";
import Logo from "../assets/Logo.png"; // Ensure the path to your logo is correct

const Header = ({ children }) => {
  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-purple-600 text-white">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="h-12 w-16" />
          <div className="text-xl font-semibold font-mono">Japan Railways</div>
        </div>
        <div className="flex items-center space-x-4">
          {/* User Profile Button */}
          <button className="bg-white hover:bg-gray-300 p-2 rounded-full w-24">
            <span className="material-icons text-black font-mono">User</span>{" "}
            {/* Material icon for profile */}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default Header;
