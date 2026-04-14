export {};

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void;
        expand: () => void;
        colorScheme?: "light" | "dark";
        MainButton?: {
          setText: (text: string) => void;
          show: () => void;
          hide: () => void;
        };
      };
    };
  }
}
