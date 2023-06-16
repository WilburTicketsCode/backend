let setNovaNotificacaoCallback: ((value: boolean) => void) | null = null;

export const setNovaNotificacao = (value: boolean) => {
  if (setNovaNotificacaoCallback) {
    setNovaNotificacaoCallback(value);
  }
};

export const registrarCallbackNotificacao = (callback: (value: boolean) => void) => {
  setNovaNotificacaoCallback = callback;
};