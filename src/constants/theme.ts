// /**
//  * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
//  * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
//  */

// import '@/global.css';

// import { Platform } from 'react-native';

// export const Colors = {
//   light: {
//     text: '#000000',
//     background: '#ffffff',
//     backgroundElement: '#F0F0F3',
//     backgroundSelected: '#E0E1E6',
//     textSecondary: '#60646C',
//   },
//   dark: {
//     text: '#ffffff',
//     background: '#000000',
//     backgroundElement: '#212225',
//     backgroundSelected: '#2E3135',
//     textSecondary: '#B0B4BA',
//   },
// } as const;

// export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

// export const Fonts = Platform.select({
//   ios: {
//     /** iOS `UIFontDescriptorSystemDesignDefault` */
//     sans: 'system-ui',
//     /** iOS `UIFontDescriptorSystemDesignSerif` */
//     serif: 'ui-serif',
//     /** iOS `UIFontDescriptorSystemDesignRounded` */
//     rounded: 'ui-rounded',
//     /** iOS `UIFontDescriptorSystemDesignMonospaced` */
//     mono: 'ui-monospace',
//   },
//   default: {
//     sans: 'normal',
//     serif: 'serif',
//     rounded: 'normal',
//     mono: 'monospace',
//   },
//   web: {
//     sans: 'var(--font-display)',
//     serif: 'var(--font-serif)',
//     rounded: 'var(--font-rounded)',
//     mono: 'var(--font-mono)',
//   },
// });

// export const Spacing = {
//   half: 2,
//   one: 4,
//   two: 8,
//   three: 16,
//   four: 24,
//   five: 32,
//   six: 64,
// } as const;

// export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
// export const MaxContentWidth = 800;



// ============================================================
// ARQUIVO: src/styles/theme.ts
// DESCRIÇÃO: Define as cores, fontes e espaçamentos globais
//            do app. Centralizar aqui facilita mudanças visuais.
// ============================================================

export type ThemeColor = 'primary' | 'secondary' | 'text';

export const Fonts = {
  mono: 'monospace',
};

export const Colors = {
  // Cores principais (identidade visual do app)
  laranja: '#FF6B00',        // Cor de destaque / ação
  laranjaClaro: '#FF9240',   // Variação mais clara do laranja
  laranjaEscuro: '#CC5500',  // Variação mais escura do laranja

  // Tons de cinza (fundo e superfícies)
  fundoEscuro: '#0F0F0F',    // Fundo principal (quase preto)
  fundoMedio: '#1A1A1A',     // Cards e painéis
  fundoSuave: '#252525',     // Superfícies secundárias
  bordaEscura: '#2E2E2E',    // Bordas e separadores

  // Texto
  textoClaro: '#FFFFFF',     // Texto principal
  textoMedio: '#CCCCCC',     // Texto secundário
  textoFraco: '#888888',     // Texto desabilitado / dica

  // Status
  sucesso: '#4CAF50',        // Verde para concluído
  alerta: '#FFC107',         // Amarelo para em andamento
  erro: '#F44336',           // Vermelho para erro
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 999,
};

export const FontSize = {
  xs: 11,
  sm: 13,
  md: 15,
  lg: 18,
  xl: 22,
  xxl: 28,
  xxxl: 36,
};
