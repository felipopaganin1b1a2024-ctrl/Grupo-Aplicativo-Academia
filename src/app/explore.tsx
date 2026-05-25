// import { Image } from 'expo-image';
// import { SymbolView } from 'expo-symbols';
// import React from 'react';
// import { Platform, Pressable, ScrollView, StyleSheet } from 'react-native';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import { ExternalLink } from '@/components/external-link';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Collapsible } from '@/components/ui/collapsible';
// import { WebBadge } from '@/components/web-badge';
// import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
// import { useTheme } from '@/hooks/use-theme';

// export default function TabTwoScreen() {
//   const safeAreaInsets = useSafeAreaInsets();
//   const insets = {
//     ...safeAreaInsets,
//     bottom: safeAreaInsets.bottom + BottomTabInset + Spacing.three,
//   };
//   const theme = useTheme();

//   const contentPlatformStyle = Platform.select({
//     android: {
//       paddingTop: insets.top,
//       paddingLeft: insets.left,
//       paddingRight: insets.right,
//       paddingBottom: insets.bottom,
//     },
//     web: {
//       paddingTop: Spacing.six,
//       paddingBottom: Spacing.four,
//     },
//   });

//   return (
//     <ScrollView
//       style={[styles.scrollView, { backgroundColor: theme.background }]}
//       contentInset={insets}
//       contentContainerStyle={[styles.contentContainer, contentPlatformStyle]}>
//       <ThemedView style={styles.container}>
//         <ThemedView style={styles.titleContainer}>
//           <ThemedText type="subtitle">Trabalho Academia ( Joao e Felipo e isa )</ThemedText>
//           <ThemedText style={styles.centerText} themeColor="textSecondary">
//             This starter app includes example{'\n'}code to help you get started.
//           </ThemedText>

//           <ExternalLink href="https://docs.expo.dev" asChild>
//             <Pressable style={({ pressed }) => pressed && styles.pressed}>
//               <ThemedView type="backgroundElement" style={styles.linkButton}>
//                 <ThemedText type="link">Expo documentation</ThemedText>
//                 <SymbolView
//                   tintColor={theme.text}
//                   name={{ ios: 'arrow.up.right.square', android: 'link', web: 'link' }}
//                   size={12}
//                 />
//               </ThemedView>
//             </Pressable>
//           </ExternalLink>
//         </ThemedView>

//         <ThemedView style={styles.sectionsWrapper}>
//           <Collapsible title="File-based routing">
//             <ThemedText type="small">
//               This app has two screens: <ThemedText type="code">src/app/index.tsx</ThemedText> and{' '}
//               <ThemedText type="code">src/app/explore.tsx</ThemedText>
//             </ThemedText>
//             <ThemedText type="small">
//               The layout file in <ThemedText type="code">src/app/_layout.tsx</ThemedText> sets up
//               the tab navigator.
//             </ThemedText>
//             <ExternalLink href="https://docs.expo.dev/router/introduction">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Android, iOS, and web support">
//             <ThemedView type="backgroundElement" style={styles.collapsibleContent}>
//               <ThemedText type="small">
//                 You can open this project on Android, iOS, and the web. To open the web version,
//                 press <ThemedText type="smallBold">w</ThemedText> in the terminal running this
//                 project.
//               </ThemedText>
//               <Image
//                 source={require('@/assets/images/tutorial-web.png')}
//                 style={styles.imageTutorial}
//               />
//             </ThemedView>
//           </Collapsible>

//           <Collapsible title="Images">
//             <ThemedText type="small">
//               For static images, you can use the <ThemedText type="code">@2x</ThemedText> and{' '}
//               <ThemedText type="code">@3x</ThemedText> suffixes to provide files for different
//               screen densities.
//             </ThemedText>
//             <Image source={require('@/assets/images/react-logo.png')} style={styles.imageReact} />
//             <ExternalLink href="https://reactnative.dev/docs/images">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Light and dark mode components">
//             <ThemedText type="small">
//               This template has light and dark mode support. The{' '}
//               <ThemedText type="code">useColorScheme()</ThemedText> hook lets you inspect what the
//               user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
//             </ThemedText>
//             <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//               <ThemedText type="linkPrimary">Learn more</ThemedText>
//             </ExternalLink>
//           </Collapsible>

