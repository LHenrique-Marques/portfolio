export const fetchHygraphQuery = async <T>(
  query: string,
  variables?: Record<string, any>,
  revalidate?: number,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(process.env.HYGRAPH_TOKEN && {
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      }),
    },
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 0 : revalidate,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await response.json()
  if (!json || !json.data) {
    console.error('❌ Erro ao buscar dados da Hygraph:')
    console.dir(json, { depth: null })
    throw new Error('Erro na resposta da API Hygraph')
  }

  return json.data
}
