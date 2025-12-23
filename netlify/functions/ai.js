export default async (req) => {
  try {
    const { q } = await req.json();
    return new Response(
      JSON.stringify({
        text: `تم الاستلام ✅\nسؤالك: ${q}\n\n(رد تجريبي — بعدها نركّب الذكاء)`,
        sources: []
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (e) {
    return new Response(JSON.stringify({ error: "Bad Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
};
