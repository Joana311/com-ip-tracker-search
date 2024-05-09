function Loading() {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="w-10 h-6 mr-3 animate-spin" viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
}

export default Loading;
