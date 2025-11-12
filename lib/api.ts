const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!

type FetchInit = RequestInit & { next?: { revalidate?: number } }

export async function apiFetch<T>(path: string, init?: FetchInit): Promise<T> {
  const url = `${BASE}${path}`
  const res = await fetch(url, {
    ...init,
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
    next: init?.next || { revalidate: 60 },
  })
  if (!res.ok) throw new Error(`[API ${res.status}] ${await res.text()}`)
  return res.json() as Promise<T>
}

export type MatchRecord = { season: string; wins: number; losses: number; draws?: number }
export type PlayerStat = { slug: string; name: string; race: string; winRate: number; recent?: string[] }

export const getRecords = () => apiFetch<MatchRecord[]>(`/records`)
export const getPlayerStats = (slug: string) => apiFetch<PlayerStat>(`/players/${slug}/stats`)
