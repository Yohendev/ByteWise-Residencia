'use client';

import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  InputAdornment, 
  Box, 
  Typography, 
  Divider, 
  Link 
} from '@mui/material';
import { 
  Person, 
  Lock, 
  Email, 
  ArrowBack 
} from '@mui/icons-material';

const themeColors = {
  primaryDark: '#2F3E3F',
  purpleLogo: '#5B2C6F',
};

export default function AuthPage() {
  const [isLoginView, setIsLoginView] = useState(true);

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
          {isLoginView ? (
            <LoginForm onSwitchToRegister={() => setIsLoginView(false)} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setIsLoginView(true)} />
          )}
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

function LoginForm({ onSwitchToRegister }) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      
      <TextField
        fullWidth
        placeholder="Digite o usuário"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <Person sx={{ color: 'gray' }} />
            </InputAdornment>
          ),
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <TextField
        fullWidth
        placeholder="Digite a senha"
        type="password"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <Lock sx={{ color: 'gray' }} />
            </InputAdornment>
          ),
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <Button 
        fullWidth 
        variant="contained" 
        sx={{ 
          backgroundColor: themeColors.primaryDark, 
          color: 'white',
          padding: '12px',
          '&:hover': { backgroundColor: '#1a2626' }
        }}
      >
        ENTRAR
      </Button>

      <div className="text-center">
        <Link href="#" underline="always" sx={{ color: 'black', fontSize: '0.875rem' }}>
          Esqueceu a senha?
        </Link>
      </div>

      <Divider sx={{ my: 1 }} />

      <Button 
        fullWidth 
        variant="contained" 
        onClick={onSwitchToRegister}
        sx={{ 
          backgroundColor: themeColors.primaryDark, 
          color: 'white',
          padding: '12px',
          '&:hover': { backgroundColor: '#1a2626' }
        }}
      >
        CADASTRAR USUÁRIO
      </Button>
    </div>
  );
}

function RegisterForm({ onSwitchToLogin }) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-500">
      
      <Typography variant="h6" sx={{ color: 'gray', textAlign: 'center', mb: 2 }}>
        Cadastro de usuário
      </Typography>

      <TextField
        fullWidth
        placeholder="Digite o usuário"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: <InputAdornment position="end"><Person sx={{ color: 'gray' }} /></InputAdornment>,
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <TextField
        fullWidth
        placeholder="Digite a senha"
        type="password"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: <InputAdornment position="end"><Lock sx={{ color: 'gray' }} /></InputAdornment>,
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <TextField
        fullWidth
        placeholder="Confirme a senha"
        type="password"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: <InputAdornment position="end"><Lock sx={{ color: 'gray' }} /></InputAdornment>,
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <TextField
        fullWidth
        placeholder="Digite um e-mail válido"
        type="email"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          endAdornment: <InputAdornment position="end"><Email sx={{ color: 'gray' }} /></InputAdornment>,
          sx: { backgroundColor: '#F3F4F6', borderRadius: 1 }
        }}
      />

      <Button 
        fullWidth 
        variant="contained" 
        sx={{ 
          backgroundColor: themeColors.primaryDark, 
          color: 'white',
          padding: '12px',
          marginTop: 1,
          '&:hover': { backgroundColor: '#1a2626' }
        }}
      >
        CONFIRMAR
      </Button>

      <Button 
        fullWidth 
        variant="contained" 
        onClick={onSwitchToLogin}
        sx={{ 
          backgroundColor: themeColors.primaryDark, 
          color: 'white',
          padding: '12px',
          '&:hover': { backgroundColor: '#1a2626' }
        }}
      >
        VOLTAR
      </Button>
    </div>
  );
}