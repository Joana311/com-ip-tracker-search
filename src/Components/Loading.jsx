function Loading() {
  return (
    <div className="flex items-center justify-center">
      <button type="button" className="px-12 py-2 mt-10 bg-slate-200" disabled>
        <svg className="h-8 mr-3 animate-spin" viewBox="0 0 24 24"></svg>
        Processing...
      </button>
    </div>
  );
}

export default Loading;
