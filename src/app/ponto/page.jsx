'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Box, 
  Typography, 
  Button, 
  Paper, 
  Avatar, 
  IconButton,
  LinearProgress 
} from '@mui/material';
import { 
  Login as LoginIcon, 
  Logout as LogoutIcon, 
  Pause as PauseIcon, 
  PlayArrow as PlayArrowIcon,
  Schedule as ScheduleIcon, 
  MapOutlined as MapOutlinedIcon, 
  WorkOutline as WorkOutlineIcon, 
  AccessTime as AccessTimeIcon, 
  AssessmentOutlined as AssessmentOutlinedIcon, 
  DescriptionOutlined as DescriptionOutlinedIcon, 
  Add as AddIcon, 
  History as HistoryIcon, 
  Person as PersonIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  ExitToApp as ExitToAppIcon 
  
} from '@mui/icons-material';

const customColors = {
  purpleLogo: '#4A148C',
  darkText: '#333333',
  lightGrayText: '#616166',
  mediumGrayBg: '#F0F0F0',
  cardBg: '#FFFFFF',
  greenButton: '#4CAF50',
  redButton: '#F44336',
  lightBlueButton: '#E0F7FA',
  lightBlueButtonText: '#006064',
  progressBlue: '#2196F3', 
  darkButton: '#263238',
};

const userData = {
  name: 'Seu Usuário',
  avatar: 'https://via.placeholder.com/150/808080/FFFFFF?text=SU',
};

const historicalRecords = [
  { date: '10/11/2025', day: 'Segunda-feira', entry: '07:55:12', exit: '--:--', total: 'Em andamento', status: 'Em andamento' },
  { date: '07/11/2025', day: 'Sexta-feira', entry: '07:50:10', exit: '16:00:12', total: '08:10:02', status: 'Concluído' },
  { date: '06/11/2025', day: 'Quinta-feira', entry: '07:59:54', exit: '16:03:20', total: '08:03:26', status: 'Concluído' },
];

const MainContentBox = ({ children }) => (
    <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: 3,
        maxWidth: 1400,
        mx: 'auto',
        p: { xs: 2, md: 4 }
    }}>
        {children}
    </Box>
);

const StatCard = ({ title, value, icon: Icon, flexBasis }) => (
    <Paper elevation={1} sx={{ 
        p: 2, 
        flex: `0 0 ${flexBasis}`,
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        borderRadius: 1 
    }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Icon sx={{ fontSize: 32, color: customColors.lightGrayText, mr: 1 }} />
            <Box>
                <Typography variant="body2" sx={{ color: customColors.lightGrayText }}>{title}</Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: customColors.darkText }}>{value}</Typography>
            </Box>
        </Box>
    </Paper>
);