//           <Collapsible title="Animations">
//             <ThemedText type="small">
//               This template includes an example of an animated component. The{' '}
//               <ThemedText type="code">src/components/ui/collapsible.tsx</ThemedText> component uses
//               the powerful <ThemedText type="code">react-native-reanimated</ThemedText> library to
//               animate opening this hint.
//             </ThemedText>
//           </Collapsible>
//         </ThemedView>
//         {Platform.OS === 'web' && <WebBadge />}
//       </ThemedView>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//   },
//   contentContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   container: {
//     maxWidth: MaxContentWidth,
//     flexGrow: 1,
//   },
//   titleContainer: {
//     gap: Spacing.three,
//     alignItems: 'center',
//     paddingHorizontal: Spacing.four,
//     paddingVertical: Spacing.six,
//   },
//   centerText: {
//     textAlign: 'center',
//   },
//   pressed: {
//     opacity: 0.7,
//   },
//   linkButton: {
//     flexDirection: 'row',
//     paddingHorizontal: Spacing.four,
//     paddingVertical: Spacing.two,
//     borderRadius: Spacing.five,
//     justifyContent: 'center',
//     gap: Spacing.one,
//     alignItems: 'center',
//   },
//   sectionsWrapper: {
//     gap: Spacing.five,
//     paddingHorizontal: Spacing.four,
//     paddingTop: Spacing.three,
//   },
//   collapsibleContent: {
//     alignItems: 'center',
//   },
//   imageTutorial: {
//     width: '100%',
//     aspectRatio: 296 / 171,
//     borderRadius: Spacing.three,
//     marginTop: Spacing.two,
//   },
//   imageReact: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//   },
// });


// ============================================================
// ARQUIVO: src/screens/CadastroScreen.tsx
// DESCRIÇÃO: Tela de cadastro/boas-vindas. Primeira tela do
//            app onde o aluno digita seu nome. Demonstra o uso
//            de TextInput, Button e validação básica.
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,        // Campo de entrada de texto (como <input>)
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView, // Sobe o conteúdo quando o teclado aparece
  Platform,             // Detecta se está no iOS ou Android
  Alert,                // Caixas de diálogo nativas do sistema
} from 'react-native';
import { Colors, Spacing, BorderRadius, FontSize } from '@/constants/theme';

type Props = {
  navigation: any;
};

