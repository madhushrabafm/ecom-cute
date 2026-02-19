import React from "react";

interface Props {
  title: string;
  id: string;
  isActive?: boolean;
  openSections: string[];
  toggleSection: (id: string) => void;
  children?: React.ReactNode;
}

const FilterSection: React.FC<Props> = ({
  title,
  id,
  isActive,
  openSections,
  toggleSection,
  children,
}) => {
  return (
    <div className="border-b border-gray-100 py-6 last:border-0">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex justify-between items-center group"
      >
        <div className="flex items-center gap-3">
          <span
            className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
              openSections.includes(id)
                ? "text-black"
                : "text-gray-400 group-hover:text-black"
            }`}
          >
            {title}
          </span>
          {isActive && (
            <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
          )}
        </div>
        <i
          className={`fa-solid fa-chevron-down text-[8px] transition-transform duration-500 ${
            openSections.includes(id)
              ? "rotate-180 text-black"
              : "text-gray-300"
          }`}
        ></i>
      </button>

      <div
        className={`mt-6 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
          openSections.includes(id)
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterSection;
