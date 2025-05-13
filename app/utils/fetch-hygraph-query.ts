export const fetchHygraphQuery = async <T>(
  query: string,
  revalidate?: number
): Promise<T> => {
  console.log("🌐 HYGRAPH_URL:", process.env.HYGRAPH_URL);
  console.log(
    "🔐 HYGRAPH_TOKEN:",
    process.env.HYGRAPH_TOKEN?.slice(0, 10) + "..."
  );
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(process.env.HYGRAPH_TOKEN && {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      }),
    },
    next: {
      revalidate,
    },
    body: JSON.stringify({
      query,
    }),
  });
  console.log("📡 STATUS:", response.status);
  const json = await response.json();
  if (!json || !json.data) {
    console.error("❌ Erro ao buscar dados da Hygraph:", json.errors || json);
    throw new Error("Erro na resposta da API Hygraph");
  }

  return json.data;
};
