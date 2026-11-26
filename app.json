
import React, { useState, useEffect, useRef } from "react";

import { StatusBar } from "expo-status-bar";

import {
  Text,
  View,
  Pressable,
  TextInput,
  ScrollView,
  Animated,
  Easing,
} from "react-native";

import { styles } from "./styles";
import { colors } from "./colors";

export default function App() {
  const [nome, setNome] = useState("");
  const [contador, setContador] = useState(0);
  const [temaEscuro, setTemaEscuro] = useState(true);

  const meta = 10;
  const progresso = Math.min((contador / meta) * 100, 100);
  const metaAtingida = contador >= meta;

  const tema = temaEscuro ? colors.dark : colors.light;

  // ANIMAÇÕES
  const entrada = useRef(new Animated.Value(0)).current;
  const escala = useRef(new Animated.Value(1)).current;
  const progressoAnimado = useRef(new Animated.Value(0)).current;

  // EFEITOS PIXEL
  const sparkles = useRef(
    Array.from({ length: 12 }, () => ({
      opacity: new Animated.Value(0),
      scale: new Animated.Value(0.3),
    }))
  ).current;

  const posicoes = [
    { left: "5%", top: "10%" },
    { left: "85%", top: "8%" },
    { left: "15%", top: "35%" },
    { left: "90%", top: "30%" },
    { left: "8%", top: "60%" },
    { left: "88%", top: "65%" },
    { left: "25%", top: "85%" },
    { left: "75%", top: "88%" },
    { left: "50%", top: "5%" },
    { left: "48%", top: "95%" },
    { left: "3%", top: "80%" },
    { left: "95%", top: "48%" },
  ];

  // ANIMAÇÃO DE ENTRADA
  useEffect(() => {
    Animated.spring(entrada, {
      toValue: 1,
      friction: 6,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [entrada]);

  // ANIMAÇÃO DOS PONTOS
  function animarPontos() {
    Animated.sequence([
      Animated.timing(escala, {
        toValue: 1.3,
        duration: 120,
        useNativeDriver: true,
      }),

      Animated.spring(escala, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  }

  // ANIMAÇÃO DO PROGRESSO
  useEffect(() => {
    Animated.timing(progressoAnimado, {
      toValue: progresso,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [progresso, progressoAnimado]);

  // EFEITO PIXEL AO COMPLETAR A META
  useEffect(() => {
    if (metaAtingida) {
      const animacoes = sparkles.map((estrela, index) =>
        Animated.loop(
          Animated.sequence([
            Animated.delay(index * 100),

            Animated.parallel([
              Animated.timing(estrela.opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
              }),

              Animated.spring(estrela.scale, {
                toValue: 1.5,
                friction: 3,
                useNativeDriver: true,
              }),
            ]),

            Animated.delay(300),

            Animated.parallel([
              Animated.timing(estrela.opacity, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
              }),

              Animated.timing(estrela.scale, {
                toValue: 0.3,
                duration: 400,
                useNativeDriver: true,
              }),
            ]),
          ])
        )
      );

      animacoes.forEach((animacao) => animacao.start());

      return () => {
        animacoes.forEach((animacao) => animacao.stop());
      };
    } else {
      sparkles.forEach((estrela) => {
        estrela.opacity.setValue(0);
        estrela.scale.setValue(0.3);
      });
    }
  }, [metaAtingida, sparkles]);

  // FUNÇÕES DO CONTADOR
  function adicionarPonto() {
    animarPontos();
    setContador((valor) => valor + 1);
  }

  function diminuirPonto() {
    animarPontos();
    setContador((valor) => Math.max(0, valor - 1));
  }

  function zerarPontos() {
    animarPontos();
    setContador(0);
  }

  // BARRA ANIMADA
  const larguraBarra = progressoAnimado.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: tema.background },
      ]}
    >
      <StatusBar style={temaEscuro ? "light" : "dark"} />

      <ScrollView
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        <Animated.View
          style={[
            styles.cartao,
            {
              position: "relative",
              padding: 22,
              backgroundColor: tema.surface,
              opacity: entrada,
              transform: [
                {
                  translateY: entrada.interpolate({
                    inputRange: [0, 1],
                    outputRange: [40, 0],
                  }),
                },
                { scale: entrada },
              ],
            },
          ]}
        >
          {/* CABEÇALHO */}
          <View style={styles.cabecalho}>
            <Text style={styles.etiqueta}>
              PIXEL GAME • 8-BIT
            </Text>

            <Text style={styles.titulo}>
              DESAFIO PIXEL
            </Text>

            <Text
              style={[
                styles.subtitulo,
                { color: tema.subtitle },
              ]}
            >
              SUA JORNADA. SUA PONTUAÇÃO.
            </Text>
          </View>

          {/* NOME */}
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: tema.inputBackground,
                borderColor: tema.border,
                color: tema.text,
              },
            ]}
            placeholder="Digite seu nome..."
            placeholderTextColor={tema.subtitle}
            value={nome}
            onChangeText={setNome}
          />

          {/* BOAS-VINDAS */}
          <Text
            style={[
              styles.boasVindas,
              { color: tema.text },
            ]}
          >
            {nome.trim()
              ? `PLAYER: ${nome.toUpperCase()}`
              : "PLAYER 01"}
          </Text>

          {/* VISOR */}
          <View
            style={[
              styles.visor,
              { backgroundColor: tema.visor },
            ]}
          >
            <Text
              style={[
                styles.legendaVisor,
                { color: tema.subtitle },
              ]}
            >
              SCORE / PONTUAÇÃO
            </Text>

            <Animated.Text
              style={[
                styles.numero,
                {
                  color: tema.number,
                  transform: [{ scale: escala }],
                },
              ]}
            >
              {String(contador).padStart(5, "0")}
            </Animated.Text>

            <Text
              style={[
                styles.textoVisor,
                { color: tema.subtitle },
              ]}
            >
              {metaAtingida
                ? "LEVEL COMPLETED!"
                : `META: ${meta} PONTOS`}
            </Text>
          </View>

          {/* PROGRESSO */}
          <View style={styles.linhaMeta}>
            <Text style={{ color: tema.text, fontWeight: "900" }}>
              LEVEL PROGRESS
            </Text>

            <Text style={{ color: tema.text, fontWeight: "900" }}>
              {contador}/{meta}
            </Text>
          </View>

          <View
            style={[
              styles.barraFundo,
              { backgroundColor: tema.progressTrack },
            ]}
          >
            <Animated.View
              style={[
                styles.barraProgresso,
                { width: larguraBarra },
              ]}
            />
          </View>

          <Text
            style={[
              styles.textoProgresso,
              { color: tema.subtitle },
            ]}
          >
            {Math.round(progresso)}% COMPLETO
          </Text>

          {/* MENSAGEM */}
          {metaAtingida ? (
            <Text style={styles.mensagem}>
              ★ LEVEL UP! VOCÊ VENCEU! ★
            </Text>
          ) : (
            <Text
              style={[
                styles.dica,
                { color: tema.subtitle },
              ]}
            >
              CONTINUE JOGANDO PARA SUBIR DE LEVEL!
            </Text>
          )}

          {/* BOTÕES PRINCIPAIS */}
          <View style={styles.linhaBotoes}>
            <Pressable
              disabled={contador === 0}
              style={({ pressed }) => [
                styles.botao,
                styles.botaoMenos,
                contador === 0 && styles.botaoDesabilitado,
                pressed && { transform: [{ scale: 0.94 }] },
              ]}
              onPress={diminuirPonto}
            >
              <Text style={styles.textoBotao}>
                - DIMINUIR
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.botao,
                styles.botaoMais,
                pressed && { transform: [{ scale: 0.94 }] },
              ]}
              onPress={adicionarPonto}
            >
              <Text style={styles.textoBotao}>
                + GANHAR XP
              </Text>
            </Pressable>
          </View>

          {/* BOTÕES EXTRAS */}
          <View style={styles.linhaBotoes}>
            <Pressable
              style={({ pressed }) => [
                styles.botao,
                styles.botaoZerar,
                pressed && { transform: [{ scale: 0.94 }] },
              ]}
              onPress={zerarPontos}
            >
              <Text style={styles.textoBotao}>
                REINICIAR
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.botao,
                styles.botaoTema,
                pressed && { transform: [{ scale: 0.94 }] },
              ]}
              onPress={() => setTemaEscuro((valor) => !valor)}
            >
              <Text style={styles.textoBotao}>
                {temaEscuro ? "TEMA CLARO" : "TEMA ESCURO"}
              </Text>
            </Pressable>
          </View>

          {/* EFEITO DE CONQUISTA */}
          {metaAtingida && (
            <View
              pointerEvents="none"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 10,
              }}
            >
              {sparkles.map((estrela, index) => (
                <Animated.Text
                  key={index}
                  style={{
                    position: "absolute",
                    ...posicoes[index],
                    fontSize: 25,
                    fontWeight: "bold",
                    color:
                      index % 2 === 0
                        ? "#8BAC0F"
                        : "#DDE8C8",
                    opacity: estrela.opacity,
                    transform: [{ scale: estrela.scale }],
                  }}
                >
                  ✦
                </Animated.Text>
              ))}
            </View>
          )}
        </Animated.View>

        {/* RODAPÉ */}
        <Text
          style={[
            styles.rodape,
            { color: tema.subtitle },
          ]}
        >
          INSERT COIN • PIXEL GAME 8-BIT
        </Text>
      </ScrollView>
    </View>
  );
}
