'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import { 
  TextField, 
  Button, 
  InputAdornment, 
  Divider, 
  Link as MuiLink 
} from '@mui/material';
import { Person, Lock } from '@mui/icons-material';
import AuthLayout from '../components/AuthLayout';
import { buttonStyle, inputStyle } from '../styles/auth-styles';

export default function LoginPage() {
  const router = useRouter(); 

  const handleLogin = () => {
    router.push('/ponto'); 
  };
  
  return (
    <AuthLayout>
      <div className="flex flex-col gap-4 animate-in fade-in duration-500">
        <TextField
          fullWidth
          placeholder="Digite o usuário"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            endAdornment: <InputAdornment position="end"><Person sx={{ color: 'gray' }} /></InputAdornment>,
            sx: inputStyle
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
            sx: inputStyle
          }}
        />
        
        <Button 
          fullWidth 
          variant="contained" 
          onClick={handleLogin} 
          sx={{ ...buttonStyle }}
        >
          ENTRAR
        </Button>

        <div className="text-center">
          <MuiLink 
            component={Link} 
            href="/forgot-password" 
            underline="always" 
            sx={{ color: 'black', fontSize: '0.875rem' }}
          >
            Esqueceu a senha?
          </MuiLink>
        </div>

        <Divider sx={{ my: 1 }} />
        
        <Button 
          component={Link} 
          href="/register" 
          fullWidth 
          variant="contained" 
          sx={{ ...buttonStyle }}
        >
          CADASTRAR USUÁRIO
        </Button>
      </div>
    </AuthLayout>
  );
}