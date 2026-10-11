// netlify/functions/tesvpn.mjs
export default async (req, context) =>
{
    return new Response(JSON.stringify({
        message: "Функция работает!",
        status: "ok"
    }), {
        headers: { "Content-Type":
            "application/json" }
    });
};