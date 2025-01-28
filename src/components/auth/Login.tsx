import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add actual authentication logic
    dispatch(login({ 
      email: 'test@example.com', 
      token: 'fake-token' 
    }));
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-8 w-[1124px] p-10 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-2xl font-semibold text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
            כניסה
          </h1>
          <div className="w-16 h-1 bg-[#00BAFF]"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6 w-full max-w-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#05172C]" dir='rtl'>אימייל:</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="israelisraeli@gmail.com"
              dir="rtl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[#05172C]" dir='rtl'>סיסמא:</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="**********"
              dir="rtl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#00BAFF] text-white font-semibold rounded-full"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            כניסה
          </button>
        </form>

        {/* Social Login */}
        <div className="flex flex-col gap-4 w-full max-w-md">
          <button className="flex items-center justify-center gap-4 w-full py-3 border border-gray-300 rounded-full">
            <div className="w-5 h-5 flex items-center justify-center">
              <img 
                src="/assets/google-icon.png" 
                alt="Google Logo" 
                className="w-4 h-4 object-contain"
              />
            </div>
            <span className="text-[#778080] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              כניסה עם גוגל
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
              כניסה עם אפל
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
