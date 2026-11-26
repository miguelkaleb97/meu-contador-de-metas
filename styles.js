
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },

  cartao: {
    width: "100%",
    maxWidth: 430,
    borderRadius: 12,
    padding: 22,
    borderWidth: 3,
    borderColor: colors.primary,
    elevation: 8,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },

  cabecalho: {
    alignItems: "center",
    marginBottom: 12,
  },

  etiqueta: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 3,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 25,
    fontWeight: "900",
    color: colors.primary,
    textAlign: "center",
  },

  subtitulo: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
    marginBottom: 20,
  },

  input: {
    borderWidth: 2,
    borderRadius: 7,
    padding: 14,
    fontSize: 14,
    marginBottom: 12,
  },

  boasVindas: {
    fontSize: 17,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 12,
  },

  visor: {
    borderRadius: 8,
    borderWidth: 3,
    borderColor: colors.primary,
    padding: 20,
    alignItems: "center",
    marginVertical: 10,
  },

  legendaVisor: {
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 8,
  },

  numero: {
    fontSize: 46,
    fontWeight: "900",
    letterSpacing: 3,
  },

  textoVisor: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "700",
  },

  linhaMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 9,
  },

  barraFundo: {
    height: 13,
    borderRadius: 3,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.secondary,
  },

  barraProgresso: {
    height: 13,
    backgroundColor: colors.progress,
    borderRadius: 2,
  },

  textoProgresso: {
    textAlign: "center",
    marginTop: 8,
    marginBottom: 15,
    fontWeight: "900",
    fontSize: 12,
  },

  mensagem: {
    color: colors.primary,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 14,
    fontSize: 15,
  },

  dica: {
    textAlign: "center",
    marginBottom: 14,
  },

  linhaBotoes: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 11,
  },

  botao: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: "#526B43",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },

  botaoMenos: {
    backgroundColor: colors.secondary,
    marginRight: 6,
  },

  botaoMais: {
    backgroundColor: colors.success,
    marginLeft: 6,
  },

  botaoZerar: {
    backgroundColor: colors.secondary,
    marginRight: 6,
  },

  botaoTema: {
    backgroundColor: colors.purple,
    marginLeft: 6,
  },

  botaoDesabilitado: {
    opacity: 0.4,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
  },

  rodape: {
    marginTop: 18,
    fontSize: 11,
    textAlign: "center",
    fontWeight: "700",
  },

  confete: {
    position: "absolute",
    top: 0,
    right: 0,
    fontSize: 27,
  },
});

export default styles;
