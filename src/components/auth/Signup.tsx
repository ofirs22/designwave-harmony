import React from 'react';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-8 w-[1124px] p-10 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
            הרשמה
          </h1>
          <div className="w-16 h-1 bg-[#00BAFF]"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full max-w-md">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#05172C]">אימייל:</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="israelisraeli@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#05172C]">סיסמא:</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="**********"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#00BAFF] text-white font-semibold rounded-full"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            הרשמה
          </button>
        </form>

        {/* Social Signup */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button className="flex items-center justify-center gap-4 w-full py-3 border border-gray-300 rounded-full">
            <div className="w-5 h-5 flex items-center justify-center">
              <img 
                src="/assets/google-icon.png" 
                alt="Google Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-[#778080] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              הרשמה עם גוגל
            </span>
          </button>
          <button className="flex items-center justify-center gap-4 w-full py-3 border border-gray-300 rounded-full">
            <div className="w-5 h-5 flex items-center justify-center">
              <img 
                src="/assets/apple-logo.png" 
                alt="Apple Logo" 
                className="w-4 h-4 object-contain"
              />
            </div>
            <span className="text-[#778080] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              הרשמה עם אפל
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
