import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary mb-4"></div>
    <p className="text-lg text-gray-600">Loading backend...</p>
  </div>
);

export default Loader;
