// ChatWidget.js
"use client"
import { useEffect } from 'react';

const ChatWidget = () => {
  useEffect(() => {
    if (window.chatWidgetScriptLoaded) return;

    window.ChatWidgetConfig = {
      projectId: "686d8006614557af9759d21d",
    };

    const script = document.createElement('script');
    script.src = "https://storage.googleapis.com/cdwidget/dist/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    window.chatWidgetScriptLoaded = true;

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
      delete window.chatWidgetScriptLoaded;
      delete window.ChatWidgetConfig;
    };
  }, []);

  return <div id="cd-widget"></div>;
};

export default ChatWidget;