export default function PontoPage() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = currentTime.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  const formattedDay = currentTime.toLocaleDateString('pt-BR', { weekday: 'long' });
  const capitalizedDay = formattedDay.charAt(0).toUpperCase() + formattedDay.slice(1);
  const progressValue = 66; 

  return (
    <div className="min-h-screen" style={{ backgroundColor: customColors.mediumGrayBg }}>
      <Paper elevation={0} sx={{ bgcolor: customColors.cardBg, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${customColors.mediumGrayBg}` }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" component="div" sx={{ color: customColors.purpleLogo, fontWeight: 'bold', fontFamily: 'serif' }}>
            B
          </Typography>
          <Typography variant="h6" sx={{ color: customColors.purpleLogo, letterSpacing: 1, fontWeight: 'bold', fontFamily: 'serif', ml: 1 }}>
            BYTE WISE
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body1" sx={{ color: customColors.lightGrayText, mr: 1, display: { xs: 'none', md: 'block' } }}>Sair</Typography>
            <Link href="/login" passHref>
                <IconButton sx={{ bgcolor: customColors.darkButton, '&:hover': { bgcolor: '#37474F' }, p: 0.5, borderRadius: 1 }}>
                    <ExitToAppIcon sx={{ color: customColors.cardBg, fontSize: 24 }} />
                </IconButton>
            </Link>
        </Box>
      </Paper>

      <MainContentBox>
        
        <Box sx={{ flex: '2 1 65%', display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
                
                <Paper elevation={1} sx={{ p: 3, flex: '1 1 50%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, alignSelf: 'flex-start' }}>
                        <ScheduleIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Registro de Ponto</Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: customColors.lightGrayText, alignSelf: 'flex-start', mb: 1 }}>
                        Registre sua entrada, saída e pausas
                    </Typography>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ScheduleIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ color: customColors.lightGrayText, fontSize: '0.8rem' }}>
                                {capitalizedDay}, {formattedDate}
                            </Typography>
                        </Box>
                        <Typography variant="h4" sx={{ fontFamily: 'monospace', fontWeight: 'bold', color: customColors.darkText }}>
                            {formattedTime}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', width: '100%', gap: 2, mb: 1 }}>
                        <Button fullWidth variant="contained" sx={{ bgcolor: customColors.greenButton, '&:hover': { bgcolor: '#388E3C' }, py: 1.5, fontSize: '1rem' }} startIcon={<LoginIcon />}>
                            Registrar entrada
                        </Button>
                        <Button fullWidth variant="contained" sx={{ bgcolor: customColors.redButton, '&:hover': { bgcolor: '#D32F2F' }, py: 1.5, fontSize: '1rem' }} startIcon={<LogoutIcon />}>
                            Registrar saída
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
                        <Button fullWidth variant="contained" sx={{ bgcolor: customColors.lightBlueButton, color: customColors.lightBlueButtonText, '&:hover': { bgcolor: '#B3E5FC' }, py: 1.5, fontSize: '0.9rem' }} startIcon={<PauseIcon />}>
                            Iniciar intervalo
                        </Button>
                        <Button fullWidth variant="contained" sx={{ bgcolor: customColors.lightBlueButton, color: customColors.lightBlueButtonText, '&:hover': { bgcolor: '#B3E5FC' }, py: 1.5, fontSize: '0.9rem' }} startIcon={<PlayArrowIcon />}>
                            Finalizar intervalo
                        </Button>
                    </Box>
                </Paper>

                <Box sx={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                    
                    <Paper elevation={1} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 'auto', borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <MapOutlinedIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Minha localização</Typography>
                        </Box>
                        <Box sx={{ height: 120, bgcolor: '#E0E0E0', borderRadius: 1, overflow: 'hidden', mb: 1 }}>
                            <img src="https://via.placeholder.com/300x120?text=Mapa+Localizacao" alt="Mapa de localização" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                        </Box>
                        <Typography variant="caption" sx={{ color: customColors.lightGrayText, textAlign: 'center' }}>
                            Clique aqui para ver a localização no Google Maps
                        </Typography>
                    </Paper>

                    <Paper elevation={1} sx={{ p: 2, display: 'flex', flexDirection: 'column', flexGrow: 1, borderRadius: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AssessmentOutlinedIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Resumo do Dia</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <WorkOutlineIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ color: customColors.lightGrayText }}>Horas Trabalhadas Hoje:</Typography>
                            <Typography variant="body2" sx={{ ml: 'auto', fontWeight: 'bold', color: customColors.darkText }}>05:34:03</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <LoginIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ color: customColors.lightGrayText }}>Entrada:</Typography>
                            <Typography variant="body2" sx={{ ml: 'auto', color: customColors.darkText }}>07:55:12</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccessTimeIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                            <Typography variant="body2" sx={{ color: customColors.lightGrayText }}>Saída Prevista:</Typography>
                            <Typography variant="body2" sx={{ ml: 'auto', color: customColors.darkText }}>16:00:00</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', mt: 'auto' }}>
                            <LinearProgress 
                                variant="determinate" 
                                value={progressValue} 
                                sx={{ width: '90%', height: 8, borderRadius: 4, bgcolor: '#E0E0E0', '& .MuiLinearProgress-bar': { bgcolor: customColors.progressBlue } }} 
                            />
                            <Typography variant="caption" sx={{ color: customColors.lightGrayText }}>{progressValue}%</Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, flexGrow: 1 }}>
                
                <Paper elevation={1} sx={{ p: 3, flex: '1 1 35%', display: 'flex', flexDirection: 'column', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <DescriptionOutlinedIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Justificativa de Falta</Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: customColors.lightGrayText, mb: 3 }}>
                        Solicite abono de falta enviando sua justificativa
                    </Typography>
                    <Button 
                        variant="contained" 
                        sx={{ bgcolor: customColors.darkButton, '&:hover': { bgcolor: '#37474F' }, mt: 'auto', py: 1.2, px: 2, fontSize: '0.9rem' }}
                        startIcon={<AddIcon />}
                    >
                        Nova solicitação
                    </Button>
                </Paper>
                
                <Paper elevation={1} sx={{ p: 3, flex: '2 1 65%', display: 'flex', flexDirection: 'column', borderRadius: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <HistoryIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Histórico de Registro</Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: customColors.lightGrayText, mb: 3 }}>
                        Seus últimos registros de ponto
                    </Typography>
                    <Box sx={{ overflowX: 'auto', width: '100%', flexGrow: 1 }}>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead style={{ backgroundColor: customColors.cardBg }}>
                                <tr>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dia</th>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entrada</th>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Saída</th>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {historicalRecords.map((record, index) => (
                                    <tr key={index}>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.day}</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.entry}</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.exit}</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">{record.total}</td>
                                        <td className="px-3 py-2 whitespace-nowrap text-sm">
                                            <span 
                                                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                                    ${record.status === 'Concluído' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`
                                                }
                                            >
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Box>
                </Paper>
            </Box>
        </Box>


        <Box sx={{ flex: '1 1 35%', display: 'flex', flexDirection: 'column', gap: 3 }}>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                
                <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'row', sm: 'row' }, flexWrap: 'wrap' }}>
                    <StatCard title="Horas Semanais" value="21:47:00" icon={ScheduleIcon} flexBasis="30%" />
                    <StatCard title="Horas Mensais" value="21:47:00" icon={ScheduleIcon} flexBasis="30%" />
                    <StatCard title="Média Diárias" value="08:06:00" icon={ScheduleIcon} flexBasis="30%" />
                </Box>
                
                <Paper elevation={1} sx={{ p: 3, borderRadius: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <PersonIcon sx={{ mr: 1, color: customColors.lightGrayText, fontSize: 18 }} />
                        <Typography variant="body2" sx={{ fontWeight: 'medium', color: customColors.darkText }}>Dias Presentes</Typography>
                    </Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: customColors.darkText, mt: 1 }}>3 Dias</Typography>
                </Paper>
            </Box>
        </Box>
      </MainContentBox>
    </div>
  );
}
