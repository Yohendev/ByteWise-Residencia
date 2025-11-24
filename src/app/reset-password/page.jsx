'use client';
import React from 'react';
import Link from 'next/link';
import { 
  TextField, 
  Button, 
  Typography 
} from '@mui/material';
import AuthLayout from '../components/AuthLayout';
import { buttonStyle, inputStyle } from '../styles/auth-styles';

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col gap-4 animate-in fade-in duration-500">
        <Typography variant="body1" sx={{ color: 'gray', textAlign: 'center', mb: 2, maxWidth: '300px', marginX: 'auto' }}>
          Insira o seu email ou nome de usuário e enviaremos um link para você voltar a acessar a sua conta.
        </Typography>

        <TextField
          fullWidth
          placeholder="Digite sua nova senha"
          type="password"
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: inputStyle
          }}
        />

        <Button 
          component={Link}
          href="/login"
          fullWidth 
          variant="contained" 
          sx={{ ...buttonStyle, marginTop: 1 }}
        >
          ENVIAR
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