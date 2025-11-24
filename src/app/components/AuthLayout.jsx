import React from 'react';
import { Box, Typography } from '@mui/material';
import { themeColors } from '../styles/auth-styles';

export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16 bg-white z-10">
        <div className="mb-10 text-center">
          <Typography variant="h2" component="div" sx={{ color: themeColors.purpleLogo, fontWeight: 'bold', fontFamily: 'serif' }}>
            B
          </Typography>
          <Typography variant="h5" sx={{ color: themeColors.purpleLogo, letterSpacing: 2, fontWeight: 'bold', fontFamily: 'serif' }}>
            BYTE WISE
          </Typography>
        </div>
        <Box className="w-full max-w-sm">
          {children}
        </Box>
      </div>
      <div className="hidden md:block md:w-1/2 relative bg-gray-100">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
          alt="Workspace Laptop" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}