export default function Watson(props) {


  if (typeof window !== "undefined") {
    window.watsonAssistantChatOptions = {
      integrationID: "cac2eb57-3a5a-4589-af54-1909240177dc", // The ID of this integration.
      region: "us-south", // The region your integration is hosted in.
      serviceInstanceID: "9f69132e-13f5-4ad9-aab5-e2675ea3cf2c",

      // Config option to change Carbon themes.
      carbonTheme: 'g90',// The ID of your service instance.
      onLoad: function(instance) {
        // Instance method to adjust specific CSS variables
        instance.updateCSSVariables({
          'BASE-font-family': '"Fira Code", Times, serif',
          '$active-primary': '#0c83e2',
          '$focus': '#0c83e2',
          '$hover-primary': '#0c83e2',
          '$interactive-01': '#0c83e2'
        });
        instance.render();
      },
      showLauncher: false,
      openChatByDefault: true
    };
    setTimeout(function () {
      const t = document.createElement('script');
      t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  }

  return null;
}