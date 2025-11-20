import { Leaf } from 'lucide-react';
import React, { useState } from 'react';

const LoginPage = ({ onLogin, onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ name: 'John Doe', email });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <Leaf className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your EcoFood account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" className="w-full mb-4">
            Sign In
          </Button>

          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => onNavigate('register')}
              className="text-green-600 hover:underline font-medium"
            >
              Register
            </button>
          </p>
        </form>
      </Card>
    </motion.div>
  );
};

export default LoginPage;