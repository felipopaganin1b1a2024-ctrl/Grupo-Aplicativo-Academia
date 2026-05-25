// ============================================================
// ARQUIVO: src/components/TreinoCard.tsx
// DESCRIÇÃO: Componente reutilizável que exibe um card de
//            treino completo na tela inicial e na lista de
//            treinos. Mostra informações resumidas do treino.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '@/constants/theme';
import { Treino } from '../data/exercicios';

// Props que o componente recebe
type Props = {
  treino: Treino;
  onPress: (treino: Treino) => void;
  onIniciar: (treino: Treino) => void; // Botão "Iniciar Treino"
};

const TreinoCard: React.FC<Props> = ({ treino, onPress, onIniciar }) => {
  // Cores do badge de nível
  const corNivel = {
    'Iniciante': Colors.sucesso,
    'Intermediário': Colors.alerta,
    'Avançado': Colors.erro,
  }[treino.nivel];

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(treino)}
      activeOpacity={0.85}
    >
      {/* Barra colorida lateral (identidade visual do treino) */}
      <View style={[styles.barraLateral, { backgroundColor: treino.cor }]} />

      <View style={styles.conteudo}>
        {/* Cabeçalho com nome e nível */}
        <View style={styles.cabecalho}>
          <View style={styles.titulos}>
            <Text style={styles.nome}>{treino.nome}</Text>
            <Text style={styles.descricao} numberOfLines={2}>
              {treino.descricao}
            </Text>
          </View>
          {/* Badge de nível */}
          <View style={[styles.badge, { backgroundColor: corNivel + '22' }]}>
            <Text style={[styles.badgeTexto, { color: corNivel }]}>
              {treino.nivel}
            </Text>
          </View>
        </View>

        {/* Estatísticas do treino em linha */}
        <View style={styles.stats}>
          {/* Cada ícone + texto é um InfoPill */}
          <InfoPill emoji="⏱" texto={treino.duracao} />
          <InfoPill emoji="🎯" texto={treino.foco} />
          <InfoPill emoji="🔥" texto={`${treino.calorias} kcal`} />
          <InfoPill emoji="💪" texto={`${treino.exercicios.length} exerc.`} />
        </View>

        {/* Botão de iniciar treino */}
        {/* stopPropagation: evita que o clique no botão ative o onPress do card */}
        <TouchableOpacity
          style={[styles.botaoIniciar, { backgroundColor: treino.cor }]}
          onPress={(e) => {
            e.stopPropagation?.(); // Para plataformas web
            onIniciar(treino);
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.botaoTexto}>▶  Iniciar Treino</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// Pequeno componente de informação com emoji
const InfoPill = ({ emoji, texto }: { emoji: string; texto: string }) => (
  <View style={styles.pill}>
    <Text style={styles.pillEmoji}>{emoji}</Text>
    <Text style={styles.pillTexto}>{texto}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.fundoMedio,
    borderRadius: BorderRadius.lg,
    marginBottom: Spacing.md,
    flexDirection: 'row', // Layout em linha para a barra lateral + conteúdo
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  // Barra colorida vertical na esquerda do card
  barraLateral: {
    width: 5,
  },
  conteudo: {
    flex: 1,  // Ocupa o restante do espaço horizontal
    padding: Spacing.md,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaça os itens nas extremidades
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  titulos: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  nome: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    marginBottom: 4,
  },
  descricao: {
    fontSize: FontSize.xs,
    color: Colors.textoFraco,
    lineHeight: 16,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  badgeTexto: {
    fontSize: FontSize.xs,
    fontWeight: 'bold',
  },
  // flexWrap: 'wrap' permite quebrar linha se não couber tudo
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,      // Espaço entre os pills (React Native >= 0.71)
    marginBottom: Spacing.md,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.fundoSuave,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  pillEmoji: {
    fontSize: FontSize.xs,
  },
  pillTexto: {
    fontSize: FontSize.xs,
    color: Colors.textoMedio,
  },
  botaoIniciar: {
    borderRadius: BorderRadius.md,
    paddingVertical: Spacing.sm,
    alignItems: 'center',  // Centraliza o texto horizontalmente
  },
  botaoTexto: {
    color: Colors.textoClaro,
    fontWeight: 'bold',
    fontSize: FontSize.md,
  },
});

export default TreinoCard;