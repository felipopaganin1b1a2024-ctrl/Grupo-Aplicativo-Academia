// ============================================================
// ARQUIVO: src/data/exercicios.ts
// DESCRIÇÃO: Dados estáticos do app. Em um app real, esses
//            dados viriam de uma API ou banco de dados.
// ============================================================

// Tipo que define a estrutura de um exercício
export type Exercicio = {
    id: string;
    nome: string;
    musculo: string;       // Grupo muscular trabalhado
    series: number;        // Número de séries
    repeticoes: string;    // Ex: "12-15" ou "até falhar"
    descanso: string;      // Ex: "60s"
    nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
    imagem: string;        // URL da imagem
    descricao: string;     // Instruções do exercício
    calorias: number;      // Calorias estimadas por série
  };
  
  // Tipo que define a estrutura de um treino completo
  export type Treino = {
    id: string;
    nome: string;
    descricao: string;
    duracao: string;       // Ex: "45 min"
    nivel: 'Iniciante' | 'Intermediário' | 'Avançado';
    foco: string;          // Ex: "Peito e Tríceps"
    calorias: number;      // Total estimado de calorias
    exercicios: Exercicio[];
    cor: string;           // Cor de destaque do card
  };
  
  // Lista de todos os exercícios disponíveis no app
  export const exercicios: Exercicio[] = [
    {
      id: 'ex1',
      nome: 'Supino Reto',
      musculo: 'Peitoral',
      series: 4,
      repeticoes: '10-12',
      descanso: '90s',
      nivel: 'Intermediário',
      imagem: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400',
      descricao: 'Deite no banco, segure a barra na largura dos ombros e empurre para cima controlando o movimento.',
      calorias: 40,
    },
    {
      id: 'ex2',
      nome: 'Agachamento Livre',
      musculo: 'Quadríceps',
      series: 4,
      repeticoes: '12-15',
      descanso: '90s',
      nivel: 'Intermediário',
      imagem: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400',
      descricao: 'Pés na largura dos ombros, desça controlando o joelho e mantenha o peito erguido.',
      calorias: 55,
    },
    {
      id: 'ex3',
      nome: 'Puxada Alta',
      musculo: 'Costas',
      series: 3,
      repeticoes: '12',
      descanso: '60s',
      nivel: 'Iniciante',
      imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      descricao: 'Segure a barra com pegada pronada e puxe até a altura do queixo, contraindo as costas.',
      calorias: 35,
    },
    {
      id: 'ex4',
      nome: 'Desenvolvimento',
      musculo: 'Ombros',
      series: 3,
      repeticoes: '10-12',
      descanso: '60s',
      nivel: 'Intermediário',
      imagem: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400',
      descricao: 'Sentado ou em pé, empurre os halteres acima da cabeça e desça controlado.',
      calorias: 30,
    },
    {
      id: 'ex5',
      nome: 'Rosca Direta',
      musculo: 'Bíceps',
      series: 3,
      repeticoes: '12-15',
      descanso: '45s',
      nivel: 'Iniciante',
      imagem: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400',
      descricao: 'Com o cotovelo fixo ao lado do corpo, suba o halter girando o punho.',
      calorias: 25,
    },
    {
      id: 'ex6',
      nome: 'Tríceps Pulley',
      musculo: 'Tríceps',
      series: 3,
      repeticoes: '15',
      descanso: '45s',
      nivel: 'Iniciante',
      imagem: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400',
      descricao: 'Cotovelos fixos ao lado do corpo, estenda o braço para baixo e volte devagar.',
      calorias: 22,
    },
    {
      id: 'ex7',
      nome: 'Leg Press',
      musculo: 'Quadríceps',
      series: 4,
      repeticoes: '15-20',
      descanso: '90s',
      nivel: 'Iniciante',
      imagem: 'https://images.unsplash.com/photo-1570440828843-b8d17a04c69a?w=400',
      descricao: 'Posicione os pés na plataforma e empurre controlando a volta para não bater o joelho.',
      calorias: 60,
    },
    {
      id: 'ex8',
      nome: 'Prancha',
      musculo: 'Core',
      series: 3,
      repeticoes: '30-60s',
      descanso: '45s',
      nivel: 'Iniciante',
      imagem: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=400',
      descricao: 'Apoie os antebraços e pontas dos pés, mantenha o corpo alinhado e respire normalmente.',
      calorias: 15,
    },
    {
      id: 'ex9',
      nome: 'Deadlift',
      musculo: 'Posterior',
      series: 4,
      repeticoes: '6-8',
      descanso: '120s',
      nivel: 'Avançado',
      imagem: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=400',
      descricao: 'Quadril atrás, costas retas, puxe a barra do chão ativando glúteo e posterior.',
      calorias: 80,
    },
    {
      id: 'ex10',
      nome: 'Burpee',
      musculo: 'Corpo todo',
      series: 4,
      repeticoes: '10',
      descanso: '60s',
      nivel: 'Avançado',
      imagem: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=400',
      descricao: 'Agache, coloque as mãos no chão, jogue os pés para trás, faça flexão e volte pulando.',
      calorias: 70,
    },
  ];
  
  // Lista de treinos pré-montados
  export const treinos: Treino[] = [
    {
      id: 'tr1',
      nome: 'Peito & Tríceps',
      descricao: 'Treino focado no desenvolvimento do peitoral superior e inferior com isolamento do tríceps.',
      duracao: '50 min',
      nivel: 'Intermediário',
      foco: 'Empurrar',
      calorias: 280,
      cor: '#FF6B00',
      exercicios: [exercicios[0], exercicios[5], exercicios[3]],
    },
    {
      id: 'tr2',
      nome: 'Pernas Completo',
      descricao: 'Treino intenso para quadríceps, glúteo, isquiotibiais e panturrilhas.',
      duracao: '60 min',
      nivel: 'Avançado',
      foco: 'Membros Inferiores',
      calorias: 420,
      cor: '#CC5500',
      exercicios: [exercicios[1], exercicios[6], exercicios[8]],
    },
    {
      id: 'tr3',
      nome: 'Costas & Bíceps',
      descricao: 'Trabalhe as costas e bíceps com movimentos compostos e isolados.',
      duracao: '45 min',
      nivel: 'Intermediário',
      foco: 'Puxar',
      calorias: 240,
      cor: '#FF9240',
      exercicios: [exercicios[2], exercicios[4]],
    },
    {
      id: 'tr4',
      nome: 'Full Body Iniciante',
      descricao: 'Treino completo para quem está começando, cobrindo todos os grupos musculares.',
      duracao: '40 min',
      nivel: 'Iniciante',
      foco: 'Corpo Todo',
      calorias: 200,
      cor: '#FF6B00',
      exercicios: [exercicios[4], exercicios[2], exercicios[6], exercicios[7]],
    },
    {
      id: 'tr5',
      nome: 'HIIT Cardio',
      descricao: 'Treino de alta intensidade para queimar gordura e melhorar o condicionamento.',
      duracao: '30 min',
      nivel: 'Avançado',
      foco: 'Cardio',
      calorias: 350,
      cor: '#CC5500',
      exercicios: [exercicios[9], exercicios[7]],
    },
  ];