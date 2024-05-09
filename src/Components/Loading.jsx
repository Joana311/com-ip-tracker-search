function Loading() {
  return (
    <div className="flex items-center justify-center h-screen mt-[-4rem]">
      <div className="relative">
        <div className="w-24 h-24 border-t-8 border-b-8 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-b-8 border-blue-500 rounded-full animate-spin"></div>
      </div>
    </div>
  );
}

export default Loading;
