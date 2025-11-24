'use client';
import React from 'react';
import Link from 'next/link';
import { 
  TextField, 
  Button, 
  InputAdornment, 
  Typography 
} from '@mui/material';
import { Person, Lock, Email } from '@mui/icons-material';
import AuthLayout from '../components/AuthLayout';
import { buttonStyle, inputStyle } from '../styles/auth-styles';

export default function RegisterPage() {
  return (
    <AuthLayout>
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
        <TextField
          fullWidth
          placeholder="Confirme a senha"
          type="password"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            endAdornment: <InputAdornment position="end"><Lock sx={{ color: 'gray' }} /></InputAdornment>,
            sx: inputStyle
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
            sx: inputStyle
          }}
        />
        
        <Button fullWidth variant="contained" sx={{ ...buttonStyle, marginTop: 1 }}>
          CONFIRMAR
        </Button>
        
        <Button 
          component={Link}
          href="/login"
          fullWidth 
          variant="contained" 
          sx={{ ...buttonStyle }}
        >
          VOLTAR
        </Button>
      </div>
    </AuthLayout>
  );
}