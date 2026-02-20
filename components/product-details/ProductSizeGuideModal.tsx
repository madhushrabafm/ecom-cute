import React from "react";
import { X } from "lucide-react";

interface Props {
  showSizeGuide: boolean;
  setShowSizeGuide: (value: boolean) => void;
}

const ProductSizeGuideModal: React.FC<Props> = ({
  showSizeGuide,
  setShowSizeGuide,
}) => {
  if (!showSizeGuide) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      {showSizeGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative bg-white w-full max-w-2xl p-12 shadow-2xl animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowSizeGuide(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <X className="text-xl" />
            </button>
            <h2 className="text-3xl font-serif font-bold mb-8">
              Official Size Chart
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                      Tag Size
                    </th>
                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                      Bust/Chest (in)
                    </th>
                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                      Waist (in)
                    </th>
                    <th className="py-4 text-[10px] font-bold uppercase tracking-widest text-vogue-500">
                      Length (in)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light">
                  <tr className="border-b border-gray-50">
                    <td className="py-4 font-bold">S</td>
                    <td className="py-4">36 - 38</td>
                    <td className="py-4">30 - 32</td>
                    <td className="py-4">27.5</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 font-bold">M</td>
                    <td className="py-4">38 - 40</td>
                    <td className="py-4">32 - 34</td>
                    <td className="py-4">28.5</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 font-bold">L</td>
                    <td className="py-4">40 - 42</td>
                    <td className="py-4">34 - 36</td>
                    <td className="py-4">29.5</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 font-bold">XL</td>
                    <td className="py-4">42 - 44</td>
                    <td className="py-4">36 - 38</td>
                    <td className="py-4">30.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSizeGuideModal;
