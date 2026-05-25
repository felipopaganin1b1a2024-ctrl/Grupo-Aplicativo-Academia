import * as Device from 'expo-device';
import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import { HintRow } from '@/components/hint-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

// function getDevMenuHint() {
//   if (Platform.OS === 'web') {
//     return <ThemedText type="small">use browser devtools</ThemedText>;
//   }
//   if (Device.isDevice) {
//     return (
//       <ThemedText type="small">
//         shake device or press <ThemedText type="code">m</ThemedText> in terminal
//       </ThemedText>
//     );
//   }
//   const shortcut = Platform.OS === 'android' ? 'cmd+m (or ctrl+m)' : 'cmd+d';
//   return (
//     <ThemedText type="small">
//       press <ThemedText type="code">{shortcut}</ThemedText>
//     </ThemedText>
//   );
// }

// export default function HomeScreen() {
//   return (
//     <ThemedView style={styles.container}>
//       <SafeAreaView style={styles.safeArea}>
//         <ThemedView style={styles.heroSection}>
//           <AnimatedIcon />
//           <ThemedText type="title" style={styles.title}>
//             Trabalho Academia 
//           </ThemedText>
//         </ThemedView>

//         <ThemedText type="code" style={styles.code}>
//           get started
//         </ThemedText>

//         <ThemedView type="backgroundElement" style={styles.stepContainer}>
//           <HintRow
//             title="Try editing"
//             hint={<ThemedText type="code">src/app/index.tsx</ThemedText>}
//           />
//           <HintRow title="Dev tools" hint={getDevMenuHint()} />
//           <HintRow
//             title="Fresh start"
//             hint={<ThemedText type="code">npm run reset-project</ThemedText>}
//           />
//         </ThemedView>

//         {Platform.OS === 'web' && <WebBadge />}
//       </SafeAreaView>
//     </ThemedView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   safeArea: {
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     alignItems: 'center',
//     gap: Spacing.three,
//     paddingBottom: BottomTabInset + Spacing.three,
//     maxWidth: MaxContentWidth,
//   },
//   heroSection: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     paddingHorizontal: Spacing.four,
//     gap: Spacing.four,
//   },
//   title: {
//     textAlign: 'center',
//   },
//   code: {
//     textTransform: 'uppercase',
//   },
//   stepContainer: {
//     gap: Spacing.three,
//     alignSelf: 'stretch',
//     paddingHorizontal: Spacing.three,
//     paddingVertical: Spacing.four,
//     borderRadius: Spacing.four,
//   },
// });

// ============================================================
// ARQUIVO: src/screens/HomeScreen.tsx
// DESCRIÇÃO: Tela inicial do app. Exibe saudação ao aluno,
//            resumo dos treinos e acesso rápido aos treinos
//            em destaque. É a primeira tela que o usuário vê
//            após o cadastro.
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,      // Container com scroll vertical
  TouchableOpacity,
  Image,
} from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '@/constants/theme';
import TreinoCard from '../components/TreinoCard';
import { treinos, Treino } from '../data/exercicios';

// Props de navegação injetadas automaticamente pelo React Navigation
type Props = {
  navigation: any;   // Objeto de navegação
  route: any;        // Parâmetros da rota
};

