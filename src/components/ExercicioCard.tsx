// ============================================================
// ARQUIVO: src/components/ExercicioCard.tsx
// DESCRIÇÃO: Componente reutilizável que exibe um card de
//            exercício. Recebe os dados via props e pode ser
//            usado em qualquer tela do app.
// ============================================================

import React from 'react';
import {
  View,           // Container básico (como uma <div>)
  Text,           // Componente de texto
  Image,          // Exibe imagens (locais ou da internet)
  TouchableOpacity, // Botão clicável com feedback visual
  StyleSheet,     // Criação de estilos (como CSS)
} from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '@/constants/theme';
import { Exercicio } from '../data/exercicios';

// Definição das props que o componente aceita
type Props = {
  exercicio: Exercicio;                     // Dados do exercício
  onPress: (exercicio: Exercicio) => void;  // Função ao clicar
};

// Componente funcional do card de exercício
const ExercicioCard: React.FC<Props> = ({ exercicio, onPress }) => {
  // Mapeia o nível para uma cor específica
  const corNivel = {
    'Iniciante': Colors.sucesso,
    'Intermediário': Colors.alerta,
    'Avançado': Colors.erro,
  }[exercicio.nivel];

  return (
    // TouchableOpacity: torna o card clicável
    // activeOpacity: opacidade ao pressionar (0-1)
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(exercicio)}
      activeOpacity={0.8}
    >
      {/* Imagem do exercício */}
      <Image
        source={{ uri: exercicio.imagem }}
        style={styles.imagem}
        // resizeMode: como a imagem se ajusta ao container
        resizeMode="cover"
      />

      {/* Badge de nível sobreposto à imagem */}
      <View style={[styles.badge, { backgroundColor: corNivel }]}>
        <Text style={styles.badgeTexto}>{exercicio.nivel}</Text>
      </View>

      {/* Informações do exercício */}
      <View style={styles.info}>
        {/* Nome e músculo */}
        <Text style={styles.nome}>{exercicio.nome}</Text>
        <Text style={styles.musculo}>{exercicio.musculo}</Text>

        {/* Linha com séries, reps e descanso */}
        <View style={styles.stats}>
          <StatItem label="Séries" value={String(exercicio.series)} />
          <View style={styles.separador} />
          <StatItem label="Reps" value={exercicio.repeticoes} />
          <View style={styles.separador} />
          <StatItem label="Descanso" value={exercicio.descanso} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Componente interno pequeno para exibir uma estatística
// Separa responsabilidades: cada pedacinho tem seu componente
const StatItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValor}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

// StyleSheet.create: cria estilos otimizados para React Native
// Similar ao CSS, mas usa camelCase e números (sem px/em)
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.fundoMedio,     // Cor de fundo do card
    borderRadius: BorderRadius.lg,           // Bordas arredondadas
    marginBottom: Spacing.md,               // Espaço abaixo do card
    overflow: 'hidden',                     // Corta conteúdo fora das bordas arredondadas
    // Sombra (Android e iOS têm propriedades diferentes)
    elevation: 4,                           // Sombra no Android
    shadowColor: '#000',                    // Cor da sombra iOS
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra iOS
    shadowOpacity: 0.3,                     // Opacidade da sombra iOS
    shadowRadius: 4,                        // Desfoque da sombra iOS
  },
  imagem: {
    width: '100%',  // Largura total do card
    height: 160,    // Altura fixa em pixels
  },
  // Badge flutuante sobre a imagem (posicionamento absoluto)
  badge: {
    position: 'absolute',  // Remove do fluxo normal, posiciona livremente
    top: Spacing.sm,
    right: Spacing.sm,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
    borderRadius: BorderRadius.full,
  },
  badgeTexto: {
    color: Colors.textoClaro,
    fontSize: FontSize.xs,
    fontWeight: 'bold',
  },
  info: {
    padding: Spacing.md,  // Espaçamento interno
  },
  nome: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    marginBottom: 2,
  },
  musculo: {
    fontSize: FontSize.sm,
    color: Colors.laranja,
    marginBottom: Spacing.md,
    fontWeight: '600',
  },
  // flexDirection: 'row' alinha itens na horizontal (padrão é coluna)
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.fundoSuave,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
  },
  separador: {
    width: 1,
    height: 30,
    backgroundColor: Colors.bordaEscura,
    marginHorizontal: Spacing.sm,
  },
  statItem: {
    flex: 1,  // flex: 1 divide o espaço igualmente entre os filhos
    alignItems: 'center',
  },
  statValor: {
    fontSize: FontSize.md,
    fontWeight: 'bold',
    color: Colors.textoClaro,
  },
  statLabel: {
    fontSize: FontSize.xs,
    color: Colors.textoFraco,
    marginTop: 2,
  },
});

// Exportar o componente para ser usado em outras telas
export default ExercicioCard;