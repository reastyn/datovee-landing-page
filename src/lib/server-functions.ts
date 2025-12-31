import { createServerFn } from "@tanstack/react-start";

export const sendContactMessage = createServerFn()
  .inputValidator((data: { name: string; email: string; message: string }) => {
    if (!data.name || !data.email || !data.message) {
      throw new Error("Všechna pole jsou povinná");
    }
    return data;
  })
  .handler(
    async ({
      data,
    }: {
      data: { name: string; email: string; message: string };
    }) => {
      try {
        // Send to Discord webhook
        const webhookUrl =
          "https://discord.com/api/webhooks/1455941485789974593/Mr6haraBVgcd6gJ5IHtaM4u74sWHvZzCUMQXQ0JYh28OZ8EdTEoKTm1KsM0UmHX6NgCQ";

        const discordMessage = {
          content: "**Nová zpráva z kontaktního formuláře**",
          embeds: [
            {
              title: "Kontaktní formulář - Datovee",
              color: 0x5865f2, // Discord blue
              fields: [
                {
                  name: "Jméno",
                  value: data.name,
                  inline: true,
                },
                {
                  name: "E-mail",
                  value: data.email,
                  inline: true,
                },
                {
                  name: "Zpráva",
                  value: data.message,
                  inline: false,
                },
              ],
              timestamp: new Date().toISOString(),
            },
          ],
        };

        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(discordMessage),
        });

        if (!response.ok) {
          throw new Error(`Discord webhook error: ${response.status}`);
        }

        return { success: true, message: "Zpráva byla úspěšně odeslána" };
      } catch (error) {
        console.error("Error sending contact form:", error);
        throw new Error(
          "Nastala chyba při odesílání zprávy. Zkuste to prosím později."
        );
      }
    }
  );
