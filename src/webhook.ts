const WEBHOOK_URL =
  import.meta.env.VITE_MAKE_WEBHOOK_URL ||
  "https://hook.us1.make.com/9oyi51u0g2lauvvvwpdi3uehsx7toasb";

// Sends only the submitted form fields plus a timestamp to the webhook
export function sendToWebhook(fields: Record<string, string>) {
  const payload = {
    ...fields,
    timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    keepalive: true,
    body: JSON.stringify(payload),
  }).catch((err) => {
    console.error("Webhook submission error:", err);
  });
}