const HomeScreen: React.FC<Props> = ({ navigation, route }) => {
  // useState: hook do React para gerenciar estado local
  // Aqui guardamos o nome do aluno vindo da tela de cadastro
  const nomeAluno = 'Atleta';

  // Estado para controlar qual categoria está selecionada
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // Categorias de filtro disponíveis
  const categorias = ['Todos', 'Iniciante', 'Intermediário', 'Avançado'];

  // Filtra os treinos conforme a categoria selecionada
  // filter() retorna um novo array com os itens que passam na condição
  const treinosFiltrados = categoriaAtiva === 'Todos'
    ? treinos
    : treinos.filter(t => t.nivel === categoriaAtiva);

  // Função chamada ao pressionar "Iniciar Treino" em um card
  const aoIniciarTreino = (treino: Treino) => {
    // navigate: navega para outra tela passando parâmetros
    navigation.navigate('Treino', { treino });
  };

  // Função chamada ao pressionar o card do treino (para ver detalhes)
  const aoVerDetalhesTreino = (treino: Treino) => {
    navigation.navigate('DetalhesTreino', { treino });
  };

  return (
    // ScrollView: permite rolar a tela quando o conteúdo excede a tela
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false} // Esconde a barra de scroll
    >
      {/* ========== BANNER DE BOAS-VINDAS ========== */}
      <View style={styles.banner}>
        {/* Gradiente visual com emoji de academia */}
        <View style={styles.bannerDecoração}>
          <Text style={styles.bannerEmoji}>🏋️</Text>
        </View>

        <View style={styles.bannerTextos}>
          <Text style={styles.bannerOla}>Olá, {nomeAluno}! 👊</Text>
          <Text style={styles.bannerMensagem}>
            Pronto para mais um treino?{'\n'}Vamos arrasar hoje!
          </Text>
        </View>

        {/* Card de estatística rápida */}
        <View style={styles.statRapida}>
          <Text style={styles.statNumero}>{treinos.length}</Text>
          <Text style={styles.statLabel}>Treinos{'\n'}Disponíveis</Text>
        </View>
      </View>

      {/* ========== CARDS DE RESUMO ========== */}
      <View style={styles.resumoRow}>
        <ResumoCard emoji="🔥" valor="1.490" label="Kcal Total" cor={Colors.laranja} />
        <ResumoCard emoji="⏱" valor="4h 05m" label="Tempo Total" cor={Colors.laranjaClaro} />
        <ResumoCard emoji="🏆" valor={String(treinos.length)} label="Treinos" cor={Colors.laranjaEscuro} />
      </View>

      {/* ========== FILTROS DE CATEGORIA ========== */}
      <View style={styles.secao}>
        <Text style={styles.secaoTitulo}>Seus Treinos</Text>

        {/* ScrollView horizontal para os filtros */}
        <ScrollView
          horizontal                         // Scroll na horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtros}
          contentContainerStyle={styles.filtrosConteudo}
        >
          {/* map(): transforma cada item do array em um componente */}
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat}  // key: identificador único necessário em listas
              style={[
                styles.filtroBotao,
                // Aplica estilo adicional se a categoria estiver ativa
                categoriaAtiva === cat && styles.filtroBotaoAtivo,
              ]}
              onPress={() => setCategoriaAtiva(cat)}
            >
              <Text style={[
                styles.filtroTexto,
                categoriaAtiva === cat && styles.filtroTextoAtivo,
              ]}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ========== LISTA DE TREINOS ========== */}
      <View style={styles.listaTreinos}>
        {treinosFiltrados.map((treino) => (
          // TreinoCard: componente reutilizável (importado de components/)
          <TreinoCard
            key={treino.id}
            treino={treino}
            onPress={aoVerDetalhesTreino}
            onIniciar={aoIniciarTreino}
          />
        ))}

        {/* Mensagem quando nenhum treino é encontrado */}
        {treinosFiltrados.length === 0 && (
          <View style={styles.vazio}>
            <Text style={styles.vazioTexto}>Nenhum treino nessa categoria</Text>
          </View>
        )}
      </View>

      {/* Espaço no final para não cortar o último card */}
      <View style={{ height: Spacing.xl }} />
    </ScrollView>
  );
};

// Componente interno: cartão de resumo de estatística
const ResumoCard = ({
  emoji, valor, label, cor
}: {
  emoji: string; valor: string; label: string; cor: string;
}) => (
  <View style={[resumoStyles.card, { borderTopColor: cor }]}>
    <Text style={resumoStyles.emoji}>{emoji}</Text>
    <Text style={[resumoStyles.valor, { color: cor }]}>{valor}</Text>
    <Text style={resumoStyles.label}>{label}</Text>
  </View>
);

const resumoStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.fundoMedio,
    borderRadius: BorderRadius.md,
    padding: Spacing.sm,
    alignItems: 'center',
    borderTopWidth: 3,
    marginHorizontal: 4,
  },
  emoji: { fontSize: 20, marginBottom: 4 },
  valor: { fontSize: FontSize.lg, fontWeight: 'bold' },
  label: { fontSize: FontSize.xs, color: Colors.textoFraco, textAlign: 'center' },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fundoEscuro,
  },
  // Banner de boas-vindas no topo
  banner: {
    backgroundColor: Colors.fundoMedio,
    margin: Spacing.md,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.laranja + '44',   // 44 em hex = ~27% de opacidade
  },
  bannerDecoração: {
    width: 56,
    height: 56,
    backgroundColor: Colors.laranja + '22',
    borderRadius: BorderRadius.full,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  bannerEmoji: {
    fontSize: 28,
  },
  bannerTextos: {
    flex: 1,
  },
  bannerOla: {
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    marginBottom: 4,
  },
  bannerMensagem: {
    fontSize: FontSize.xs,
    color: Colors.textoFraco,
    lineHeight: 18,
  },
  statRapida: {
    alignItems: 'center',
    marginLeft: Spacing.sm,
  },
  statNumero: {
    fontSize: FontSize.xxl,
    fontWeight: 'bold',
    color: Colors.laranja,
  },
  statLabel: {
    fontSize: FontSize.xs,
    color: Colors.textoFraco,
    textAlign: 'center',
  },
  // Linha de cards de resumo
  resumoRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.md,
  },
  secao: {
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm,
  },
  secaoTitulo: {
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    marginBottom: Spacing.sm,
  },
  filtros: {
    marginBottom: Spacing.sm,
  },
  filtrosConteudo: {
    gap: Spacing.sm,
    paddingRight: Spacing.md,
  },
  filtroBotao: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.fundoMedio,
    borderWidth: 1,
    borderColor: Colors.bordaEscura,
  },
  filtroBotaoAtivo: {
    backgroundColor: Colors.laranja,
    borderColor: Colors.laranja,
  },
  filtroTexto: {
    fontSize: FontSize.sm,
    color: Colors.textoFraco,
    fontWeight: '500',
  },
  filtroTextoAtivo: {
    color: Colors.textoClaro,
    fontWeight: 'bold',
  },
  listaTreinos: {
    paddingHorizontal: Spacing.md,
  },
  vazio: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
  },
  vazioTexto: {
    color: Colors.textoFraco,
    fontSize: FontSize.md,
  },
});

export default HomeScreen;