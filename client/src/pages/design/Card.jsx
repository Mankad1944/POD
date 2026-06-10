// Card.jsx
const Card = ({ data }) => {
  return (
    <div className="h-96 w-full bg-amber-200 rounded-2xl p-4 shadow-sm flex flex-col hover:shadow-md transition-all duration-300 group">
      
      {/* Image Container */}
      <div className="w-full h-2/3 mb-4 overflow-hidden rounded-xl bg-amber-200">
        {data.url ? (
          <img 
            src={data.url} 
            alt={data.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-amber-500">
            No Image
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col grow justify-between">
        <div>
          <h3 className="text-amber-900 font-bold text-lg leading-tight mb-2">
            {data.name || `Design #${data.id}`}
          </h3>
          <p className="text-sm text-amber-800 line-clamp-3">
            {data.description || "Premium high-fidelity design curation."}
          </p>
        </div>
        
        {/* Optional: Add a small tag or price at the bottom */}
        <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-700">
          View Details →
        </div>
      </div>
    </div>
  );
};

export default Card;