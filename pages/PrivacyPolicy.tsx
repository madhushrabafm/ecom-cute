
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-24 animate-in fade-in duration-700">
      <h1 className="text-4xl font-serif font-bold mb-12">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-gray-600 space-y-8 leading-relaxed">
        <section>
          <h2 className="text-black text-sm font-bold uppercase tracking-widest mb-4">1. Data Collection</h2>
          <p>
            At VOGUE, we respect your privacy. We collect personal information like your name, email, and shipping address solely to process your orders and provide a personalized shopping experience. We never sell your data to third parties.
          </p>
        </section>
        
        <section>
          <h2 className="text-black text-sm font-bold uppercase tracking-widest mb-4">2. Cookies & Tracking</h2>
          <p>
            We use cookies to remember your bag items and analyze site traffic. This helps us understand which collections you love most. You can opt-out of cookies through your browser settings, though some site features may be limited.
          </p>
        </section>

        <section>
          <h2 className="text-black text-sm font-bold uppercase tracking-widest mb-4">3. Payment Security</h2>
          <p>
            Your financial security is our priority. All payments are processed through encrypted gateways (Razorpay/Stripe). We do not store your credit card details on our servers.
          </p>
        </section>

        <section>
          <h2 className="text-black text-sm font-bold uppercase tracking-widest mb-4">4. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information at any time. For any data-related queries, please contact our privacy officer at <span className="text-black font-bold">privacy@vogue.in</span>.
          </p>
        </section>

        <div className="pt-12 border-t border-gray-100">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">Last Updated: May 20, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