const CadastroScreen: React.FC<Props> = ({ navigation }) => {
  // Estados do formulário
  // useState<string>(''): estado do tipo string iniciando vazio
  const [nome, setNome] = useState<string>('');
  const [objetivo, setObjetivo] = useState<string>('');
  const [objetivoSelecionado, setObjetivoSelecionado] = useState<string>('');

  // Opções de objetivo para o aluno escolher
  const objetivos = [
    { id: 'perder', emoji: '🔥', label: 'Perder Peso' },
    { id: 'ganhar', emoji: '💪', label: 'Ganhar Massa' },
    { id: 'definir', emoji: '⚡', label: 'Definição' },
    { id: 'saude', emoji: '❤️', label: 'Saúde Geral' },
  ];

  // Função de validação e envio do formulário
  const aoEntrar = () => {
    // Trim(): remove espaços em branco do início e fim
    if (nome.trim().length < 2) {
      // Alert.alert: caixa de diálogo nativa do sistema
      Alert.alert(
        'Nome inválido',          // Título
        'Digite pelo menos 2 letras no seu nome.',  // Mensagem
        [{ text: 'OK' }]          // Botões
      );
      return; // Interrompe a função aqui
    }

    if (!objetivoSelecionado) {
      Alert.alert('Escolha um objetivo', 'Selecione o que deseja alcançar.');
      return;
    }

    // Navega para a Home passando o nome como parâmetro
    // replace: substitui a tela atual (o usuário não pode "voltar" para cá)
    navigation.replace('Principal', { nomeAluno: nome.trim() });
  };

  return (
    // KeyboardAvoidingView: empurra o conteúdo para cima quando o teclado aparece
    // behavior: 'padding' funciona bem no iOS; no Android geralmente não precisa
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
        // Fecha o teclado ao tocar fora do input
        keyboardShouldPersistTaps="handled"
      >
        {/* ========== LOGO / CABEÇALHO ========== */}
        <View style={styles.logoArea}>
          {/* Círculo decorativo com emoji */}
          <View style={styles.logoCirculo}>
            <Text style={styles.logoEmoji}>🏋️</Text>
          </View>
          <Text style={styles.appNome}>IRON</Text>
          <Text style={styles.appSubtitulo}>
            <Text style={styles.appSubtituloLaranja}>FIT</Text> Academia
          </Text>
          <Text style={styles.appSlogan}>Transforme seu corpo. Supere seus limites.</Text>
        </View>

        {/* ========== FORMULÁRIO ========== */}
        <View style={styles.formulario}>
          <Text style={styles.formTitulo}>Vamos começar!</Text>
          <Text style={styles.formSubtitulo}>
            Conte um pouco sobre você para personalizarmos sua experiência.
          </Text>

          {/* Campo de nome */}
          <View style={styles.campoGrupo}>
            <Text style={styles.campoLabel}>Seu nome 👤</Text>
            {/* TextInput: componente de entrada de texto */}
            <TextInput
              style={styles.input}
              placeholder="Ex: João Silva"
              placeholderTextColor={Colors.textoFraco} // Cor do placeholder
              value={nome}                             // Valor controlado pelo estado
              onChangeText={setNome}                   // Atualiza o estado ao digitar
              maxLength={30}                           // Limite de caracteres
              autoCapitalize="words"                   // Capitaliza cada palavra
              returnKeyType="next"                     // Botão "próximo" no teclado
            />
          </View>

          {/* Seleção de objetivo */}
          <View style={styles.campoGrupo}>
            <Text style={styles.campoLabel}>Seu objetivo 🎯</Text>
            <View style={styles.objetivosGrid}>
              {objetivos.map((obj) => (
                <TouchableOpacity
                  key={obj.id}
                  style={[
                    styles.objetivoCard,
                    // Estilo extra se este objetivo estiver selecionado
                    objetivoSelecionado === obj.id && styles.objetivoCardAtivo,
                  ]}
                  onPress={() => setObjetivoSelecionado(obj.id)}
                  activeOpacity={0.7}
                >
                  <Text style={styles.objetivoEmoji}>{obj.emoji}</Text>
                  <Text style={[
                    styles.objetivoTexto,
                    objetivoSelecionado === obj.id && styles.objetivoTextoAtivo,
                  ]}>
                    {obj.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Campo de observação opcional */}
          <View style={styles.campoGrupo}>
            <Text style={styles.campoLabel}>Observações (opcional)</Text>
            <TextInput
              style={[styles.input, styles.inputMultilinha]}
              placeholder="Ex: Tenho dor no joelho, prefiro evitar agachamentos..."
              placeholderTextColor={Colors.textoFraco}
              value={objetivo}
              onChangeText={setObjetivo}
              multiline         // Permite múltiplas linhas
              numberOfLines={3} // Altura inicial
              textAlignVertical="top" // Texto começa no topo (Android)
              maxLength={200}
            />
          </View>

          {/* Botão principal */}
          <TouchableOpacity
            style={[
              styles.botaoEntrar,
              // Deixa o botão mais apagado se o nome estiver vazio
              nome.trim().length < 2 && styles.botaoDesabilitado,
            ]}
            onPress={aoEntrar}
            activeOpacity={0.85}
          >
            <Text style={styles.botaoTexto}>Começar Agora 🚀</Text>
          </TouchableOpacity>

          <Text style={styles.rodape}>
            Ao continuar, você concorda com nossos Termos de Uso
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.fundoEscuro,
  },
  conteudo: {
    // paddingBottom: garante espaço no final ao rolar
    paddingBottom: Spacing.xxl,
  },
  // Área do logo no topo
  logoArea: {
    alignItems: 'center',
    paddingTop: Spacing.xxl + 20,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.fundoMedio,
    // Bordas arredondadas só na base
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomWidth: 3,
    borderBottomColor: Colors.laranja,
  },
  logoCirculo: {
    width: 90,
    height: 90,
    backgroundColor: Colors.laranja,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
    // Sombra laranja
    shadowColor: Colors.laranja,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
  },
  logoEmoji: {
    fontSize: 44,
  },
  appNome: {
    fontSize: FontSize.xxxl,
    fontWeight: '900',         // Peso máximo de fonte
    color: Colors.textoClaro,
    letterSpacing: 8,          // Espaçamento entre letras
  },
  appSubtitulo: {
    fontSize: FontSize.xl,
    color: Colors.textoClaro,
    fontWeight: '300',
    letterSpacing: 2,
    marginTop: -4,
  },
  appSubtituloLaranja: {
    color: Colors.laranja,
    fontWeight: 'bold',
  },
  appSlogan: {
    fontSize: FontSize.sm,
    color: Colors.textoFraco,
    marginTop: Spacing.sm,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  // Área do formulário
  formulario: {
    padding: Spacing.lg,
    marginTop: Spacing.lg,
  },
  formTitulo: {
    fontSize: FontSize.xxl,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    marginBottom: Spacing.xs,
  },
  formSubtitulo: {
    fontSize: FontSize.sm,
    color: Colors.textoFraco,
    lineHeight: 20,
    marginBottom: Spacing.lg,
  },
  campoGrupo: {
    marginBottom: Spacing.lg,
  },
  campoLabel: {
    fontSize: FontSize.sm,
    fontWeight: '600',
    color: Colors.textoMedio,
    marginBottom: Spacing.sm,
  },
  // Estilo do TextInput
  input: {
    backgroundColor: Colors.fundoMedio,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    color: Colors.textoClaro,
    fontSize: FontSize.md,
    borderWidth: 1,
    borderColor: Colors.bordaEscura,
  },
  inputMultilinha: {
    height: 90,     // Altura maior para múltiplas linhas
    paddingTop: Spacing.md, // Adiciona padding no topo para iOS
  },
  // Grid 2x2 para os objetivos
  objetivosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  objetivoCard: {
    // calc: cada card ocupa metade da largura menos o gap
    width: '47%',
    backgroundColor: Colors.fundoMedio,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.bordaEscura,
  },
  objetivoCardAtivo: {
    borderColor: Colors.laranja,
    backgroundColor: Colors.laranja + '22',
  },
  objetivoEmoji: {
    fontSize: 28,
    marginBottom: Spacing.xs,
  },
  objetivoTexto: {
    color: Colors.textoFraco,
    fontSize: FontSize.sm,
    fontWeight: '500',
  },
  objetivoTextoAtivo: {
    color: Colors.laranja,
    fontWeight: 'bold',
  },
  // Botão de entrar
  botaoEntrar: {
    backgroundColor: Colors.laranja,
    borderRadius: BorderRadius.lg,
    paddingVertical: Spacing.md + 4,
    alignItems: 'center',
    marginTop: Spacing.sm,
    shadowColor: Colors.laranja,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  botaoDesabilitado: {
    backgroundColor: Colors.fundoSuave,
    shadowOpacity: 0,
    elevation: 0,
  },
  botaoTexto: {
    color: Colors.textoClaro,
    fontSize: FontSize.lg,
    fontWeight: 'bold',
  },
  rodape: {
    textAlign: 'center',
    color: Colors.textoFraco,
    fontSize: FontSize.xs,
    marginTop: Spacing.md,
  },
});

export default CadastroScreen;