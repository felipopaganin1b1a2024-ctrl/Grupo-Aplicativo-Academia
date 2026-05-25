// ============================================================
// ARQUIVO: src/components/Header.tsx
// DESCRIÇÃO: Cabeçalho reutilizável que aparece em todas as
//            telas. Mostra o título da tela e opcionalmente
//            um botão de voltar.
// ============================================================

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,  // Controla a barra de status do celular
} from 'react-native';
import { Colors, Spacing, FontSize } from '@/constants/theme';

type Props = {
  titulo: string;
  subtitulo?: string;             // Opcional (com ?)
  onVoltar?: () => void;          // Se passado, mostra botão de voltar
  acaoDir?: {                     // Ação no lado direito (opcional)
    texto: string;
    onPress: () => void;
  };
};

const Header: React.FC<Props> = ({ titulo, subtitulo, onVoltar, acaoDir }) => {
  return (
    <>
      {/* StatusBar: configura a barra do sistema (hora, bateria) */}
      <StatusBar barStyle="light-content" backgroundColor={Colors.fundoEscuro} />

      <View style={styles.container}>
        {/* Botão de voltar (renderizado condicionalmente com &&) */}
        {onVoltar ? (
          <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
            <Text style={styles.iconeVoltar}>←</Text>
          </TouchableOpacity>
        ) : (
          // Espaço vazio para manter o título centralizado
          <View style={styles.espacoLateral} />
        )}

        {/* Títulos centralizados */}
        <View style={styles.titulos}>
          <Text style={styles.titulo}>{titulo}</Text>
          {/* Renderiza subtítulo apenas se foi passado */}
          {subtitulo ? (
            <Text style={styles.subtitulo}>{subtitulo}</Text>
          ) : null}
        </View>

        {/* Ação do lado direito */}
        {acaoDir ? (
          <TouchableOpacity style={styles.acaoDir} onPress={acaoDir.onPress}>
            <Text style={styles.acaoDirTexto}>{acaoDir.texto}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.espacoLateral} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: Colors.fundoEscuro,
    // Linha laranja na base do header
    borderBottomWidth: 2,
    borderBottomColor: Colors.laranja,
  },
  botaoVoltar: {
    width: 40,
    height: 40,
    backgroundColor: Colors.fundoMedio,
    borderRadius: 20,           // Torna o botão circular (width/2)
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeVoltar: {
    color: Colors.laranja,
    fontSize: 20,
    fontWeight: 'bold',
  },
  espacoLateral: {
    width: 40,  // Mesmo tamanho do botão de voltar para equilíbrio
  },
  titulos: {
    flex: 1,
    alignItems: 'center',  // Centraliza horizontalmente
  },
  titulo: {
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    color: Colors.textoClaro,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: FontSize.xs,
    color: Colors.laranja,
    marginTop: 2,
    textAlign: 'center',
  },
  acaoDir: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs,
  },
  acaoDirTexto: {
    color: Colors.laranja,
    fontWeight: '600',
    fontSize: FontSize.sm,
  },
});

export default Header;